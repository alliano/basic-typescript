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