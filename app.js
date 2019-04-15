const empty = Array(54).fill("");

const info = [1, 2, 3, 45, 6, 7, 8, 9, 0, 1, 2, 3, 4];

document.addEventListener("DOMContentLoaded", function(event) {
  let waiting = document.getElementsByClassName("waiting")[0];
  let container = document.getElementsByClassName("container")[0];
  for (let e of info) {
    const div1 = document.createElement("div");
    const em = document.createTextNode("");
    div1.appendChild(em);
    // div1.draggable = true;
    div1.className = "empty";
    div1.ondragover = e => {
      e.preventDefault();
    };
    div1.ondrop = e => {
      e.preventDefault();
      console.log(e);
      const src = e.dataTransfer.getData("Text");
      let srcNode = document.getElementById(src);
      console.log(e.target);
      // e.target = srcNode;
      e.target.appendChild(srcNode);
      e.stopPropagation();
    };
    const div = document.createElement("div");
    const newContent = document.createTextNode(e);
    div.appendChild(newContent);
    div.draggable = true;
    div.className = "data";
    div.id = Math.random() * (100000 - 0) + 0;
    div.ondragstart = e => {
      event.preventDefault();
      console.log(e);
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("Text", e.target.id);
      // e.dataTransfer.setDragImage(e.target, 0, 0);
    };
    div1.appendChild(div);
    waiting.appendChild(div1);
  }
  for (let e of empty) {
    const div = document.createElement("div");
    const newContent = document.createTextNode(e);
    div.appendChild(newContent);
    // div.draggable = true;
    div.className = "empty";
    div.ondragover = e => {
      e.preventDefault();
    };
    div.ondrop = e => {
      e.preventDefault();
      console.log(e);
      const src = e.dataTransfer.getData("Text");
      let srcNode = document.getElementById(src);
      console.log(e.target);
      e.target.appendChild(srcNode);
      e.stopPropagation();
    };
    console.log(div);
    container.appendChild(div);
  }
});
