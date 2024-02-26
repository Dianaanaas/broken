import type { Genre} from "../type";

export type Action =
|{type:'INIT_GENRES';payload:Genre[]}
