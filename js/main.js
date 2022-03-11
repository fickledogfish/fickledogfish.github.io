import { HTMLInclude } from "./html-include.js";

window.customElements.define("html-include", HTMLInclude);

window.onload = () => {
	document
		.querySelectorAll("pre code[class^=\"language-\"]")
		.forEach(hljs.highlightElement);
}