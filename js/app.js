(() => {
    "use strict";
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modalContainer = document.querySelector(".modal-container");
    const videoIframe = document.querySelector(".video-iframe");
    const closeButton = document.querySelector(".close-button");
    const isEscapeKey = evt => "Escape" === evt.key;
    thumbnails.forEach((thumbnail => {
        thumbnail.addEventListener("click", (() => {
            const videoId = thumbnail.dataset.id;
            const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            videoIframe.src = videoUrl;
            modalContainer.style.display = "flex";
        }));
    }));
    closeButton.addEventListener("click", (() => {
        videoIframe.src = "";
        modalContainer.style.display = "none";
    }));
    const onDocumentKeydown = evt => {
        if (isEscapeKey(evt)) {
            evt.preventDefault();
            videoIframe.src = "";
            modalContainer.style.display = "none";
        }
    };
    document.addEventListener("keydown", onDocumentKeydown);
})();