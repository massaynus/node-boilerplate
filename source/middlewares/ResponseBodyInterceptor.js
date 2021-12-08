export default function (req, res, next) {
    const oldJson = res.json;
    res.json = (body) => {
        res.locals.body = body;
        return oldJson.call(res, body);
    };
    next();
}