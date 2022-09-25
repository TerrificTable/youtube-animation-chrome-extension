var style = document.createElement("style");
style.appendChild(document.createTextNode(`
#subscribe-button {
    padding: 0 15px;
    color: #fff;
}

#subscribe-button .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 0;
    width: 200px;
    border-radius: 10px;
}

#subscribe-button .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:after {
    z-index: -1;
    
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    
    border-radius: 10px;
}
#subscribe-button .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff00c8, #002bff, #00ffd5, #48ff00, #fffb00, #7a00ff, #ff7300, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    border-radius: 10px;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-left 20s linear infinite;
    opacity: 1;
    transition: opacity .3s ease-in-out;
}


.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
    color: #fff;
}

.yt-spec-button-shape-next--filled {
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 0;
    width: 200px;
    border-radius: 10px;
}

.yt-spec-button-shape-next--filled:after {
    z-index: -1;
    
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    
    border-radius: 10px;
}

.yt-spec-button-shape-next--filled:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    border-radius: 10px;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-right 20s linear infinite;
    opacity: 1;
    transition: opacity .3s ease-in-out;
}


@keyframes glowing-left {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 400% 0;
    }
    100% {
        background-position: 0 0;
    }
}


@keyframes glowing-right {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: -400% 0;
    }
    100% {
        background-position: 0 0;
    }
}



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
    transform: scale(1.02);
}

ytd-account-item-renderer {
    border-radius: 10px;
    transition: all .1s;
}
ytd-account-item-renderer:hover {
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

