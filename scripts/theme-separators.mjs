const imgTheme = {
    "dark": {
        "spacers": [
        "./public/images/spacer-1.svg",
        "./public/images/spacer-2.svg"
        ],
        "bg": "background-spiral.svg"
    },
    "light": {
        "spacers": [
        "./public/images/spacer-1-light.svg",
        "./public/images/spacer-2-light.svg"
        ],
        "bg": "background-spiral-light.svg"
    },
    "pink-light": {
        "spacers": [
        "./public/images/spacer-1-pink-light.svg",
        "./public/images/spacer-1-pink-light.svg"
        ],
        "bg": "background-spiral-pink-light.svg"
    }, 
    "pink-dark": {
        "spacers": [
        "./public/images/spacer-1-pink.svg",
        "./public/images/spacer-1-pink.svg"
        ],
        "bg": "background-spiral-pink-dark.svg"
    }
}

export function changeBackgroundImgTheme(precisedTheme) {
    const theme = precisedTheme ?? getComputedStyle(document.documentElement).getPropertyValue('--theme').replace(/"/g, '').trim();
    console.log(imgTheme[theme].bg)
    $("body").css("background-image", `url('../public/images/${imgTheme[theme].bg}')`)
}

export function changeSpacerOnTheme(precisedTheme) {
    const theme = precisedTheme ?? getComputedStyle(document.documentElement).getPropertyValue('--theme').replace(/"/g, '').trim();
    $(".separator-svg").each((key, el) => {
        $(el).attr("src", imgTheme[theme].spacers[key%2]);
    })
}

export default function themeSeparators() {
    $(document).ready(function () {
        changeSpacerOnTheme()
    });
}