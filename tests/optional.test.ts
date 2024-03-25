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