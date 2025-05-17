import NavBar from "../../components/NavBar"
import { useState,useEffect } from "react";
import axios from 'axios'
import List from "../../components/List"

const Dashboard = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    const API_URL = `https://reqres.in/api/users?page=${page}`
    useEffect(() => {
    getData()
    }, [page]);

  const getData = () => {
    const headers = {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
    axios.get(API_URL, {
        headers: headers
    }).then((res) => {
      console.log(res)
      setData(res.data.data)
    }).catch((err) => {
      alert('error')
    })
  }
    return(
        <>
        <div className="container min-h-screen bg-[url('./assets/dashboard.png')] bg-center bg-cover pt-38 bg-fixed">
        <NavBar/>
        <div className="flex justify-center px-4 py-10">
        <table
        className="rounded-2xl text-center w-full max-w-6xl"
         >         
        <thead className="bg-cyan-400 text-white ">
        <tr className="text-center">
        <th className="px-4 py-3 rounded-tl-2xl">ID</th>
        <th className="px-4 py-3">First Name</th>
        <th className="px-4 py-3">Last Name</th>
        <th className="px-4 py-3">Email</th>
        <th className="px-4 py-3">Photo</th>
        <th className="px-4 py-3 rounded-tr-2xl">Details</th>
      </tr>
    </thead>
    <tbody>
      {data.map(user => (
        <List key={user.id} data={user} />
      ))}
    </tbody>
        </table>
        </div>
        <div className="flex text-center items-center justify-center gap-20 text-2xl text-white pb-15">
            <button disabled={page === 1} className={`${page === 1 ? 'bg-cyan-400 rounded-3xl  w-48 h-11 text-white opacity-60' : 'bg-cyan-400 rounded-3xl  w-48 h-11 text-white hover:cursor-pointer hover:bg-white hover:text-cyan-400 hover:outline-cyan-400 hover:outline-4 duration-200'}`} onClick={() => setPage(1)}>Previous Page
             </button>
            <button disabled={page === 2} className={`${page === 2 ? 'bg-cyan-400 rounded-3xl  w-48 h-11 text-white opacity-60' : 'bg-cyan-400 rounded-3xl  w-48 h-11 text-white hover:cursor-pointer hover:bg-white hover:text-cyan-400 hover:outline-cyan-400 hover:outline-4 duration-200'}`} onClick={() => setPage(2)}>Next Page
            </button>
        </div>
        </div>
        </>
    )
}

export default Dashboard