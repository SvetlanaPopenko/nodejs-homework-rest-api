const jimp = require("jimp");

const jimpResize = async (path) => {
  try {
    const image = await jimp.read(path);
    await image.cover(250, 250);
    await image.resize(250, 250);
    await image.writeAsync(path);
  } catch (error) {
    console.log(error);
  }
};

module.exports = jimpResize;
