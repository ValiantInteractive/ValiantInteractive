function setIcon() {

    let icon;

    switch (navigator.userAgent) {
        case "Win":
            icon = "images/favicon-32x32.png";
            break;
        case "Mac":
            icon = "images/safari-pinned.tap";
            break;
        case "iOS":
            icon = "images/apple-touch-icon.png";
            break;
        case "Android":
            icon = "images/android-chrome-192x192.png";
            break;
        default:
            icon = "favicon.ico";
            break;
    }

    document.getElementsByName("image") = icon;
}