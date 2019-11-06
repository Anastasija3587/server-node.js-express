const fs = require("fs");
const path = require("path");

const mainRoute = (request, response) => {
  const filePath = path.join(__dirname, "../../../", "assets", "pizzeria.jpg");
  fs.stat(filePath, () => {
    response.writeHead(201, {
      "Content-Type": "image/jpeg"
    });
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
  });
};

module.exports = mainRoute;
