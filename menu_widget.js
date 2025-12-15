//  Drag and drop colors to set the webpage theme
//  NOTE: It's barely functional, but I hope to improve it soon
const h1 = document.getElementById("title");
const paragraphs = document.getElementsByTagName('p');
const lists = document.getElementsByTagName('li');
const h2 = document.getElementsByTagName('h2');
const h3 = document.getElementsByTagName('h3');
const images = document.getElementsByTagName("img");

function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

// create elements ------------------------------------

const widgetStyle = document.createElement("style");
widgetStyle.textContent = `
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
    width: 30%;
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
    position: relative;
}

.theme-option {
  r: 25%;
  border: solid #d0c6a6ff;
  border-width: 0 0 .5vw;
}

 .theme-option:hover {
    filter: brightness(1.1);
    transform: scale(1.05);
    cx: 48%;
    cy: 45%;
  }
`;

const menuContainer = elementFromHtml(`
  <div id="menu-container">
  </div>
`);

const menu = elementFromHtml(`
  <div id="menu" draggable="false">
  </div>
`);

const button = elementFromHtml(`
  <button id="menu-btn">
    <img id="menu-icon" src="Assets/paint_bucket_icon.svg" alt="paint bucket" draggable="false">
  </button>
  `);

const themeBlue = elementFromHtml(`
  <svg width="20%" height="100%" draggable="true">
    <circle class="theme-option" draggable="true" cx="50%" cy="50%" r="25%" fill="#557cc5ff"/>
  </svg>
`);

const themeGreen = elementFromHtml(`
  <svg width="20%" height="100%" draggable="true">
    <circle class="theme-option" draggable="true" cx="50%" cy="50%" r="25%" fill="#55c571ff"/>
  </svg>
`);

const themePink = elementFromHtml(`
  <svg width="20%" height="100%" draggable="true">
    <circle class="theme-option" draggable="true" cx="50%" cy="50%" r="25%" fill="#c5559aff"/>
  </svg>
`);

const themeBlack = elementFromHtml(`
  <svg width="20%" height="100%" draggable="true">
    <circle class="theme-option" draggable="true" cx="50%" cy="50%" r="25%" fill="#595959ff"/>
  </svg>
`);

const themeOrange = elementFromHtml(`
  <svg width="20%" height="100%" draggable="true">
    <circle class="theme-option" draggable="true" cx="50%" cy="50%" r="25%" fill="#d6a254ff"/>
  </svg>
`);

document.head.appendChild(widgetStyle);
document.body.insertBefore(menuContainer, document.body.firstChild);
menuContainer.appendChild(menu);
menuContainer.appendChild(button);
menu.appendChild(themePink);
menu.appendChild(themeGreen);
menu.appendChild(themeBlue);
menu.appendChild(themeBlack);
menu.appendChild(themeOrange);


menu.id = "menu";

// code -------------------------------------------------------

let selectedTheme = "canceled";
let menuStatus = "closed";
menu.style.width = "0px"

button.addEventListener("click", function(){
  if(menuStatus == "open") {
    menuStatus = "closed";
    menu.style.width = "0px"
  } else {
    menuStatus = "open";
    menu.style.width = "40%";
  }
});

// The code below was from a tutorial with a good amount of tweaking from me --------------------------------------------
// because there is no way I'm going to try to put this together from scratch at 11 o'clock
// at night with one hand and no idea what I'm doing while I listen to Nifty's song ftom Hazbin Hotel on an
// hour loop. I'm currently half way through and on my second replay. Please help.
//
//      VVV
//
// https://www.youtube.com/watch?v=ymDjvycjgUM

let startX = 0;
let startY = 0;

let themeColors = [themeOrange, themeBlack, themeBlue, themeGreen, themePink];
let themeSelectionOptions = ["orange", "black", "blue", "green", "pink"];

function setTheme(theme) {
  if(theme == "orange") {
    document.body.style.backgroundColor = "#faf7eb";
    document.body.style.color = "#1a1a1a";
    h1.style.color = "#1a1a1a";
    for (let step = 0; step < paragraphs.length; step++) {
      currentElement = paragraphs[step];
      currentElement.style.textDecorationColor = "#dbcca0";
    }
    for (let step = 0; step < lists.length; step++) {
      currentElement = lists[step];
      currentElement.style.textDecorationColor = "#dbcca0";
    }
    for (let step = 0; step < h2.length; step++) {
      currentElement = h2[step];
      currentElement.style.color = "#4d4d4d";
    }

  } else if(theme == "black") {
    document.body.style.backgroundColor = "#000000ff";
    document.body.style.color = "#c9c9c9ff";
    h1.style.color = "#c9c9c9ff";
    for (let step = 0; step < paragraphs.length; step++) {
      currentParagraph = paragraphs[step];
      currentParagraph.style.textDecorationColor = "#646464ff";
    }
    for (let step = 0; step < lists.length; step++) {
      currentElement = lists[step];
      currentElement.style.textDecorationColor = "#646464ff";
    }
    for (let step = 0; step < h2.length; step++) {
      currentElement = h2[step];
      currentElement.style.color = "#bdbdbdff";
    }

  } else if(theme == "blue") {
    document.body.style.backgroundColor = "#ebf2faff";
    document.body.style.color = "#1a1a1a";
    h1.style.color = "#1a1a1a";
    for (let step = 0; step < paragraphs.length; step++) {
      currentParagraph = paragraphs[step];
      currentParagraph.style.textDecorationColor = "#c9d3dfff";
    }
    for (let step = 0; step < lists.length; step++) {
      currentElement = lists[step];
      currentElement.style.textDecorationColor = "#c9d3dfff";
    }
    for (let step = 0; step < h2.length; step++) {
      currentElement = h2[step];
      currentElement.style.color = "#4d4d4d";
    }

  } else if(theme == "green") {
    document.body.style.color = "#1a1a1a";
    document.body.style.backgroundColor = "#d7eed1ff";
    h1.style.color = "#1a1a1a";
    for (let step = 0; step < paragraphs.length; step++) {
      currentParagraph = paragraphs[step];
      currentParagraph.style.textDecorationColor = "#b5daacff";
    }
    for (let step = 0; step < lists.length; step++) {
      currentElement = lists[step];
      currentElement.style.textDecorationColor = "#b5daacff";
    }
    for (let step = 0; step < h2.length; step++) {
      currentElement = h2[step];
      currentElement.style.color = "#4d4d4d";
    }

  } else if(theme == "pink") {
    document.body.style.color = "#1a1a1a";
    document.body.style.backgroundColor = "#e9d0e1ff";
    h1.style.color = "#1a1a1a";
    for (let step = 0; step < paragraphs.length; step++) {
      currentParagraph = paragraphs[step];
      currentParagraph.style.textDecorationColor = "#cf9cbfff";
    }
    for (let step = 0; step < lists.length; step++) {
      currentElement = lists[step];
      currentElement.style.textDecorationColor = "#cf9cbfff";
    }
    for (let step = 0; step < h2.length; step++) {
      currentElement = h2[step];
      currentElement.style.color = "#4d4d4d";
    }

  } else if(theme == "canceled") {
    // Do nothing
  } else {
    alert("error: unexpected input -- selected theme -->" + selectedTheme);
  }

}

for (let index = 0; index < themeColors.length; index++) {
  const currentElement = themeColors[index];

  function handleMouseMove(e) {
  startX = e.pageX;
  startY = e.pageY;
  // This part doesn't quite line up with the mouse and I don't understand why
  //currentElement.style.position = "absolute";
  // currentElement.style.left = startX - (currentElement.clientWidth*index + currentElement.clientWidth*0.5) + "px";
  // currentElement.style.top = startY - currentElement.clientHeight*0.5 + "px";
  currentElement.style.cursor = 'grabbing';
}

  function handleMouseDown() {
  selectedTheme = themeSelectionOptions[index]; 
  currentElement.style.cursor = 'grabbing';
  document.addEventListener('mousemove', handleMouseMove);
  }

currentElement.addEventListener('mousedown', handleMouseDown);

document.addEventListener('mouseup', () => {
    currentElement.style.cursor = 'grab';
    document.removeEventListener('mousemove', handleMouseMove);
    currentElement.remove();
    menu.appendChild(currentElement);
    setTheme(selectedTheme);
  });

}

//  I really wanted to get this working, but I couldn't create a work around for the offset in time.
//  The code below is from a different tutorial that was the JS equivilant of duct taped into the project.
//
//    VVV
//
//  https://www.youtube.com/watch?v=_G8G1OrEOrI
//

// document.body.addEventListener('dragover', function(event) {
// 	// event.preventDefault()
// });
// document.body.addEventListener('drop', function(event) {
// 	selectedTheme = themeSelectionOptions[index];

// })

// let themeColors = [themeOrange, themeBlack, themeBlue, themeGreen, themePink];
// let themeSelectionOptions = ["orange", "black", "blue", "green", "pink"];

// for (let index = 0; index < themeColors.length; index++) {
//   const currentElement = themeColors[index];

//   currentElement.addEventListener('dragstart', function(event) {
// 	console.log(event);
// });
// }
