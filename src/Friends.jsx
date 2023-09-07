import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './Friend'
export default function Friends() {
    // To manage a state 
    const [friends, setFriends] = useState([])
    // To load data from an external source
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return(
        <div className="box">
            <h4>Friends: {friends.length} </h4>
            {
                friends.map(friend => <Friend frnd={friend}></Friend>)
            }
        </div>
    )
}