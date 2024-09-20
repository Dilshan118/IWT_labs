/*If/else conditional statements
• Create multiple buttons (at least 3) by product names in news.html.
• Create a function named loadData() inside myScript.js. add a string
parameter into that.
Ex – loadData(data)
• Send the name of the button when clicking that button into the above created
function.
• Inside loadData(), check whether which button has clicked using if else
statement.
• And display an image and text according to the selected button.*/

function loadData(name){
	if(name == "btn1")
	{
		
		document.getElementById("image1").src = "image/Item/mobile2.jfif";
		document.getElementById("para").innerHTML = "mobile telephone, portable device for connecting to atelecommunications network in order to transmit and receive voice, video, or other data. Mobile phones typically connect to the public switched telephone network (PSTN) through one of two categories: cellular telephone systems or global satellite-based telephony";
	}
	else if(name == "btn2")
	{
		document.getElementById("image1").src = "image/Item/mobile3.jfif";
		document.getElementById("para").innerHTML = "iPhones are well known for their simplicity and user-friendliness. The iOS operating system they use is easy to understan";
	}
	else if(name == "btn3")
	{
		document.getElementById("image1").src = "image/Item/mobile4.jfif";
	}
	else if(name == "btn4")
	{
		document.getElementById("image1").src = "image/Item/iphone16pro.jpg";
		document.getElementById("para").innerHTML = "Pricing starts at $799, and the iPhone 16 offers a good balance between functionality and price. If you're looking for a step up, Apple has the iPhone 16 Pro models with upgraded A18 Pro chip, bigger displays, ProMotion display technology, and triple-lens camera system.re coming from an iPhone 13 or earlier, the iPhone 16 is an excellent upgrade because you get the new super fast chip and Apple Intelligence support, but you also get prior model features like Crash Detection and Emergency SOS via satellite..";
	}
}

/*For Loop
• Create a button named “average Price” in news.html.
• Create a function called priceForLoop() in myScript.js.
• Create an array with product name and price in the function.
Ex – [“product X - $100”, “product Y - $200”]*/

function priceForLoop(){
	var phone = ["Iphone XS - $100", "Iphone 11 - $200", "Iphone 12 - 300$"]; //this is an index array.
	
	for(i = 0, len = phone.length, list = "List of average prices <br/>"; i < len; i++)
	{
		list += phone[i] + "<br/>";
	}
	document.getElementById("para").innerHTML = list;
	document.getElementById("image1").src = ""; //remove the image

	
}

/*Redo the above function using a for-in loop and name the function as
“productForInLoop()”*/

function priceforInLoop()
{
	var phone = [];

	phone["iphone XS"] = "$1349";
	phone["iphone XSMax"] = "$1349";
	phone["iphone 8"] = "$999";
	phone["iphone 8 plus"] = "$1000";

	var list = "";

	for(var item in phone) //keyword 'in' means, in the phone array, the items like iphone xs (keys in array) will assigned to the item variable
	{
		list += item + ": " + phone[item] + "<br>"; //phone[item] --> this part accesing stored values inside the keys like $1349
	}

	document.getElementById("para").innerHTML = list;
	document.getElementById("image1").src = "";
}

/*For In Loop
• Create a button named “Prices higher than 1000”.
• Create a function named “priceHigher()” in the myScript.js file.
• Call that function in the button click event.
• Create an array which contains at least 5 values (at least 2 must be higher
than 1000 and 2 must be lower).
• Display the array elements which have the prices higher than 1000.*/
function priceHigher()
{
	var phone = []

	phone["Iphone XS"] = 1349;
	phone["iphone XSMax"] = 1349;
	phone["Iphone 8"] = 999;
	phone["Iphone 8 Plus"] = 1000;

	var list = ""

	for(var item in phone)
	{
		if(phone[item] > 1000)
		{
			list += item + ": " + phone[item] + "<br>";
		}
	}
	document.getElementById("para").innerHTML = list;
	document.getElementById("image1").src = "";
}

/*------------------------------------
--------------------------------------*/

function priceLower()
{
	var phone = [];

	phone["Iphone XS"] = 1349;
	phone["Iphone XSMax"] = 1349;
	phone["Iphone 8"] = 999;
	phone["Iphone 8 plus"] = 1000;

	var list = "";

	for(var item in phone)
	{
		if(phone[item] < 1000)
		{
			list += item + ": " + phone[item] + "<br>";
		}
	}
	document.getElementById("para").innerHTML = list;
	document.getElementById("image1").src = "";
}