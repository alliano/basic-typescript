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