class ButtonCount extends HTMLElement {
  constructor() {
    super();

    // new shadowRoot for component
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // new button element
    const btn = document.createElement('button');

    let numClicks = 0;

    btn.innerHTML = `<slot></slot> ${numClicks}`;

    this.addEventListener('click', () => {
      btnNode.innerHTML = `<slot></slot> ${++numClicks}`;
    });

    let btnNode = shadowRoot.appendChild(btn.cloneNode(true));
  }
}

customElements.define('button-count', ButtonCount);