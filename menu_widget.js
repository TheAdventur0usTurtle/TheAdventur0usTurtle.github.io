function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

// create elements ------------------------------------

const styleEl = document.createElement("style");
styleEl.textContent = `
  #menu-btn {
    appearance: button;
    background-color: #dbcca0;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #a0a0a0;
    cursor: pointer;
    display: inline-block;
    font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    line-height: 20px;
    margin: 10px;
    outline: none;
    overflow: visible;
    padding: 13px 16px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transition: filter .2s;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 6.5vw;
    height: 6.5vw;
    min-width: 50px;
    min-height: 50px;
  }

  #menu-btn::after {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-clip: padding-box;
    background-color: #f3ecd7;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 .7vw;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  #menu-btn:hover:not(:disabled) {
    filter: brightness(1.03);
  }

  #menu-btn:active {
    border-width: 4px 0 0;
    background: none;
  }

  #menu-icon {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  #menu-container {
    display: flex;
    align-items: flex-end;
  }
`;


const menuContainer = elementFromHtml(`
  <div class="align-left" id="menu-container">
  </div>
`);

const button = elementFromHtml(`
  <button id="menu-btn">
    <img id="menu-icon" src="Assets/paint_bucket_icon.svg" alt="paint bucket">
  </button>
  `)

document.head.appendChild(styleEl);
document.body.appendChild(menuContainer);
menuContainer.appendChild(button);

