const textarea = document.getElementById("content");
textarea.addEventListener("input", update);
let counter = 0;
function update() {
  const text = this.value;
  let myArr = text.split(" ");
  let words = myArr.length;
  document.getElementById("wcount").innerHTML = words;

  if (text === "") {
    document.getElementById("wcount").innerHTML = "0";
  }

  const myPar = document.createElement("p");
  myPar.style.color = "red";

  //bale sto p id kai meta xrwma kokkino


  if (text.toLowerCase().includes("fuck")) {
    this.value = this.value.replace(/fuck/i, "****");
    document.body.appendChild(myPar);
    counter++;
    myPar.textContent = counter;
  }


}

// 1) ADD A RED BORDER IN THE TEXTAREA WHEN THE USER CURSES
// 2) Display the count of curses
// 3) Check from a list of curses, e.g. [ "fuck", "facebook"]