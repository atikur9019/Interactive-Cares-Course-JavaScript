function Person(name, age) {
     (this.name = name);
     (this.age = age);
     (this.sayHello  = function () {
         console.log('Hello'+ this.name);
     });
}

let person1 = new Person('Atikur', 14);
let person2 = new Person('Rhaman', 15);

console.log(person2);git remote add origin https://github.com/atik9019/Serach.git
git branch -M main
git push -u origin main