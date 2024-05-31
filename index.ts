// Intersection 

// make type alias (1)

type Student = {
    name: string,
    age: number
}

// make type alias (2)

type Teacher = {
    salary: number,
    subject: string
}

// method 1 (syntax)

let data: Student & Teacher = {
    name: "Areeba",
    age: 22,
    salary: 5000,
    subject: "Mathematics"
}

console.log(data);

// method 2 (syntax)

type detail = Student & Teacher

let data1: detail = {
    name: "Rubab",
    age: 21,
    salary: 3000,
    subject: "English"
}

console.log(data1);





