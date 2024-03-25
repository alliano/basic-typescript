``` bash
npm init
```

``` bash
npm install --save-dev jest @types/jest
```

``` bash
npm install --save-dev babel-jest @babel/preset-env 
```

``` bash
npm install --save-dev typescript
```

# Setup module
agar typescript bisa menggunakan fitur ES6
tsconfig.json
``` json
"module": "ES8"
```

# setup jest
``` bash
npm install --save-dev @babel/preset-typescript
```

babel.config.json
``` json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ]
}
```

``` bash
npm install --save-dev ts-jest
```

``` bash
npm install --save-dev @jest/globals
```

# test
``` ts
describe('Hello', function() {
    it('it should say hello', function() {
        const greet = 'Hello';
        expect(greet).toBe('Hello');
    })
});
```

# Hello function TS
``` ts
export function hello(name: String): String {
    return `Hello ${name}`;
}
```

``` ts
describe('say hello', function(): void {
    it('it should say hello with nama', function(): void {
        expect(hello('Audia Naila Safa')).toBe('Hello Audia Naila Safa');
    });
})
```

# Menentukan kode yang di kompel
``` json
`tsconfig.json`
{
  // menentukan folder mana aja yang mau di compile
  "include": ["src/**/*"],
  // menentukan folder mana aja yang tidak di compile
  "exclude": ["src/**/*.test.ts"],
  "compilerOptions": {
  }
}
```

# Tipe data primitiv
``` ts
describe('Data Type', function(): void {
    it('should must declare', function(): void {
        // tipe data primitiv
        const name: String = "Audia Naila Safa";
        const age: number = 20;
        const isGirl: boolean =  true;

        console.info(name);
        console.info(age);
        console.info(isGirl);
    });
})
```

# tec compile watch
``` json
  "scripts": {
    "dev": "rm -rf ./dist/ && tsc --watch"
  }
```
``` bash
yarn dev
# atau
npm run dev
```

# Array
``` ts
describe('Array in Typescript', function(): void {
    it('should same in javascript', function(): void {
        // cara 1
        const array1: Array<String> = new Array<String>("Audia", "Naila", "Safa");
        // cara 2
        const array2: number[] = [1,2,3,4,5,6,7];

        console.log(array1);
        console.log(array2);
    });

    it('should read onlu array', function() {
        // Read only array
        const favoriteFoods: ReadonlyArray<String> = new Array<String>("Rendang", "Sate", "Naspad", "Bakso");
        console.log(favoriteFoods);
        // favoriteFoods[0] = "Gule"; // ini error karena faforiteFoods readOnlu
    });

    it('should support tuple', function(): void {
        // tipe data tuple ini jumlah array nya kita tentukan
        // tidak bisa diubah
        // dan tipe data input nya harus menyesuaikan dengan yang ditentukan
        const person: readonly [string, string, number] = ["Audia", "Naila", 20];
        
        // INI ERROR
        // person[0] = "Alli";
        // person[2] = "Azzahra";
        // person[3] = "Abdillah";
        console.log(person);
    });
})
```

# Any
``` ts
describe('Any', function(): void {
    it('should support any', function(): void {
        // tipe data any tipe data yang bisa digunakan untuk menampung apa saja(dinamic data type)
        // typescript tidak akan melakukan pengecekan terhadap tipe data tersebut
        let data: any = {
            "name": "Abdillah",
            "age": 20
        };
        console.log( data);
        data.name = "Audia";
        console.log(data);

        data = new Array<String>("Memasak", "Makan", "Olahraga");
        console.log(data);
    })
})
```
# Union type
``` ts
describe('Union', function(): void {
    it('should support union', function(): void {
        // union type adalah cara menentukan tipe-tipe data yang kita izinkan pada 1 variable
        let data: string | number | boolean;
        data = "Alliano";
        console.log(data);
        data = 10;
        console.log(data);
        data = false;
        console.log(data);
        // data = new Array<String>(); // ini akan error
    })

    it('should support in typescript', function(): void {
        function procecess(data: number | string | boolean): number | string | boolean {
            if(typeof data === "number") return data+2;
            else if(typeof data === "string") return data.toUpperCase();
            else return !data;
        }
        expect(procecess("alliano")).toBe("ALLIANO");
        expect(procecess(30)).toBe(32);
        expect(procecess(false)).toBe(true);
    })
})
```

# alias type

``` ts
type User = {
    id: number,
    name: string,
    email: string,
    address: Address
};

type Address = {
    id: number,
    stret: string,
    province: string,
    country: string
}

export { User, Address };
```

``` ts
import { Address, User } from "../src/alias-type"

describe('Alias', function(): void {
    it('should support alias in typescript', function(): void {
        const address: Address = {
            id: 1,
            country: "Indonesian",
            province: "Surabaya",
            stret: "Sukarno"
        };
        const user: User = {
            id: 1,
            name: "Alliano",
            email: "liano@gmail.com",
            address: address
        };
        // user.isOnline = false; ini error karena property online tidak kita definisikan di type user
        console.log(user);      
    })
})
```

# Object alias
``` ts
describe('Object alias', function(): void {
    it('should support object alias', function(): void {
        // alternative selain menggunakan alias type, kita bisa langsung membuat alias nya 
        // sebagai obejct data type
        const person: {
            id: string,
            name: string,
            age: number
        } = {
            id: "P0001",
            name: "Alliano",
            age: 20
        };
        console.log(person);
    });
});
```
# Optional properties
``` ts
// tanda ? merupakan tanda optional
// artinya parameter atau property, atau type dll
// ketika diberi tanda ? maka tidak wajib diisi dan tidak wajib harus ada
type Product = {
    id: number,
    name: string,
    description?: string
}


export { Product };
```

``` ts
import { Product } from "../src/alias-type";

describe('Optional properties', function(): void {
    it('should support optional properties',  function(): void {
        const product: Product = {
            id: 1,
            name: "Masker Wajah",
            description: "Masker collagen wajah"
        };
        const product2: Product = {
            id: 2,
            name: "Alat cukur",
        };
        console.log(product);
        console.log(product2);
    })
});
```

# enum
``` ts
/**
 * direkomendasikan ketika membuat enum langsung diberikan value nya dengan
 * menggunakan tanda = (value), jika tidak maka nanti yang terbaca adalah angka
 */
enum Role {
    ADMIN = "ADMIN",
    WRITER = "WRITER",
    GUEST = "GUEST"
};

type User = {
    id: number,
    name: string,
    email: string,
    role: Role
};

export { Role, User }
```

``` ts
import { Role, User } from "../src/enum"

describe('Enum', function(): void {
    it('should support enum', function(): void {
        const user: User = {
            id: 1,
            name: "Adia Naila Safa",
            email: "naila@gmial.com",
            role: Role.ADMIN
        }
        console.log(user);
    })
})
```

# Interface
``` ts
/**
 * alternative lain untuk membuat type alias 
 * adalah dengan menggunakan interface,
 * 
 * interface ini sanagat mudah dikembangkan daripada type 
 * interface ini biasanya digunakan jikalau kita 
 * membautuhkan tipedata yang sangat kompleks
 */
export interface Payment {
    id: number,
    from: string,
    to: string,
    balance: number;
}

/**
 * jika kita ingin nilai dari property hanya sekali
 * di inisiasi dan dan tidak dapat diubah lagi
 * maka kita bisa menggunakan keyword readonly
 * saat membuat property nya
 */
export interface Customer {
    id: number,
    name: string,
    readonly email: string
}
```

``` ts
describe('Interface', function(): void {
    it('Should support interface', function(): void {
        const payment: Payment = {
            id: 1,
            from: "bank1",
            to: "bank2",
            balance: 50000000
        }
        console.log(payment);
    })
})
```

``` ts
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
})
```

# Function Interface
``` ts
describe('Interface', function(): void {
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
})
```

# Indexable interface
``` ts
describe('Interface', function(): void {
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
})
```

# Extending Interface
``` ts
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
```

``` ts
describe('Interface', function(): void {
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
})
```

# Function inner interface
``` ts
export interface Greeting {
    name: string,
    greet(name: string): string;
}
```
``` ts
describe('Interface', function(): void {
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
})
```

# Intersection types
``` ts
describe('Interface', function(): void {
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
```

# Function
``` ts
describe('Function', function(): void {
    it('Should support function in typescript', function(): void {
        function greetting(name: string): void {
            console.log(`Hello i am ${name}`);
        }
        function gretting2(name: string): string {
            return `Hello i am ${name}`;
        }
        greetting("Abdillah");
        const result = gretting2("Audia");
        expect(result).toBe("Hello i am Audia");
    });
})
```

# Function Optional Parameter
``` ts
describe('Function', function(): void {
    it('Should support optional parameter', function(): void {
        function greeting(name?: string): string {
            if(name !== undefined) return `Hello ${name}`;
            return `Hello Guest`;
        }
        const result1 = greeting("Alliano");
        const result2 = greeting();
        expect(result1).toBe("Hello Alliano");
        expect(result2).toBe("Hello Guest");
    })
})
```

# Funtion default value parameter
``` ts
describe('Function', function(): void {
    it('Should support default valud parameter', function(): void {
        // function with default value parameter
        function greeting(name: string = "Guest"): string {
            return `Hello ${name}`;
        }
        const result: string = greeting();
        const result2: string = greeting("Audia");
        expect(result).toBe("Hello Guest");
        expect(result2).toBe("Hello Audia");
    });
})
```

# Function Rest Parameter
``` ts
describe('Function', function(): void {
    it('Should support overloading function', function(): void {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if(typeof value === "string") return value.toUpperCase();
                else
            if(typeof value === "number") return value * 10;
        }
        const result1 = callMe("alliano");
        const result2 = callMe(10);
        expect(result1).toBe("ALLIANO");
        expect(result2).toBe(100);
    })
})
```

# Function as parameter
``` ts
describe('Function', function(): void {
    it('should support function as parameter', function(): void {
        function greeting(name: string, filter: (name: string) => string): string {
            return `Hello im ${filter(name)}`;
        }
        function toLower(name: string): string {
            return name.toLocaleLowerCase();
        }
        const result: string = greeting("AUDIA NAILA SAFA", toLower);
        expect(result).toBe("Hello im audia naila safa");
    })
})
```