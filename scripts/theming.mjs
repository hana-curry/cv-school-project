const imageFolder = "../public/images";

/**
 * Returns either "dark" or "light" depending on the user's browser theme settings.
 * @returns {"dark" | "light"} A string representing a theme.
 */
export function getUserDefaultThemeString() {
    const documentStyles = getComputedStyle(document.documentElement);
    const rawTheme = documentStyles.getPropertyValue('--theme');
    const theme = rawTheme.replace(/"/g, '').trim();
    if (["dark", "light"].includes(theme)) {
        return theme;
    } else {
        return "dark";
    }
};


/**
 * Sets the background image of the body element based on the provided theme.
 * @param {Object} theme - The theme object containing the background image.
 * @param {string} theme.bg - The filename of the background image to apply.
 */
export function themeBackgroundImage(theme) {
    const body = $("body");
    const backgroundImage = theme.bg;
    body.css(
        "background-image",
        `url('${imageFolder}/${backgroundImage}')`
    );
}


/**
 * Updates the `src` attribute of each separator element based on the provided theme spacers.
 * @param {Object} theme - The theme object containing spacers.
 * @param {Array<string>} theme.spacers - An array of spacers used to update the separator `src` attributes.
 */
export function themeSeparators(theme) {
    const separator = $(".separator-svg");
    separator.each((key, element) => {
        $(element).attr(
            "src",
            theme.spacers[key%2]
        );
    })
};


/**
 * Checks if a theme name exists in the given themes object.
 * @param {string} themeName - The name of the theme to check.
 * @param {Object} themes - the themes Object (defined in data/themes.mjs)
 * @returns {boolean} true if the theme name exists, false otherwise.
 */
export function checkIfThemeNameExists(themeName, themes) {
    if (themes[themeName]) return true;
    else return false;
};


/**
 * Changes the theme to the specified theme name.
 * @param {string | undefined | null} themeName - The name of the theme to apply.
 * @returns {boolean} True if the theme was successfully changed, false otherwise.
 */
export function changeTheme(themes, themeName) {
    const themeString = themeName ?? getUserDefaultThemeString();
    if (!checkIfThemeNameExists(themeString, themes)) return false;
    try {
        const theme = themes[themeString];
        themeSeparators(theme);
        themeBackgroundImage(theme);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};