const phoneList = [
    {
        name: "Lucas",
        phone: 21949582374,
    },
    {
        name: "Renato",
        phone: 999702132,
    },
    {
        name: "Marcos",
        phone: 27011928,
    },
    {
        name: "André",
        phone: 26031232,
    },
]

const findPhone = (name) => {
    const { phone } = phoneList
    .find(value => value.name.toLowerCase() === name.toLowerCase());
    return phone;
}

console.log(findPhone("André"));
console.log(findPhone("Lucas"));
console.log(findPhone("marcos"));
console.log(findPhone("RENATO"));
