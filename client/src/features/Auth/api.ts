import type { UserAndId, User } from "./type"

  export const registrationFetch =async(obj:User):Promise<{message:string,user:UserAndId}>=>{
const res = await fetch('/api/auth/registration',{
method:'POST',
headers: {
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(obj)
})
const data = await res.json()
return data
  }