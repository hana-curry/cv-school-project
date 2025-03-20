import { changeTheme } from "./theming.mjs";
import themes from "./data/themes.mjs";

const themeColors = {
    "light-theme-btn": {
        "highlight": "var(--special-2)",
        "background": "var(--light)",
        "foreground": "var(--dark)",
        "theme": "light"
    },
    "dark-theme-btn": {
        "highlight": "var(--special)",
        "background": "var(--dark)",
        "foreground": "var(--light)",
        "theme": "dark"
    },
    "pink-light-theme-btn": {
        "highlight": "#F2426E",
        "background": "#FFF5FC",
        "foreground": "#3B1229",
        "theme": "pink-light"
    },
    "pink-dark-theme-btn": {
        "highlight": "#D68F96",
        "background": "#3B1229",
        "foreground": "#FFF5FC",
        "theme": "pink-dark"
    },
}

export default function secondFeature() {

    $(".color-picker-btn").each((key, element) => {
        const type = element.id ?? ""
        if (Object.keys(themeColors).includes(type)) {
            const theme = themeColors[type]
                $(element).append(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4853 3.51472C25.1716 8.20101 25.1716 15.799 20.4853 20.4853C15.799 25.1716 8.20101 25.1716 3.51472 20.4853C-1.17157 15.799 -1.17157 8.20101 3.51472 3.51472C8.20101 -1.17157 15.799 -1.17157 20.4853 3.51472Z" fill="${theme.highlight}"/>
<path d="M20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 -3.44416e-08 12 0C10.4241 3.44416e-08 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C2.40042 4.62902 1.5165 5.95189 0.913445 7.4078C0.310389 8.86371 -1.03325e-07 10.4241 0 12C1.03325e-07 13.5759 0.310389 15.1363 0.913446 16.5922C1.5165 18.0481 2.40042 19.371 3.51472 20.4853L20.4853 3.51472Z" fill="${theme.background}"/>
</svg>`)
        }
    })

    $(".color-picker-btn").on("click", (element) => {
        const type = element.currentTarget.id ?? ""
        if (Object.keys(themeColors).includes(type)) {
            const theme = themeColors[type]
            Object.entries(theme).forEach(element => {
                $("html").css(`--${element[0]}`, element[1])
            })
            changeTheme(themes, theme.theme)
        }
    })
}