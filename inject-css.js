var style = document.createElement("style");
style.appendChild(document.createTextNode(`
ytd-compact-link-renderer {
    border-radius: 10px;
    transition: all .1s;
}

ytd-compact-link-renderer:hover {
    box-shadow: 2px 2px 10px #000;
    transform: scale(1.002);
}

ytd-guide-entry-renderer {
    border-radius: 10px;
    transition: all .1s;
}
ytd-guide-entry-renderer:hover {
    box-shadow: 2px 2px 10px #000;
    transform: scale(1.002);
}

ytd-rich-section-renderer #content {
    border-radius: 10px;
    transition: all .1s;
}
ytd-rich-section-renderer #content:hover {
    transform: scale(1.007);
}

ytd-compact-video-renderer {
    border-radius: 10px;
    transition: all .1s;
}
ytd-compact-video-renderer:hover {
    box-shadow: 5px 5px 15px #000;
    transform: scale(1.03);
}

ytd-compact-radio-renderer {
    border-radius: 10px;
    transition: all .1s;
}
ytd-compact-radio-renderer:hover {
    box-shadow: 5px 5px 15px #000;
    transform: scale(1.03);
}

ytd-channel-featured-content-renderer #contents {
    border-radius: 10px;
    transition: all .2s;
}
ytd-channel-featured-content-renderer #contents:hover {
    box-shadow: 5px 5px 15px #000;
    transform: scale(1.03);
}

ytd-grid-playlist-renderer {
    border-radius: 10px;
    transition: all .1s;
}
ytd-grid-playlist-renderer:hover {
    box-shadow: 5px 5px 15px #000;
    transform: scale(1.03);
}

ytd-grid-channel-renderer {
    border-radius: 10px;
    transition: all .1s;
}
ytd-grid-channel-renderer:hover {
    box-shadow: 5px 5px 15px #000;
    transform: scale(1.03);
}


ytd-grid-video-renderer {
    border-radius: 10px;
    transition: all .1s;
}
ytd-grid-video-renderer:hover {
    box-shadow: 5px 5px 15px #000;
    transform: scale(1.03);
}

ytd-rich-item-renderer #content {
    border-radius: 10px;
    transition: all .1s;
}
ytd-rich-item-renderer #content:hover {
    box-shadow: 5px 5px 15px #000;
    transform: scale(1.03);
}`));
document.body.appendChild(style);
// style.sheet.insertRule(``, 0);
console.log("CSS injected");

