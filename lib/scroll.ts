export function scrollToBottom() {
    window.scrollTo({
        behavior: "auto",
        top: document.body.scrollHeight,
    });
}
