window.onload = () => {
	document
		.querySelectorAll("pre code[class^=\"language-\"]")
		.forEach(el => {
			el.textContent = el.textContent
				.split("\n")
				.filter((_, idx, lines) => idx !== 0 && idx !== lines.length - 1)
				.map(line => line.replace(/^\t/, ""))
				.join("\n");

			hljs.highlightElement(el);
		});
}