type User = {
    id: number,
    name: string,
    email: string,
    address: Address
};

type Address = {
    id: number,
    stret: string,
    province: string,
    country: string
}

// tanda ? merupakan tanda optional
// artinya parameter atau property, atau type dll
// ketika diberi tanda ? maka tidak wajib diisi dan tidak wajib harus ada
type Product = {
    id: number,
    name: string,
    description?: string
}


export { User, Address, Product };