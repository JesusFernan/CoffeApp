export class Usuario {
    constructor (
        public nombre: string,
        public email: string, 
        public password: string,
        public numTelefono: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string,
    ) { }




}