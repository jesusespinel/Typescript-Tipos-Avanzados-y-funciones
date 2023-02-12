let anyVar: any;
anyVar = true;
anyVar = undefined
anyVar = null;
anyVar = 1;
anyVar = []
anyVar = {}

let isNew : boolean = anyVar;
anyVar.doSomething();
anyVar.toUppercase();

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

//ejecuta algo verificando el tipo antes

if(typeof unknownVar === "string"){
    unknownVar.toUpperCase()
}

if(typeof unknownVar === "boolean"){
    let isNewV2: boolean = unknownVar;
}

const parse = (str:string):unknown =>{
    return JSON.parse(str)
}