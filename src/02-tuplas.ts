const prices:(number | string )[] = [1,3,2,2,2,2,'as']
prices.push(1);
prices.push('1');

//const user: [string,number] = ['jesus',15,];

let user: [string,number,boolean];
user =  ['jesus',15,false];
user = ['jesus',15,true];;

const [username,age] = user;
