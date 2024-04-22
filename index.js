let user = {
    name: "Damir",
    age: 13,
    status: true,
    wifes: ["Malika", "Amina", "Jasmina", "Farzod","Samir"],
}

const passport =  {
    serries: "AC",
    number: 1244512,
    date: "2015-01-01",
    date_exp: "2025-01-01",
    localtion: {
        country: "Uzbekistan",
        city: "Samarkand",
        region: "Samarakand shaxar",
        zipcode: 140000 
    },
}
let newObj = Object.assign({},user, {passport})
let types = {
    string: [],
    number: [],
    boolean: [],
    object: []
}




function filterPropertiesByType(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        const type = typeof value;
        acc[type] = { ...(acc[type] || {}), [key]: value };
        return acc;
    }, {});
}

const filteredUser = filterPropertiesByType(user);
console.log("Filtered User:", filteredUser);

const filteredPassport = filterPropertiesByType(passport);
console.log("Filtered Passport:", filteredPassport);




// console.log(string);

// let keys = Object.keys(newObj)
// let values =  Object.values(newObj)
// let entries = Object.entries(newObj)



// console.log(newObj);
// console.log(keys);
// console.log(values);
// console.log(entries);