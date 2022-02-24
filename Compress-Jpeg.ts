const sharp = require("sharp");

async compress(PATH_TO_DOWNLOADED_FILE: string) {
        try {
            await sharp(PATH_TO_DOWNLOADED_FILE)
            .toFormat("jpeg", { mozjpeg: true })
            .toFile(SAVE_PATH);
        } catch (error) {
            console.log(error);
        }
}