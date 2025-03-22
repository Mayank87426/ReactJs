import React from 'react'
import{useLoaderData} from 'react-router-dom'
function Github() {
  return (
    <div>
      
    </div>
  )
}

export default Github
export const githubInfoLoader= async ()=>{
const response=await fetch('www.github.com/users/mayank87426');
return response.json()


}