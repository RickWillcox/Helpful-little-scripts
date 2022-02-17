// Blazeface AI
// const fs = require("fs");
const gm = require("gm");
const util = require("util");
const blazeface = require("@tensorflow-models/blazeface");
const tf = require("@tensorflow/tfjs-node");

async function hasFace(image_path, model) {
    const readImg = util.promisify(fs.readFile);
    const img = await readImg(image_path);
    const adaptedImg = tf.node.decodeImage(img, 3);

    const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
    const predictions = await model.estimateFaces(adaptedImg, returnTensors);

    // Can use the predictions to draw the boxes on the image instead of just returning true or false here
    if (predictions.length > 0) {
        return true;
    } else {
        return false;
    }
}
