import axios from "axios";




  const API_URL = 'https://dummyjson.com/users';


export const getUsers =  async () =>{
 try {
    const response = await axios.get(API_URL)
    await new Promise(resolve => setTimeout(resolve, 4000))

    return response.data.users
    
 } catch (error) {
   console.error('getUsers error:', error)
   return []
 }
}

