import type { Book, BookWithoutId, Genre, IdBook } from "./type"



export const initFetchBooks =async():Promise<Book[]>=>{
   const res =  await fetch('/api/books/')
const data = await res.json()
return data.books
}

export const initFetchGenres =async():Promise<Genre>=>{
    const res =  await fetch('/api/books/categorie')
 const data = await res.json()
 return data.genre
 }

 export const addFetchBook = async (obj:BookWithoutId):Promise<Book>=>{
    const res = await fetch('/api/books',{
        method:'POST',
        headers: {
            'Content-Type': 'aplication/json',
          },
          body:JSON.stringify(obj)
      })
   const data = await res.json()
   return data
 }

 export const delFetchBook =async (book: Book):Promise<{message:string}>=>{
const res = await fetch(`/api/books/${book.id}`,{method:'DELETE'})
const data =await res.json()
return data
 }