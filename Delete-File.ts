async function deleteImage() {
    fs.unlink("image.jpg", (err) => {
        if (err) {
            throw err;
        }
        console.log("image was deleted");
    });
}
