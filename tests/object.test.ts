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
    })
})