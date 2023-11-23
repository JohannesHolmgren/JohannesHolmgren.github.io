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

function mailToClipboard(mailAddress) {
  // Copy to clipboard
  navigator.clipboard.writeText(mailAddress);
  // Show copied text for a short while then make it hidden again
  var copiedSnackbar = document.getElementById("copied-snackbar");
  copiedSnackbar.className = "show";
  setTimeout(function(){copiedSnackbar.className = copiedSnackbar.className.replace("show", "");}, 3000);
}

/* Hide navbar on scroll */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currenScrollPos = window.scrollY;
  if (prevScrollpos > currenScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    
    document.getElementById("navbar").style.top = "-15vh";
  }
  prevScrollpos = currenScrollPos;
}