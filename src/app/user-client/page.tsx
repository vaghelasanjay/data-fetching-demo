'use client'
import { useEffect, useState } from "react"

interface User  {
    id:number
    name:string
    username:string
    email:string
    phone:string
}

export default function userClient() {

    const [user,setUser] = useState<User[]>([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")

    useEffect(()=> {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok) throw new Error("Failed to fetch users")
                const data = await response.json();
                setUser(data)
            } catch (err) {
                if(err instanceof Error){
                    setError(err.message)
                } else {
                    setError("An Unknown error occured")
                }
            } finally {
                setLoading(false)
            }
        }
        fetchUsers();
    },[])

    if(loading) return <div>Loading...</div>

    if(error) return <div>{error}</div>

    return <ul className="space-y-4 p-4">
        {user.map((user) => (
            <li key={user.id} className="p-4 bg-white rounded-lg shadow-md text-gray-700">
                <div className="font-bold">{user.name}</div>
                <div className="text-sm">
                    <div>Username : {user.name}</div>
                    <div>Email : {user.email}</div>
                    <div>Phone : {user.phone}</div>
                </div>
            </li>
        ))}
    </ul>
    
}