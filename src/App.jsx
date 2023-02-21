import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [count, setCount] = useState(0)
    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => {
                setUsers(res.data.users.filter((ele) => ele.username.toLowerCase().includes(search)))
            })
    }, [search])


    return (
        <div className="App">
            <input type="text" placeholder={'Search By Username...'} value={search}
                   onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            <div>Number Of users Selected: {users.length}</div>
            <br/><br/>
            <table border={1}>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Username</td>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Phone</td>
                    <td>EMAIL</td>
                </tr>
                </thead>
                <tbody>

                {users.map((ele, idx) => {
                    return <tr key={idx}>
                        <td>{ele.id}</td>
                        <td>{ele.username}</td>
                        <td>{ele.firstName}</td>
                        <td>{ele.lastName}</td>
                        <td>{ele.age}</td>
                        <td>{ele.gender}</td>
                        <td>{ele.phone}</td>
                        <td>{ele.email}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default App
