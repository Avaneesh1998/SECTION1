const userData = {name : 'raju', email : 'raju@gmail.com', password : '6463','phone-no':'8888888888'};
console.log(userData.name);
console.log(userData['password']);
console.log(userData['phone-no']);
userData.address = 'lucknow';
console.log(userData.address);

const Smartphone = {
    brand : 'Samsung',
    model : 's22',
    price : 62400,
    color : 'black'
};
console.log(Smartphone);

Smartphone.price='70000';

console.log(Smartphone);
Smartphone.color=['black','blue','white'];
console.log(Smartphone.color[2]);
Smartphone.color[1]= 'red';
console.log(Smartphone);