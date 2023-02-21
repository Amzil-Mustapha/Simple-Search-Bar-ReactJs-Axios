import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data.filter((ele)=>ele.name.toLowerCase().includes(search)))
            })
    },[search])

    return (
        <div className="App">
            <input type="text" placeholder={'Search By Name...'} value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
            <br/><br/>
            <table border={1}>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>USERNAME</td>
                    <td>EMAIL</td>
                </tr>
                </thead>
                <tbody>

                {users.map((ele, idx) => {
                    return <tr key={idx}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.username}</td>
                        <td>{ele.email}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default App
