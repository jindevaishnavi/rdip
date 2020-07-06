/* --------------------------------------------------------------------------------------
TASK -1 CALCULATOR APPLICATION
------------------------------------------------------------------------------------------*/
function calculate()
{
	firstNumber = document.getElementById('input1').value;
	secondNumber = document.getElementById('input2').value;
	operation = document.getElementById('operation').value;
	output = 0;
	if(operation == 'Addition')
		output = add();
	else if(operation == 'Subtraction')
		output = subtract();
	else if(operation == 'Multiplication')
		output = multiply();
	else if(operation == 'Division')
		output = divide();
	else if(operation == 'Absolute')
		output = absolute();
	else if(operation == 'SquareRoot')
		output = squareroot();
	else if(operation == 'Percentage')
		output = percentage();
	document.getElementById('result').innerHTML = output;
	return output;
}

function add() {
 document.getElementById('input2').disabled = false;

	return Number(firstNumber) + Number(secondNumber);
}


function subtract() {
	
	document.getElementById('input2').disabled =false;
	return Number(firstNumber) - Number(secondNumber);
}
function divide() {
	document.getElementById('input2').disabled = false;
	if(secondNumber == 0)
	{
		alert("Division not possible");
		return 0;
	}
	 return Number(firstNumber) / Number(secondNumber);
}

function multiply() {
	document.getElementById('input2').disabled = false;
	 return Number(firstNumber) * Number(secondNumber);
}
function percentage() {
	document.getElementById('input2').disabled = false;
	return (Number(firstNumber)/100)*Number(secondNumber);
}
function absolute() {
	 document.getElementById('input2').disabled = true;
	return Math.abs(Number(firstNumber));
}
function squareroot() {

	document.getElementById('input2').disabled = true;
	return Math.sqrt(Number(firstNumber));
}

/* --------------------------------------------------------------------------------------
TASK -2 VALIDATE FORM
------------------------------------------------------------------------------------------*/
function validateForm() {
	name = document.forms["form1"]["name1"].value;
	email = document.forms["form1"]["email"].value;
	phone = document.forms["form1"]["phoneno"].value;
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
	if (name == "" || !isNaN(name) || !isNaN(name[0]))                                 
    {     
    	alert("Please enter correct name");
    	return false;
    }
    if(phone === ""|| isNaN(phone)||phone.length!=10)                           
	{ 
	window.alert("Phone number not valid."); 
	return false; 
	}
    if (email == "" ||(atpos < 1 || ( dotpos - atpos < 2 ) ))                                  
    { 
		alert("Please enter correct email ID.");
		return false;
	}
	alert("Submitted successfully !");
   return true;
}


/*----------------------------------------------------------------------------------
TASK -3 STRING VALIDATION 
----------------------------------------------------------------------------------*/
function isPalindrome()
{
	input =  document.forms["form2"]["inputStr"].value;
	n = input.length;
	for(i = 0;i<=n/2;i++)
	{
		if(input[i] != input[n- 1 -i])
			{
				alert("String is not a Palindrome");
			
				return false;
			}

	}
	alert("String is a Palindrome");
	return true;
}
function sortAlphabets(str) {
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
}
function isAnagram()
{
	input = document.forms["form3"]["inputList"].value;
	inputStr = document.forms["form3"]["inputStr"].value;
	input.split(" ").join("");
	input = sortAlphabets(input);
	inputStr = sortAlphabets(inputStr);
	if(inputStr.localeCompare(input))
	{
		alert("Input is an anagram of the list of strings.");
		return true;
	}
	else
	{
		alert("Input is not an anagram of the list of strings.");
		return false;
	}

}
/*----------------------------------------------------------------------------------
TASK - 4 WHO WILL SURVIVE
----------------------------------------------------------------------------------*/
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function mapInput(num)
{
	 mapping = num%3;
	/*
	MAPPING  -- > 0 : HUMAN , 1 : COCKROACH , 2 : NUCLEAR BOMB
	*/
	if(mapping === 0)	
	return "human";
	if(mapping === 1)
		return "cockroach";
	if(mapping === 2)
		return "nuclear bomb";
}
function whowillsurvive() {
	console.log("Reached");
		document.getElementById("winnerbutton").style.display = "inline";
	document.getElementById("inputGame").style.display = "inline";

	input1 = getRandom(0,1001) % 3;
	input2 = getRandom(0,1001) % 3;
	document.getElementById("input1").disabled = true;
	document.getElementById("input2").disabled = true;

	object1 = mapInput(input1);
	object2 = mapInput(input2);
	document.getElementById("input1").value = input1 + " : " + object1;
	document.getElementById("input2").value = input2 + " : " + object2;
}
function checkWinner()
{

	if(input1 === input2)
		{
			document.getElementById("winner").innerHTML = "TIE";
			alert("The game is tie");
			return "The game is tie";

		}
	else
	{
		if((input1 === 0 && input2 === 1) || (input1 === 1 && input2 === 0))
			{
			document.getElementById("winner").innerHTML = "HUMAN survives";
			alert("Human survives");
			return "Human survives";
		}
		if((input1 === 0 && input2 === 2) || (input1 === 2 && input2 === 0))
		
			{
			document.getElementById("winner").innerHTML = "HUMAN dies";
			alert("Human dies");
			return "Human dies";
		}
		if((input1 === 1 && input2 === 2) || (input1 === 2 && input2 === 1))
			{
			document.getElementById("winner").innerHTML = "cockroach survives";
			alert("cockroach survives");
			return "cockroach survives";
		}
	}

}
/*----------------------------------------------------------------------------------
TASK - 5 CURRENCY CONVERTOR
----------------------------------------------------------------------------------*/

function getData(){
	cur1 = document.getElementById("input_currency").value;
	cur2 = document.getElementById("output_currency").value;
	amount = document.getElementById("amount").value;
	const xhr = new XMLHttpRequest();
	value = cur1+'_'+cur2;
	xhr.open('GET', 'https://free.currconv.com/api/v7/convert?q='+value+'&compact=ultra&apiKey=ecd96f38ab9cbbe978b7');
	xhr.onload = function() {
		
		
		result = JSON.parse(xhr.response);
		output = Number(amount) * Number(result[value]);
	
		document.getElementById('conresult').innerHTML = cur2 + " " + output;
	};
	xhr.send();
	
return true;
}