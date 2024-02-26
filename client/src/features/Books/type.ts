export type Book ={
    id:number;
    title:string;
    description:string;
    img:string;
    author:string;
    genreId:number
}
export type BookWithoutId = Omit<Book,'id'>


export type IdBook = Book['id']

export type StateBooks ={
    books:Book[]
}