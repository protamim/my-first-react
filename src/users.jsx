import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json(9))
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <p>Users: {users.length} </p>
        </div>
    )
}