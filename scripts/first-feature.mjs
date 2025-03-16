export default function firstFeature() {
    $("img#contact-profile-picture").on("click", () => {
        $("#img-dialog").css("display", "flex")
    })

    $("#close-dialog-btn").on("click", () => {
        $("#img-dialog").css("display", "none")
    })

    $(window).on("resize", () => {
        const width = $(window).width()
        console.log(width)
        if (width < 720) {
            $("#img-dialog").css("display", "none")
        }

    })

    $("#img-dialog").on("click", (e) => {
        if (e.target == e.currentTarget) {
            $("#img-dialog").css("display", "none")
        }
    })
}