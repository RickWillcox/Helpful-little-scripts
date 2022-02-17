const fs = require("fs");
const Axios = require("axios");

async function downloadImage(url, filepath) {
    const response = await Axios({
        url,
        method: "GET",
        responseType: "stream",
    });
    return new Promise((resolve, reject) => {
        response.data
            .pipe(fs.createWriteStream(filepath))
            .on("error", reject)
            .once(
                "close",
                () => resolve(filepath),
                console.log("image downloaded")
            );
    });
}
