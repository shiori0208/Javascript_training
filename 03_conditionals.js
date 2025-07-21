 let num1 = 6;
let num2 = 9;

if (num1 > num2 )
{
    console.log(num1);
    
}
else 
{
    console.log(num2);
    
} 

 if (typeof num1 === "number")
{
    console.log("YEP");
    
}
else 
{
    console.log("NOPE");
    
} 

    //LOOPS

 let sum = 0;
let i = 0;

while(i<=5)
{
    sum+=1*i;
    i++;
}

console.log(sum); 

 let multiNum = [];
let nums = [2,4,6];


for (let i=0; i<nums.length; i++)
{
    let multi = nums[i]*2;
    multiNum.push(multi);
}
console.log(multiNum); 


let musicStyles = ["indie", "bedroom-pop", "dream-pop", "lo-fi", "metal", "alternative", "rock"];
let prefer = [];

for (const music of musicStyles) 
{
    if (music === "metal")
    {
     continue;
    }
    prefer.push(music);
}
console.log(prefer);

// look up CALL, BIND, APPLY methods



