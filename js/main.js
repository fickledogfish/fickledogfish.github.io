window.onload = () => {
    document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
    });
}