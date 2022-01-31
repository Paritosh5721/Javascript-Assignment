let Boys = [{ name: 'Paritosh', age: 23 }, { name: 'Ramez', age: 24 }, { name: 'Kunga', age: 25 }];
let Girls = [{ name: 'Priyanka', age: 22 }, { name: 'Shehnaz', age: 28 }, { name: 'Meenakshi', age: 24 }];
let BoysGirls = [...Boys, ...Girls];
BoysGirls.sort((boys, girls) => {
    return boys.age - girls.age;
});
console.log(BoysGirls);