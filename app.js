const emptyArray = Array(54).fill("");

const infos = [1, 2, 3, 45, 6, 7, 8, 9, 0, 1, 2, 3, 4];

document.addEventListener("DOMContentLoaded", function(event) {
  const waiting = document.getElementsByClassName("waiting")[0];
  const container = document.getElementsByClassName("container")[0];
  for (let e of infos) {
    // create empty Node in DOM
    const empty = document.createElement("div");
    const em = document.createTextNode("");
    empty.appendChild(em);
    empty.className = "empty";
    empty.ondragover = e => {
      e.preventDefault();
    };
    //Empty Node on drop append the elementNode to the target
    empty.ondrop = e => {
      e.preventDefault();
      console.log(e);
      const src = e.dataTransfer.getData("Text");
      let srcNode = document.getElementById(src);
      e.target.appendChild(srcNode);
      e.stopPropagation();
    };
    // Create Element from info array
    const info = document.createElement("div");
    const newContent = document.createTextNode(e);
    info.appendChild(newContent);
    info.draggable = true;
    info.className = "data";
    info.id = Math.random() * (100000 - 0) + 0;

    // On drap get the data and set it
    info.ondragstart = e => {
      event.preventDefault();
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("Text", e.target.id);
    };
    // append
    empty.appendChild(info);
    waiting.appendChild(empty);
  }
  for (let e of emptyArray) {
    // create emptyNode with emptyArray
    const empty = document.createElement("div");
    const newContent = document.createTextNode(e);
    empty.appendChild(newContent);
    empty.className = "empty";
    empty.ondragover = e => {
      e.preventDefault();
    };
    //Empty Node on drop append the elementNode to the target
    empty.ondrop = e => {
      e.preventDefault();
      const src = e.dataTransfer.getData("Text");
      let srcNode = document.getElementById(src);
      e.target.appendChild(srcNode);
      e.stopPropagation();
    };
    container.appendChild(empty);
  }
});
