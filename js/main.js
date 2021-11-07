window.onload = () => {
    document
        .querySelectorAll("pre code")
        .forEach(hljs.highlightElement);
}