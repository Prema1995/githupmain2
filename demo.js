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
function person(friend,person2)
{
    setTimeout(function(){
        console.log("my friend's name is" + friend);
        person2();},5000);
    }
    function person2()
        {
            console.log("my name is prema");
        }
        person("sasi",person2)
    






