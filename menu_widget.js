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
    background-color: #d0c6a6ff;
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
    justify-content: flex-end;
    height: 8vw;
    min-height: 70px;
  }

 #menu {
    background-color: #f3ecd7;
    width: 50%;
    height: 6vw;
    min-height: calc(50px - .5vw);
    align-self: center;
    flex-wrap: nowrap;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid #d0c6a6ff;
    border-width: 0 0 .5vw;
} 

`;

const menuContainer = elementFromHtml(`
  <div id="menu-container">
  </div>
`);

const menu = elementFromHtml(`
  <div id="menu">
  </div>
`);

const button = elementFromHtml(`
  <button id="menu-btn">
    <img id="menu-icon" src="Assets/paint_bucket_icon.svg" alt="paint bucket" draggable="false">
  </button>
  `)

document.head.appendChild(styleEl);
document.body.appendChild(menuContainer);
menuContainer.appendChild(menu);
menuContainer.appendChild(button);

menu.id = "menu";

// code -------------------------------------------------------

let menuStatus = "closed";

button.addEventListener("click", function(){
  if(menuStatus == "open") {
    menuStatus = "closed";
    menu.style.width = "0px"
  } else {
    menuStatus = "open";
    menu.style.width = "50%";
  }
});