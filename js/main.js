window.onload = () => {
	document
		.querySelectorAll("pre code[class^=\"language-\"]")
		.forEach(hljs.highlightElement);
}