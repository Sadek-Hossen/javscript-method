let nam = 'Hello world    '
let me = 'I am Emon'
console.log(nam.length)//11
console.log(nam.toUpperCase())//HELLO WORLD   uppercase kore 
console.log(nam.toLocaleLowerCase())//hello world lowercase kore
console.log(nam.charAt(6))//w index number die word ber kore
console.log(nam.charCodeAt())//72 codenumber  ber kore
console.log(nam.at(1))//(e) index number ber kore
console.log(nam.codePointAt(4))// (111)  codepoint ber kore de
console.log(nam.concat(nam,me))//(hello world i am emon) Hello worldHello worldI am Emon     add kore ek var er sathe onno var ke
console.log(nam.endsWith('world'))//(true) sesh er word ck kore takhe 
console.log(nam.indexOf('world')) //(6) kotho number index teke start hoyse ta ber kore
console.log(nam.startsWith('Hello'))// (true) start kothay teke hocce ta sure kora
console.log(nam.lastIndexOf('world'))//(6) toto number index teke start hoyse ta jana
console.log(nam.includes('Hello'))//(true) amar string e ace naki jacai kora
console.log(nam.slice(2,4))//(ll) specipic 2 to 4 index er modde ja ace kete ber kore dibe
console.log(nam.substring(2,8)) //(llo Wo) 2 ta index er majkaner index ke return kore
console.log(nam.replace('Hello',"hi"))//(hi world) specipic word replace kore
console.log(nam.replaceAll(nam,'hello')) //(hello) eta all replace kore dei
console.log(nam.trim())//string er first and end er space remove kore
console.log(nam.trimEnd()) // end er space remove kore
console.log(nam.trimStart())//start er  space remove kore
console.log(nam.split())  //{Hello world} string to array te convert kore
console.log(nam.replaceAll(" ",""))//space remove korte string teke 
console.log(nam.replace(/\s/g,'')) //space remove kore


