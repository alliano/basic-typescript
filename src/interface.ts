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

export interface Greeting {
    name: string,
    greet(name: string): string;
}