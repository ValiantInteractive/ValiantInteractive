function setIcon() {
    var link = document.querySelector("link[rel~='icon']");
    var icon = "images/favicon.icon";
    
    if (!link) {
        link = document.createElement("link");
        link.rel = "link";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

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
            icon = "images/favicon.ico";
            break;
    }

    link.href = icon;
}