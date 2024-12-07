
const ages = (persons) => {
    let years = {};
    for (let person in persons) {
        age = persons[person].died - persons[person].born;
        years[person] = age;
    }
    return years;
}


const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
  };
  console.log(ages(persons));