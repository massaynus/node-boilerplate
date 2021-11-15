import Redis from "ioredis";
import { REDIS_URL } from "./config";

export const ioclient = new Redis(REDIS_URL);

function makeLock(lock) {
  return `LOCK:${lock}`;
}

export async function acquireLock(lock) {
  lock = makeLock(lock);
  if (!(await ioclient.exists(lock))) {
    await ioclient.set(lock, "RELEASED");
  }

  while (true) {
    if ((await ioclient.get(lock)) === "RELEASED") {
      console.log(`acquired lock ${lock}`);
      await ioclient.set(lock, "ACQUIRED");
      break;
    } else {
      console.log(`the lock ${lock} is already acquired, retrying in 500ms`);
      await new Promise((res) => setTimeout(res, 500));
    }
  }
}

export async function releaseLock(lock) {
  lock = makeLock(lock);
  console.log(`released lock ${lock}`);
  await ioclient.set(lock, "RELEASED");
}
