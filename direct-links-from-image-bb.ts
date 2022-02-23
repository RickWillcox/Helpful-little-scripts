/* In ImageLinks should be its own .ts file that contains the following code:
export const ImageLinks = [
    "https://ibb.co/Ytkbgf9",
    "https://ibb.co/yWtXpfM"
];
Add as many links as you need, the links need to be the default page that imgbb gives you (sme format as above)
from there make a tmp/realImageLinks.txt and run the script. That text file will populate with direct links */

import { ImageLinks } from "./ImageLinks";

ImageLinks.forEach((link) => {
    rp(link)
        .then(function (html) {
            //success!
            let regex = /<meta property="og:image" content=".*/g;
            let str = html.toString();
            let match = str.match(regex);
            match = match[0].substr(35).slice(0, -4);
            match += "\n";
            console.log(match);
            fs.appendFile("tmp/realImageLinks.txt", match, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log("file saved");
                }
            });
        })
        .catch(function (err) {
            //handle error
        });
});
