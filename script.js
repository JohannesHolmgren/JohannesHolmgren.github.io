function toggle() {
  console.log("Toggle")
  var body = document.body;
  body.classList.toggle("dark-mode");
}


/* For Project carousel */
const rotateButton = document.getElementsByClassName("rotate");


function rotateForward() {
  const projectList = document.getElementById("project-carousel");
  projectList.appendChild(projectList.firstElementChild);
}

function rotateBackward() {
  const projectList = document.getElementById("project-carousel");
  projectList.insertBefore(projectList.lastElementChild, projectList.firstElementChild);
}

function rotate(item) {
  const projectList = document.getElementById("project-carousel");
  var index = Array.prototype.indexOf.call(projectList.children, item);

  console.log(index);
  // Rotate one way if card 0 is clicked
  if (index == 0) {
    projectList.insertBefore(projectList.lastElementChild, projectList.firstElementChild);
  } 
  // Rotate other way if card 2 is clicked
  else if (index == 2) {
    projectList.appendChild(projectList.firstElementChild);
  }


}