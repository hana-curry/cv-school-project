const backgroundsImageFolder = "../public/images/background-img";
const spacersImageFolder = "../public/images/spacers"

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
 */
export function themeBackgroundImage(theme) {
    const body = $("body");
    const backgroundImage = theme.bg;
    body.css(
        "background-image",
        `url('${backgroundsImageFolder}/${backgroundImage}')`
    );
}


/**
 * Updates the `src` attribute of each separator element based on the provided theme spacers.
 * @param {Object} theme - The theme object containing spacers.
 */
export function themeSeparators(theme) {
    const separator = $(".separator-svg");
    separator.each((key, element) => {
        $(element).attr(
            "src",
            `${spacersImageFolder}/${theme.spacers[key%2]}`
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


/**
 * Extracts the color picker type from an element's ID.
 * @param {HTMLElement} element - The element to get the color picker type from.
 * @returns {string} The extracted color picker type.
 */

export function getColorPickerType(element) {
    const id = element.id ?? "";
    return id.replace("-theme-btn", "").trim();
}


/**
 * Sets up color picker buttons by applying theme colors to each button.
 * @param {Object} themes - An object containing available themes.
 */

export function setupColorPickerButtons(themes) {
    $(".color-picker-btn").each((_, element) => {
        const type = getColorPickerType(element);
        if (Object.keys(themes).includes(type)) {
            const theme = themes[type];
            const primary = theme.colors.highlight;
            const secondary = theme.colors.background;
            $(element).append(`
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4853 3.51472C25.1716 8.20101 25.1716 15.799 20.4853 20.4853C15.799 25.1716 8.20101 25.1716 3.51472 20.4853C-1.17157 15.799 -1.17157 8.20101 3.51472 3.51472C8.20101 -1.17157 15.799 -1.17157 20.4853 3.51472Z" fill="${primary}"/>
                <path d="M20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 -3.44416e-08 12 0C10.4241 3.44416e-08 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C2.40042 4.62902 1.5165 5.95189 0.913445 7.4078C0.310389 8.86371 -1.03325e-07 10.4241 0 12C1.03325e-07 13.5759 0.310389 15.1363 0.913446 16.5922C1.5165 18.0481 2.40042 19.371 3.51472 20.4853L20.4853 3.51472Z" fill="${secondary}"/>
                </svg>`);
        }
    })
};


/**
 * Handles the color picker button click event to apply the selected theme.
 * @param {Object} themes - An object containing available themes.
 */

export function handleColorPickerButton(themes) {
    $(".color-picker-btn").on("click", element => {
        const type = getColorPickerType(element.currentTarget);
        if (Object.keys(themes).includes(type)) {
            const theme = themes[type];
            Object.entries(theme.colors).forEach(element => {
                const [variable, value] = element;
                $("html").css(`--${variable}`, value);
            })
            changeTheme(themes, type);
        }
    })

};


/**
 * Initializes the color picker feature by setting up buttons and handling theme selection.
 * @param {Object} themes - An object containing available themes.
 */

export function colorPicker(themes) {
    setupColorPickerButtons(themes);
    handleColorPickerButton(themes);
};