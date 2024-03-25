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