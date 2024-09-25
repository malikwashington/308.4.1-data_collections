const exampleString = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232'


const parseCSV=(str, esc='\r\n')=>{
        let s = str.split(esc)
        const key = s.shift().split(',')
        for(const [i,e] of s.entries())
                s[i]=Object.fromEntries(e.split(',').map((e,i)=>[key[i],e]))
        return s
}

const res = parseCSV(exampleString, '\n')
console.table(res)

const csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

console.table(parseCSV(csv, '\n'))

let arrMeth = parseCSV(csv, '\n');

const popped = arrMeth.pop()
arrMeth.splice(1,0,{ID:"48", Name:"Barry", Occupation:"Runner", Age:"25"});
arrMeth.push({ID:"7", Name:"Bilbo", Occupation:"None", Age:"111"});
console.log('the final version of the table looks like this: ')
console.table(arrMeth)
let sum =0;
for(const o of arrMeth) sum+=+o.Age
console.log(`the average age is: ${sum/arrMeth.length}`)
