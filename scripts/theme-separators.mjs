const imgTheme = {
    "dark": [
        "./public/images/spacer-1.svg",
        "./public/images/spacer-2.svg"
    ],
    "light": [
        "./public/images/spacer-1-light.svg",
        "./public/images/spacer-2-light.svg"
    ]
}

export default function themeSeparators() {
    $(document).ready(function () {
        const theme = getComputedStyle(document.documentElement).getPropertyValue('--theme').replace(/"/g, '').trim();
        $(".separator-svg").each((key, el) => {
            $(el).attr("src", imgTheme[theme][key%2]);
        })
    });
}