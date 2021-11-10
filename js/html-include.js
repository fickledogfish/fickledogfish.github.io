// Credit to https://stackoverflow.com/a/62772309

export class HTMLInclude extends HTMLElement {
    constructor() {
        super();
        this.loadContent();
    }

    async loadContent() {
        const source = this.getAttribute("src");
        if (!source) {
            throw new Error("No src attribute given.");
        }

        const response = await fetch(source);
        if (response.status !== 200) {
            throw new Error(`Could not load resource: ${source}`);
        }

        this.innerHTML = await response.text();
    }
}