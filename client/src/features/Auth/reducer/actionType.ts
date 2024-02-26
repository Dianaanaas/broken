import type { UserAndId } from "../type";

export type Action=
{type:'auth/registration',payload:{message:string,user:UserAndId}}