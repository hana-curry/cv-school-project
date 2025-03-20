const themes = {
    "dark": {
        "spacers": [
        "./public/images/spacer-1.svg",
        "./public/images/spacer-2.svg"
        ],
        "colors": {
            "highlight": "var(--special)",
            "background": "var(--dark)",
            "foreground": "var(--light)",
        },
        "bg": "background-spiral.svg"
    },

    "light": {
        "spacers": [
        "./public/images/spacer-1-light.svg",
        "./public/images/spacer-2-light.svg"
        ],
        "colors": {
            "highlight": "var(--special-2)",
            "background": "var(--light)",
            "foreground": "var(--dark)",
        },
        "bg": "background-spiral-light.svg"
    },

    "pink-light": {
        "spacers": [
        "./public/images/spacer-1-pink-light.svg",
        "./public/images/spacer-1-pink-light.svg"
        ],
        "colors": {
            "highlight": "#F2426E",
            "background": "#FFF5FC",
            "foreground": "#3B1229",
        },
        "bg": "background-spiral-pink-light.svg"
    },

    "pink-dark": {
        "spacers": [
        "./public/images/spacer-1-pink.svg",
        "./public/images/spacer-1-pink.svg"
        ],
        "colors": {
            "highlight": "#D68F96",
            "background": "#3B1229",
            "foreground": "#FFF5FC",
        },
        "bg": "background-spiral-pink-dark.svg"
    }
}

export default themes