import type { Book, IdBook } from "../type";

export type Action =
 {type:'INIT_BOOKS';payload:Book[]}
| {type:'ADD_BOOK'; payload:Book}
| {type:'DEL_BOOK'; payload:IdBook}