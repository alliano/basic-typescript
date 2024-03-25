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

    it('Should support optional parameter', function(): void {
        function greeting(name?: string): string {
            if(name !== undefined) return `Hello ${name}`;
            return `Hello Guest`;
        }
        const result1 = greeting("Alliano");
        const result2 = greeting();
        expect(result1).toBe("Hello Alliano");
        expect(result2).toBe("Hello Guest");
    });

    it('Should support rest parameter', function(): void {
        function sum(...val: Array<number>): number {
            let result: number = 0;
            val.forEach(e => result+=e);
            return result;
        }
        const result: number = sum(1,2,3,4,5,6,7);
        expect(result).toBe(28);
    });

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