//1. Ways to print in javascript

document.write("this is document.write");
console.log("Hello World!");

//2. Javascript console API
console.log("Hello World!");
console.warn("this is warning");
console.error("this is error");

//3.Variables :: Containers to store data values
var a=12;
var b=10;
console.log(a+b);

//4.Datatypes in JavaScript
var s="This is a string";
var s1='This is also a string';
console.log(s,s1);

//Objects
var marks={
	a:30,
	s:40,
	d:90
}
console.log(marks);
//Booleans
var a=true;
var b=false;
console.log(a,b)

//Undefined both result in same answer
var u=undefined;
var x;
console.log(u,x);

//NULL
/*In JavaScript, undefined is a type, whereas null an object.
 It means a variable declared, but no value has been assigned a value. 
 Whereas, null in JavaScript is an assignment value. 
 You can assign it to a variable.*/
 
var n=null;
console.log(n);

//arrays
var arr=[1,2,3,4]
console.log(arr)

//Operators in javascript
var a=100;
var b=10;

//Arithmetic
console.log("The value of a+b is ",a+b);
console.log("The value of a-b is ",a-b);
console.log("The value of a*b is ",a*b);
console.log("The value of a/b is ",a/b);

//Assignment operators
var c=b;
c+=2;
console.log(c);
c-=2;
console.log(c);
c*=2;
console.log(c);
c/=2;
console.log(c);

//Comparision operators
var x=34;
var y=56;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);

//Logical operators

//logical and
console.log(true && true);
console.log(true && false);
//logical or
console.log(true || true);
console.log(true || false);
//logical not
console.log(!true);
console.log(!false);

// FUNCTIONS 
function avg(a,b){
	return (a+b)/2;
}
c1=avg(4,6);
c2=avg(14,16);
console.log(c1,c2);

//CHROME CONSOLE BLUE INDICATES NUMBER AND BLACK INDICATES STRING

//Conditionals in Javascript
//IF ELSE STATEMENT
var age=18;
if (age>8){
	console.log('You are not a kid');
}
else{
	console.log('You are a kid');
}

//IF ELSE LADDER
if (age<8){
	console.log('You are a kid');
}
else if(age==18){
	console.log('You are teenager')
}
else{
	console.log('You are not a kid');
}

//Traversing array
var arr=[1,2,3,4]
for(var i=0;i<arr.length;i++){
console.log(arr[i]);
}

arr.forEach(function(element){
	console.log(element);
})

//WHILE LOOP
let j=0;
const ac=0;
while(j<arr.length){
	console.log(arr[j]);
	j++;
}

//do while loop
let j1=0;
do{
	console.log(arr[j1]);
	j1++;

}while(j1<arr.length);

//Break(stop looping) and continue( next iteration)

for(var i=0;i<arr.length;i++){
	if(i==2){
		break;
	}
console.log(arr[i]);
}
for(var i=0;i<arr.length;i++){
	if(i==2){
		continue;
	}
console.log(arr[i]);
}

let myarr=["Fan","Camera",34,null];
//Array Methods
console.log(myarr.length);
myarr.pop();//remove from last
console.log(myarr)
myarr.push(62);//push element
console.log(myarr);
myarr.shift();//skips one elementand remaining stays in the array
console.log(myarr)
const nn=myarr.unshift("Harry")
console.log(myarr)

//string methods
let st="Vandy is a good good girl";
console.log(st.length);
//returns first occured index
console.log(st.indexOf("Vandy"));
console.log(st.indexOf("good"));
//returns last index occurence
console.log(st.lastIndexOf("good"));
console.log(st.slice(0,5));
//replaces first occurence
console.log(st.replace("Vandy","Jaya"));

//Date
let myd=new Date();
console.log(myd);
console.log(myd.getTime());
console.log(myd.getFullYear());
console.log(myd.getDay());
console.log(myd.getMinutes());
console.log(myd.getHours());

//------DOM----------
console.log(document);
console.log(document.getElementById('click').click());
console.log(document.getElementById('click').style.border='blue');
console.log(document.getElementById('click').style.border='2px solid blue');
console.log(document.getElementsByClassName('container'));
console.log(document.getElementsByClassName('container')[0].style.background='yellow');
console.log(document.getElementsByClassName('container')[0].classList.add("bg-primary"));
console.log(document.getElementById('click').innerHTML);
console.log(document.getElementById('click').innerText);
console.log(document.getElementsByClassName('container')[0].innerHTML);
console.log(document.getElementsByClassName('container')[0].innerText);

console.log(document.getElementsByTagName('div'));
t=document.getElementsByTagName('div');
ce=document.createElement('p');
ce.innerText="This is a created para";
t[0].appendChild(ce);
ce1=document.createElement('b');
ce1.innerText="This is a created bold";
t[0].replaceChild(ce1,ce);
//removeChild(element);--->removes an element

//Selecting using query
sel=document.querySelector('.container');
console.log(sel);
sel1=document.querySelectorAll('.container');
console.log(sel1);

//Events in javascript
function clicked(){
	console.log('The button was clicked');
}

//do something as soon as document loads
window.onload=function(){
	console.log('The doc was loaded');
}
firstContainer.addEventListener('click',function(){
	console.log('click hua hei')
})
firstContainer.addEventListener('mouseover',function(){
	console.log('mouse event')
})
firstContainer.addEventListener('mouseout',function(){
	console.log('mouse out event')
})
firstContainer.addEventListener('mouseup',function(){
	console.log('mouse up event')
})
firstContainer.addEventListener('mousedown',function(){
	console.log('mouse down event')
})

//SET TIMEOUT AND SET TIMER
//normal function
function sss(a,b){
	return a+b;
}
//Arrow Functions

ss=(a,b)=>{
	return a+b;
}
logkaro=()=>{
	document.querySelectorAll('.container')[1].innerHTML='set interval fired';
	console.log('Im ur log');
}
setInterval(logkaro,2000);
clr=setInterval(logkaro,2000);
clearInterval(clr)//use this to cancel setInterval
setTimeout(logkaro,2000);
clr=setTimeout(logkaro,2000);
clearTimeout(clr)//use this to cancel setTimeout


//JAVASCRIPT LOCAL STORAGE
console.log(localStorage.setItem('name','vandy'));
console.log(localStorage.getItem('name'));
console.log(localStorage);
console.log(localStorage.clear());
console.log(localStorage.removeItem('name'))

//json 

obj={name:"vandy",length:1,a:{this:"tht"}};
j=JSON.stringify(obj);
console.log(typeof j);
console.log(j);

parsed=JSON.parse(`{"name":"vandy","length":1,"a":{"this":"tht"}}`);
console.log(parsed);

