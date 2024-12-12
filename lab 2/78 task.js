const fn = () => {
    const objConst = { name: 'Constant' };
    let objVar = { name: 'Variable' };

    objConst.name = 'New Constant Name'; 
    objVar.name = 'New Variable Name';  

    objVar = { name: 'Another Object' }; 

    console.log(objConst); 
    console.log(objVar);   
};

fn();

const createUser = (name, city) => {
    let user = {name: name, city: city};
    return user;
}

console.log(createUser('Maria', 'Tokyo'));