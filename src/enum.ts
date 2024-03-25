/**
 * direkomendasikan ketika membuat enum langsung diberikan value nya dengan
 * menggunakan tanda = (value), jika tidak maka nanti yang terbaca adalah angka
 */
enum Role {
    ADMIN = "ADMIN",
    WRITER = "WRITER",
    GUEST = "GUEST"
};

type User = {
    id: number,
    name: string,
    email: string,
    role: Role
};

export { Role, User }