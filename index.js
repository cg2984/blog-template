//an array of all the paragraphs that I want 
let linkArray = [{"title":"Item 1","description":"This is an article about the first item"},
{"title":"Item 2","description":"This is an article about the second item"},
{"title":"Item 3","description":"This is an article about the third item"},
{"title":"Item 4","description":"This is an article about the fourth item"}]

//a function that gets an item and appends it to the dom as a p
function addLink(item){
	//this is the div that we append it to. should it be in the function or outside?
	let ul = document.getElementById("list");
	let li = document.createElement("LI");
	li.classList.add("article_link");
	//this is the paragraph that it is becoming. this has to be in the function
	let para = document.createElement("P");
	let head = document.createElement("H3");
	//setting the paragraph text to the array item
	para.innerHTML = item.description;
	head.innerHTML = item.title;
	//appending the array item to the DOM
	li.appendChild(head)
	li.appendChild(para)
	ul.appendChild(li)
}

function addArticle(item){
	//this is the div that we append it to. should it be in the function or outside?
	let ul = document.getElementById("list");
	let article = document.createElement("ARTICLE");
	li.classList.add("article_link");
	//this is the paragraph that it is becoming. this has to be in the function
	let para = document.createElement("P");
	let head = document.createElement("H3");
	//setting the paragraph text to the array item
	para.innerHTML = item.article;
	head.innerHTML = item.title;
	//appending the array item to the DOM
	li.appendChild(head)
	li.appendChild(para)
	ul.appendChild(li)
}

//let boxes = document.getElementsByClassName("box");
//let body = document.getElementById("app")
//boxes[1].style.marginRight = boxes[1].clientWidth + "px";
//console.log(boxes[1])

//going through each item in the array and doing the addArray function
linkArray.forEach(item => addLink(item))
//articleArray.forEach(item => addArticle(item))