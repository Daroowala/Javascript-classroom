//Assingment 1

//var passward = ("Error! Please enter a valid passward.");
//alert (passward);

//var land = ("Welcome to JS Land...\n Happy Coding!");
//alert (land);

//var js = ("Welcome to JS Land");
//alert (js);

//var coding = ("Happy Coding!\n Prevent this page from creating additional dialogs");
//alert (coding);

//var consol = "Hello! I can run JS through my web browser's console";
//console.log (consol);



//Assingment 3

//var age = 15;
//alert("I am 41 years old")
//alert("I am visited 14 times")

//var birth = 1990;
//document.write("My birth year is 1982")

//var visitorsName = prompt ("Enter your name")
//var productTitle = prompt ("Enter the product title")
//var quantity = prompt ("Enter the quantity")
//var message = (visitorsName + " " + "ordered" + " " + quantity + " " + productTitle + " " + "(s) on XYZ Cloting Store");{
//    document.write(message)
//}


//Assingment 5

//var a = 3;
//var b = 5;
//var c = a+b;
//document.write(c)

//var a = 3;
//var b = 5;
//var c = b-a;
//document.write(c)

//var a = 3;
//var b = 5;
//var c = a*b;
//document.write(c)

//var a = 3;
//var b = 5;
//var c = b/a;
//document.write(c)


// Assingmeng DOM
// 1st Answer
// var main1 = document.getElementById('main-content');
// console.log(main1);

// 2nd Ans
// var main1 = document.getElementById('main-content');
// var children = main1.children;
// for (var i = 0; i < children.length; i++){
//     console.log(children[i]);
// }

// 3rd Ans
// var renderElements = document.getElementsByClassName('content');
// for (var i = 0; i < renderElements.length; i++){
//     console.log(renderElements[i].innerHTML);
// }

// 4th Ans
// document.getElementById('first-name').value = 'Alex';
// document.getElementById('last-name').value = "Bank";
// document.getElementById('email').value = "alexbank@example.com"

// 5th & 6th Ans
// var lastNameElement = document.getElementById('last-name');
// console.log(lastNameElement.nodeType);

// 7th Ans
// var lastNameElement = document.getElementById('last-name');
// var textNode = lastNameElement.childNodes[0];
// textNode.nodeValue = "Last Name: Tom";

// 8th Ans
var mainContent = document.getElementById('main-content');
var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;{
    console.log(firstChild);
    console.log(lastChild);
}