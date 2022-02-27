//-----------ex1---------------
let num=[11,20,2]

let addmap=num.map(e=> e+e)
console.log(addmap) //22,40,4

let addfilter=num.filter(e=> e+e)
console.log(addfilter) //11,20,2

//---------------ex2-------------
let friend=['ahmed','aly','sameh']
console.log(friend.filter(e=>e.startsWith('a'))) 
//['ahmed','aly']

/*
console.log(friend.filter(e=>e.startsWith('a')?true:false)) */

//-----ex3----print even num------filter--
const nums=[11,20,2,5,17,10]
const even=nums.filter(e=>e%2===0)
console.log(even)
//20,2,10

//-----ex3----print even num------map+if--
const filterarr=[]
const nums=[11,20,2,5,17,10]
nums.map(e=>
{if(e%2===0)
filterarr.push(e)}
 )
console.log(filterarr)
//20,2,10
