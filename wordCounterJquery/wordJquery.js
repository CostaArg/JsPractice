console.clear();
// const textarea = document.getElementById("content");
const textarea = $("#content");
// textarea.addEventListener( "input", update );
textarea.on("input", update);

function update() {
  const text = this.value;
  const wordCount = text.split(" ").length;
  console.log("update()", wordCount);
  // document.querySelector("#wcount").textContent = wordCount;
  $("#wcount").text(wordCount);
  if (text.toLowerCase().includes("fork")) {
    // this.value = this.value.replace(/fork/i,"****");
    $(this).val(
      $(this)
        .val()
        .replace(/fork/i, "****")
    );
    // $(this).attr("style","border: 2px solid tomato");
    // $(this).css("border","2px solid tomato");
    $(this)
      .css({
        border: "2px solid tomato",
        backgroundColor: "lightgray" // camelCase
      })
      .addClass("fowl")
      .attr("disabled", true);
    console.log(1, this);
    const that = this;
    // Retaining the correct this #1
    window.setTimeout(() => {
      console.log(2, this); // this === textarea
      $(this)
        .attr("disabled", false)
        .removeClass("fowl")
        .css("border", "none");
    }, 5000);
    // Retaining the correct this #2
    window.setTimeout(function() {
      console.log(2, that); // that === textarea
      // this === Window
    }, 5000);
  }
}

// 1) ADD A RED BORDER IN THE TEXTAREA WHEN THE USER CURSES
// 2) Display the count of curses
// 3) Check from a list of curses, e.g. [ "fuck", "facebook"]
