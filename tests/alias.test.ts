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

        console.log(user);
        
    })
})