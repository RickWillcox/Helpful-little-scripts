const fs = require("fs");

async function deleteFile(file_path) {
    fs.unlink(file_path, (err) => {
        if (err) {
            throw err;
        }
        console.log("file was deleted");
    });
}
