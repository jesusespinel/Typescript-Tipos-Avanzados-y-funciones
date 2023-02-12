
//SOBRECARGAS!
export function parseStr(input:string): string[];
export function parseStr(input:string[]): string;
export function parseStr(input:number): number


//GENERICA
export function parseStr(input: unknown): unknown{
    if(Array.isArray(input)) {
       return input.join(""); //string
    }else if( typeof input === "string"){
        return input.split("")
    }else if( typeof input === "number"){
        return true; //boolean
    }
}


const rtaArray = parseStr('Nico');
console.log('rtaArray',rtaArray);
const rtaStr = parseStr(['N,i,c,o'])
console.log('rtaStr',"['N','i','c','o']=>",rtaStr)

const rtaBoolean = parseStr(12);

