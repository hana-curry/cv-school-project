import firstFeature from "./first-feature.mjs";
import secondFeature from "./second-feature.mjs";
import { changeTheme } from "./theming.mjs"
import neko from "./plugin/oneko-ie6.js";
import themes from "./data/themes.mjs";

function main() {
    $(document).ready(() => {
        // First feature --- you can click on my profile picture to zoom on it
        firstFeature();
    
        // Second feature --- theme changer
        secondFeature();
    
        // Plugin feature --- a cat following the user's cursor
        neko();
        
        // change the theme of some images depending on the browser's default theme
        changeTheme(themes);
    })
}

main()