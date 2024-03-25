interface Employee {
    id: number,
    name: string,
    division: string,
    email: string
};

interface SoftwareEnginner extends Employee {
    selary: string
}
interface Tester extends Employee {
    selary: string
}

export { Employee, SoftwareEnginner, Tester }