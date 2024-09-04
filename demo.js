/*<!--Assignment 1-->*/
/*one
let a=10;
let b=5;
a=a+b;
b=a-b;
a=a-b;
console.log('a=',a,'b=',b);

/*two*/
/*const num1=parseFloat(prompt("enter first number:"));
const num2=parseFloat(prompt("enter second number:"));
const num3=parseFloat(prompt("enter third number:"));
let largest;
if(num1>=num2 && num1>=num3){
    largest=num1;
}
else if(num2>=num1 && num2>=num3){
    largest=num2;
}
else {
    largest=num3
}
console.log("the largest number is"+largest);*/

/*three*/
/*let number=100;
for(let i=1;i<=number;i++)
{
    if(i%2==0)

{
console.log(i+"");
}
}

/*four*/

/*function check(string) {
const len =string.length;
for (let i=0;i<len/2;i++)
{
    if (string[i] !==string[len - 1 - i]){
        return'it is not a palindrome';
    }
}
return 'it is a plaindrome';
}
const string=prompt('enter the string:');
const value=check(string);
console.log(value);*/

/*five*/

/*const arr=[1,2,3,4,5,6,7,8,9]
console.log("reverse:");
for(let i=arr.length-1;i>=0;i--)
{
    console.log(arr[i+""]);
}*/

/*six*/

/*const arr=["prema","sasi","nibuna","kathir","kala","hema"]
console.log("even position:");
for(let i=1;i<arr.length;i=i+2)
{
    console.log(arr[i])
}*/

/*seven*/

/*let array=[]
let even=[]
let odd=[]
for(let i=1;i<=100;i++)
{
    i%2==0?even.push(i):odd.push(i)
}
console.log(odd)*/

/*eight*/

/*let primenumber=0
let i,j
for(j=2;j<=100;j++)
{
    for(i=1;i<=j;i++)
    {
        if(j%i==0)
            primenumber++
    }
    if(primenumber==2)
        console.log(j)
    primenumber=0
}*/

/*nine*/

/*function sort(arr){
    let len=arr.length;
    for (let i=0;i<len -1 -i;i++){
        for (let j=0;j<len -1 -i; j++){
            if(arr[j] >arr[j + 1] ){
                let temp=arr[j];
                arr[j]=arr[j +1 ];
                arr[j + 1]=temp;
            }
        }
    }
    return arr;
}
const array = [50,70,20,80,10,40,30,90];
const sortedArray=sort(array);
console.log("sorted array Ascending :",sortedArray);*/


/*ten*/
/*function person(friend,person2)
{
    setTimeout(function(){
        console.log("my friend's name is" + friend);
        person2();},5000);
    }
    function person2()
        {
            console.log("my name is prema");
        }
        person("sasi",person2)*/

        /*Assignment ---2
        one*/

        /*let arr=["java","c++","java","react","c++","python","react","java"]
        function repeated(arr){
            let a=[];
            for (i=0;i<arr.length;i++){
                if(a.indexOf(arr[i]) === -1){
                    a.push(arr[i]);
                }
            }
            return a;
         }
         console.log(repeated(arr));

         two
    var today=new Date();
    var day=today.getDay();
    var daylist=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    console.log("today is :"+daylist[day]+".");
    var hour=today.getHours();
    var mintue=today.getMinutes();
    var second=today.getSeconds();
    var prepand=(hour>=12)?"pm":"AM";
    hour=(hour>=12)? hour-12:hour
    if(hour===0 && prepand==='pm')
    {
        if(mintue===0 && second===0)
        {
            hour=12;
            prepand='none';
        }
        else
        {
            hour=12;
            prepand='pm';
        }
        }
        if(hour===0 && prepand==='Am')
        {
            if(mintue===0 && second===0)
            {
                hour=12;
                prepand='midnight';
            }
            else{
                hour=12;
                prepand='Am';
            }
            }
            console.log("current time:"+hour+prepand +":"+mintue+":"+second);

            three

            function multiplyBy()
            {
                num1=document.getElementById("firstnumber").value;
                num2=document.getElementById("secondnumber").value;
                document.getElementById("result").innerHTML=num1*num2;
            }
function divideBy()
{
    num1=document.getElementById("firstnumber").value;
    numb2=document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML=num1/num2
}

four

alert(document.URL);

FIVE

const difference=(n)=>{
    return n <=13 ? 13-n : (n-13)*2;
};
console.log(difference(32));
console.log(difference(11));

six

function sumtriple(a,b){
    if(a==b){
        return 3*(a+b);
    }
    else{
        return(a+b);
    }
    }
console.log(sumtriple(10,30));
console.log(sumtriple(10,10));

seven

var array1=['a','b','c','d'];
var array2=['a','v','n','d','i','f']
var array3=['1','2','3','4','5','6'];
var result=array2.map(function(e,i){
    return e==array1[i] ? array3[i] :e;
})
console.log(result) 

eight

function divisibleBy6and9(n){
    for(let i=0;i<=n;i++){
        if(i%6==0 && i%9==0){
            console.log(i)
        }
    }
}
let N=100;
divisibleBy6and9(N);

nine

function remove_character(str,char_pos)
{
    part1=str.substring(0,char_pos);
    part2=str.substring(char_pos+1,str.length);
    return(part1+part2);
}
console.log(remove_character("premalatha",2));
console.log(remove_character("sasikala",5));
console.log(remove_character("nibuna",1));

ten

function first_last(str1){
    if (str1.length <=1){
        return str1;
    }
    mid_char = str1.substring(1,str1.length -1);
    return (str1.charAt(str1.length -1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('apple'));
console.log(first_last('java'));

Assignment-3
one

function Anagram(a,b){
    let len1=a.length;
    let len2=b.length;
    if(len1 !==len2){
        console.log('invalid input');
        return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
        console.log("True");
    }
    else
    {
        console.log("false");
    }
    }
Anagram("apple","plape")

Two

let arr=["prema","sasi","prema","nibuna","sasi","narmadha"];
function remove(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
}
console.log(remove(arr));

Three

function factorial(n){
    if ( n=== 0 || n === 1){
        return 1;
    }
else{
    return n * factorial(n -1);
}
}
let num1=4;
let result=factorial(num1);
console.log("the factorial number:" +result);

Four

let a=(num1,num2)=>{
    if(num2 === 0){
        return num1;
    }
    return a(num2,num1 % num2);
}
console.log(a(20,50));

five

const number=parseInt(prompt('Enter the number of terms:'));
let n1=0,n2=1, nextTerm;
console.log('fibonacci:');
for (let i=1;i<=number;i++){
    console.log(n1);
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}

six

 var numRows=10,
 triangle,
 start,
 stop;
 function p(n,a){
    if(n<2)return a;
    var prevRow=a[a.length-1];
    var curRow=[1];
    for (var i=1;i<prevRow.length;i++){
        curRow[i]=prevRow[i]+prevRow[i-1];
    }
    curRow.push(1);
    a.push(curRow);
    return p(n-1,a);
}
var triangle=p(numRows,[[1]]);
for(var i=0;i < triangle.length;i++)
    console.log(triangle[i]+"\n");

seven

function bSort(arr){
    for( var i=0;i<arr.length;i++){
        for (var j=0;j<(arr.length -i -1); j++ )
        {
            if (arr[j]>arr[j+1]){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr);
}
var arr=[134,20,50,567,250,140,10,359];
bSort(arr);

eight

for(var a=0;a<=30;a++){
    if(a===0){
        console.log(a+"is even");
    }
    else if(a%2 ===0){
        console.log(a+"is even");
    }
    else if(a%2 ===0){
        console.log(a+"is even");
    }
    else{
        console.log(a+"is odd")
    }
}

nine

const marks=[80];
var sum=0;
function grade(){
    for( let i=0;i<=marks.length;i++){
        sum=sum+marks[i];
        var avg=(sum/marks.length);
    }
    if(marks<=50){
console.log('fail');
    }
    else if(marks>=90 && marks<=100){
        console.log('A')
    }
    else if(marks>=80 && marks<=89){
        console.log('B')
    }
    else if(marks>=70 && marks<=79){
        console.log('C')
    }
    else if(marks>=60 && marks<=69){
        console.log('D')
    }
    else if(marks>=50 && marks<=59){
        console.log('E')
    }
}
console.log(grade(marks))

ten

let age=20
let result=(age>=18)?'eligible':'not eligible'
console.log(result);

Assignment -4

two

let date=new Date();
let month=String(date.getMonth()+1).padStart(2,'0');
let day=String(date.getDate()).padStart(2,'0');
let year=date.getFullYear();
let output=day+'/'+month+'/'+year;
console.log(output)

three
for(var i=1;i<=100;i++) {
    if(i%3===0 && i%5 ===0){
        console.log(i+"FizzBuzz");
    }

else if( i%3 === 0)
{
    console.log(i+"Fizz");
}
else if( i%5=== 0)
{
    console.log(i+"Buzz");
}
else
{
    console.log(i)
}
}

four

let data=fetch('https://jsonplaceholder.typicode.com/')

console.log(data)

six
function isEven(value){
    return value % 2 === 0;
}
let filtered=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].filter(isEven);
console.log(filtered)

seven
function isodd(value){
    return value % 2!=0;
}
let filtered=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].filter(isodd);
console.log(filtered)

eight
function check(arr,el){
    let itContains=false
    for( let i=0;i<arr.length;i++){
        if(arr[i]==el){
            itContains=true
            break
        }
    }
    return itContains
}
        console.log(check([1,2,3,4],2))
        console.log(check([1,2,3,4],5))
    function checkElegant(arr,el){
        return arr.includes(el)
    }
    console.log(checkElegant([1,2,3,4],2))
    console.log(checkElegant([1,2,3,4],5))

    nine
var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var divTwo=[];
divTwo=arr.filter(x=>x%2===0);
divTwo.forEach(x=>console.log(x));

ten

Assignment - 5

one
const getData=async()=>
{
    let y = await"hello World";
console.log(y);
}
console.log("hi")
getData();
console.log("prema");

two
new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("value"),2000);
})
.finally(()=>alert("premalatha"))
.then(result=>alert(result));

three
four
sessionStorage.setItem('username','premalatha');
const username=sessionStorage.getItem('username');
console.log(username);

five
six
let arr1=[1,2,3,4,5,];
let arr2=[1,2,3];
let filteredArray=arr2.filter((a)=>arr1.includes(a));
let secFilteredArray=arr1.filter((a)=>!filteredArray.includes(a));
console.log(filteredArray.concat(secFilteredArray));

seven*/










        
    









 










    

    















            

            


        
    

         



        




    






