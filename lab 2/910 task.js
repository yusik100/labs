const phonebook = [
    {name: 'Leah', phone: '+380687778889'},
    {name: 'Maru', phone: '+380684593453'},
    {name: 'Farmer', phone: '+380681772302'},
];

const findPhoneByName = (name) => {
    for (const contact of phonebook) {
        if (contact.name == name) {
            return contact.phone;
        }
    } 
};

console.log(findPhoneByName('Maru'));


const phonebook2 = {
    'Leah': '+380687778889',
    'Maru': '+380684593453',
    'Farmer': '+380681772302'
};

const findPhoneByName2 = (name) => {
    return phonebook2[name]
};

console.log(findPhoneByName2('Leah'));