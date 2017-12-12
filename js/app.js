/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/

document.getElementById("name1").innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/

document.getElementById("position2").style.backgroundColor = "red";
document.getElementById("position2").innerHTML = "Project Manager";

/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/

document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").style.size = "40px";

/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/

//var x = document.getElementsByClassName("profile");//

//x[0].innerHTML = "I am yours now and, you are mine and to, gether we'll love through all, Space and time, so don't cry... One day all 7 will die";//
//x[0].style.font-family = "Sans Serif";//

var x = document.getElementsByClassName("profile");
    x[0].innerHTML = "I am yours now and, you are mine and to, gether we'll love through all, Space and time, so don't cry... One day all 7 will die";
    x[0].style.fontFamily = "Sans Serif";


/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/
x[1].innerHTML = "As you think, so shall you become.";


/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/
var x = document.getElementsByClassName("alias");
x[2].innerHTML = "Jules Winnfield"



/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
var name7 = document.createElement("div")
name7.innerHTML = "Peter Griffin"

nameParent.appendChild(name7)
name7.setAttribute("id", "name7")


 
/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/
var alias8 = document.createElement("div")
alias8.innerHTML = "Old Man Riverwalk"

aliasParent.appendChild(alias8)
alias8.setAttribute("id", "alias8")
//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/

