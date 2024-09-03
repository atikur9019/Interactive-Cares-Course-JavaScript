// let person = {
//     // name: 'Atikur',
//     greeting: 'Hello',
//     name: ['Atikur', 'Sakib', 'Mushifk'],
//     showName: function() {
//         // console.log('Hello ' + this.name);
//         this.name.forEach(function(el) {
//             console.log(el);
//         });
//     },
// };

// person.showName();

// method -> Object
// function -> global, window




//JavaScript Objects
let newSymb = Symbol('key1');
const mobileModel = {
    //key: value
    brand: 'Samsung',
    model: 's24 Ultra',
    processor: 'Sanpdragon Gen 3',
    camera: ['200Mp', '12Mp', '12Mp'],
    hasZoomCamera: true,
    'selfie camera Mp': 12,
    [newSymb] : 'MyKey1',
};


mobileModel.model = 's25 Ultra'; // Update key value
Object.freeze(mobileModel); // Freeze Object
mobileModel.model = 's26 Ultra';
mobileModel.hasOwnProperty('camera') // Search key
console.log(mobileModel.model);

console.log(mobileModel['selfie camera Mp']);
console.log(mobileModel[newSymb]);
