interface User  {
    id:number
    name:string
    username:string
    email:string
    phone:string
}

export default async function UserServer(){
    await new Promise((resolve) => setTimeout(resolve,2000))
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const user:User[] = await response.json()
    console.log("User ",user)

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