import { useRouter } from "next/router";
import { useState } from "react";

export default function createProduct() {
    const [title,setTile] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [loading,setLoading] = useState(false)

    const router = useRouter();

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch(`/react-form/api`,{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({title,price,description})
            })
            if(response.ok){
                router.push("/product-db")
            }
        } catch (error) {
            
        }
    }

    return <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
        <label className="text-white">
            <input type="text" className="block w-full p-2 text-black border rounded" name="title" onChange={(e) => setTile(e.target.value)} />
        </label>
        <label className="text-white">
            <input type="number" className="block w-full p-2 text-black border rounded" name="price" onChange={(e) => setPrice(e.target.value)} />
        </label>
         <label className="text-white">
            <input type="text" className="block w-full p-2 text-black border rounded" name="description" onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"></button>
    </form>

}