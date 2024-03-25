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