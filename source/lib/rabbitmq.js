import amqp from "amqplib";
import { RABBITMQ_URL } from "./config";

/**
 * @type {import('amqplib').Connection}
 */
let connection = null;

/**
 * get a channel
 * @returns {import('amqplib').Channel}
 */
export const getChannel = async (prefetch = 150) => {
  const channel = await connection.createChannel();
  await channel.prefetch(prefetch);
  return channel;
};

/**
 * initialise an AMQP client and returns the channel
 * @param {String} queue the queue to assert
 * @returns {amqp.Channel}
 */
export async function initClient(queue) {
  if (!connection) {
    console.log(`connecting to rabbitmq @ ${RABBITMQ_URL}`);
    connection = await amqp.connect(RABBITMQ_URL);
  }

  const channel = await getChannel();
  await channel.assertQueue(queue, { durable: true });

  return channel;
}

/**
 * send a msg to the jobs queue
 * @param {amqp.Channel} channel the channel to use
 * @param {String} queue the queue name
 * @param {String} msg the msg to be sent
 */
export async function sendJob(channel, queue, msg) {
  await channel.sendToQueue(
    queue,
    Buffer.from(msg),
    { persistent: true }
  );
}
