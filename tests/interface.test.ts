import { SoftwareEnginner, Tester } from "../src/employee";
import { Customer, Greeting, Payment } from "../src/interface"

describe('Interface', function(): void {
    it('Should support interface', function(): void {
        const payment: Payment = {
            id: 1,
            from: "bank1",
            to: "bank2",
            balance: 50000000
        }
        console.log(payment);
    });

    it('Should support read only properties', function(): void {
        const customer: Customer = {
            id: 1,
            name: "Alliano",
            email: "alliano@gmail.com"
        };
        console.log(customer);
        // customer.email = "audia@gmail.com"; ini error karena property email read only
    })

    it('should support function interface', function(): void {
        // membuat function interface
        interface MatematicsOperator {
            (val1: number, val2: number): number;
        }
        const add: MatematicsOperator = (val1: number, val2: number): number => val1 + val2;
        const devide: MatematicsOperator = (val1: number, val2: number): number => val1 / val2;
        expect(add(10, 10)).toBe(20);
        expect(devide(20, 20)).toBe(1);
    });

    it('should support indexable interface', function(): void {
        interface favoriteFoods {
            [index: number]: string;
        }
        const foods: favoriteFoods = ["Sate", "Gulay", "Rendang", "Nasi Padang"];
        expect(foods[0]).toBe("Sate");
        expect(foods[1]).toBe("Gulay");
        expect(foods[2]).toBe("Rendang");
        expect(foods[3]).toBe("Nasi Padang");
        interface Address {
            [key: string]: string;
        }
        const address: Address = {
            province: "Maluku",
            city: "Namalean",
            vilage: "Savanese"
        }
        expect(address.province).toBe("Maluku");
        expect(address.city).toBe("Namalean");
        expect(address.vilage).toBe("Savanese");
    });

    it('should support extending interface', function(): void {
        const employee1: SoftwareEnginner = {
            id: 1,
            name: "Abdillah",
            division: "IT",
            email: "lianolian@gmail.com",
            selary: "Rp.100.000.000"
        }
        const employee2: Tester = {
            id: 2,
            name: "Ali",
            email: "alli@gmail.com",
            division: "IT",
            selary: "Rp.70.000.000"
        }
        const { id, name, email, division, selary } = employee1;
        expect(id).toEqual(1);
        expect(name).toBe("Abdillah");
        expect(email).toBe("lianolian@gmail.com");
        expect(division).toBe("IT");
        expect(selary).toBe("Rp.100.000.000");
        const { id: id2, name: name2, email: email2, division: division2, selary: selary2 } =  employee2;
        expect(id2).toEqual(2);
        expect(name2).toBe("Ali");
        expect(email2).toBe("alli@gmail.com");
        expect(division2).toBe("IT");
        expect(selary2).toBe("Rp.70.000.000");
    });

    it('should suport function inner interface', function(): void {
        const human: Greeting = {
            name: "Zakar",
            greet: (name: string): string => {
                return `Hello My name ${name}`;
            }
        }
        expect(human.name).toBe("Zakar");
        expect(human.greet("Alliano")).toBe("Hello My name Alliano");
    })

    it('Should support intersection types', function(): void {
        interface HashName {
            name: string;
        }
        interface HashId {
            id: string;
        }
        // intersection type ini coco sekali digunakan
        // jikalau kita ingin membuat daya type baru
        // yang memiliki karakteristik gabungan dari data type lain
        type nameId = HashId & HashName;
        const nameXid: nameId = {
            id: "h434972",
            name: "Venus"
        };
        const { id, name } = nameXid;
        expect(id).toBe("h434972");
        expect(name).toBe("Venus");

    })
})