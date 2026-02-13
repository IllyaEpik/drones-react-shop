export interface IProduct {
	price: number;
	discount: number;
	description: string;
	name: string;
	quantityLimit: number;
	id: number;
	categoryId: number;
	img: string;
}
export interface IUser{
    id: number;
	email: string;
    name: string | null;
    lastName: string | null;
    fatherName: string | null;
    cardNumber: string | null;
    phoneNumber: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export interface RegisterCredentials {
	email: string;
    name: string;
	password: string
}
export interface LoginCredentials {
	email: string;
	password: string
}
export interface JWT {
	token:string
}