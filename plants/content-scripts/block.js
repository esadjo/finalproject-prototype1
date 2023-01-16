

let showBlocks = true;

// Create a block container div and append it to the document
const blockContainer = document.createElement("div");
blockContainer.classList.add("blockContainer");
document.body.appendChild(blockContainer);

// Based on https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
function clear(element) {
  var div = document.getElementById(element);
  while(div.firstChild) {
      div.removeChild(div.firstChild);
  }
}



function addBlock(name, block) {
  // Create a div for the block
  // block.remove();
  block.classList.add("blocker-block");


  // Add the block to the block container
  blockContainer.appendChild(block);
  //Testing 
  const myImage = new Image(100, 100);
  if (name == "sprout") {
    myImage.src = 'https://github.com/esadjo/esadjo-bookmarker-extension/blob/main/plants/images/sprout.png?raw=true';
  } else if (name == "herb") {
    myImage.src = 'https://github.com/esadjo/esadjo-bookmarker-extension/blob/main/plants/images/herb.png?raw=true';
  } else if (name == "clover") {
    myImage.src = 'https://github.com/esadjo/esadjo-bookmarker-extension/blob/main/plants/images/clover.png?raw=true';
  }
  block.appendChild(myImage);
  
}

function deleteParent(e) {
  e.target.parentNode.remove();
}

/* function makeDraggable(el) {
  el.addEventListener("mousedown", function (e) {
    const parentBlock = el.parentNode;
    var offsetX =
      e.clientX - parseInt(window.getComputedStyle(parentBlock).left);
    var offsetY =
      e.clientY - parseInt(window.getComputedStyle(parentBlock).top);

    function mouseMoveHandler(e) {
      parentBlock.style.top = e.clientY - offsetY + "px";
      parentBlock.style.left = e.clientX - offsetX + "px";
    }

    function reset() {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", reset);
    }

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", reset);
  });
} */

function renderBlocks() {
  if (showBlocks) {
    blockContainer.classList.remove("invisible");
  } else {
    blockContainer.classList.add("invisible");
  }
}

const ultimateBlock = document.createElement("div");

// COPY THIS CODE!!
// Add a message listener that sets the value of "replace"
chrome.runtime.onMessage.addListener((request) => {
  showBlocks = request["enable"];
  dispType = request["type"]; //TESTING // specify plant
  if (request["addBlock"]) {
    // https://www.w3schools.com/jsref/met_node_removechild.asp (To remove other plants)
    while (ultimateBlock.hasChildNodes()) { 
      ultimateBlock.removeChild(ultimateBlock.firstChild);
    } 
    addBlock(dispType, ultimateBlock);
  }
  renderBlocks();
});

