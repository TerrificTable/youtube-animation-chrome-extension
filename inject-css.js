var style = document.createElement("style");
style.appendChild(document.createTextNode(`
ytd-guide-entry-renderer {
    border-radius: 10px;
    transition: all .1s;
}
ytd-guide-entry-renderer:hover {
    box-shadow: 5px 5px 15px #000;
    transform: scale(1.05);
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

