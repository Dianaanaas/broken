export type User={
    name:string;
    email:string;
    password:string
}

export type UserAndId  = User & {id:number}



export type StateAuth={
    user:null | User;
    message:string
}