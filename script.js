//example 1 
//grab event trigger first -> then write actual event in function

document
.getElementById("Clicker")
.addEventListener("click", function ()
{
    let para = document.getElementById("myPara");
    para.textContent = "Hmm theme can be books and cats. And either cottagecore or soft dreampop.";
    
});


//example 2 
//html >> markup language
//DOM >> processed Elements in document tree in memory
//Every element becomes a node 

document
.getElementById("Clicker2")
.addEventListener("click", function()
{
    // Get the ul element
let foodList = document.getElementById("foodList");

// Get all li children
let items = foodList.getElementsByTagName("li");

// Access the third item (index 2)
let dessert = items[3];
dessert.classList.add("highlight");

});


//example 3

document
.getElementById("Clicker3")
.addEventListener("click", function()
{
    let cat = document.getElementById("catType");
    cat.textContent = "Bengal"; 
    cat.style.backgroundColor = "grey";
    cat.style.color = "white";
    cat.style.padding = "5px";

});


//Example 4 

document.getElementById("Clicker4").addEventListener("click", function() {
    let input = document.getElementById("activityInput");
    let value = input.value.trim();
    if (value) {
        let ul = document.getElementById("actList");
        let li = document.createElement("li");
        li.textContent = value;
        ul.appendChild(li);
        input.value = ""; // Clear input
    }
});

//Example 5 
// Same as above but with remove() instead
// lastElementChild, firstElementChild methods can be used 

// example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

//example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

//example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });



