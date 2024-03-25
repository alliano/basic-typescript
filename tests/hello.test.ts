import { hello } from "../src/hello";

describe('Hello', function() {
    it('it should say hello', function() {
        const greet = 'Hello';
        expect(greet).toBe('Hello');
    })
});

describe('say hello', function(): void {
    it('it should say hello with nama', function(): void {
        expect(hello('Audia Naila Safa')).toBe('Hello Audia Naila Safa');
    });
})