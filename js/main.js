import { HTMLInclude } from "./html-include.js";

window.customElements.define("html-include", HTMLInclude);

window.onload = () => {
    document
        .querySelectorAll("pre code")
        .forEach(hljs.highlightElement);
}