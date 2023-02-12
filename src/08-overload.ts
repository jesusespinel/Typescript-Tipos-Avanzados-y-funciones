
function parseStr(input: string | string[]): string | string[]{
 if(Array.isArray(input)) {
    return input.join();
 }else{
    return input.split("");
 }
}

const rtaArray = parseStr('Nico');
console.log('rtaArray',rtaArray);
const rtaStr = parseStr(['N,i,c,o'])

console.log('rtaStr',"['N','i','c','o']=>",rtaStr)