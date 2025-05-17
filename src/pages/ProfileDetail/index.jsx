import { useState,useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Instagram from "../../assets/instagram.png"
import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/twitter.png"

const ProfileDetail = () => {
  const [data, setData] = useState([]);
  const {id} = useParams()

  const API_URL = `https://reqres.in/api/users/${id}`
  
    const style = {
    border: "1px solid #dddddd", 
    textAlign: "center", 
    padding: "8px"
}
  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    const headers = {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
    axios.get(API_URL,{
        headers: headers
    }).then((res) => {
      console.log(res.data.data)
      setData(res.data.data)
    }).catch((err) => {
      alert('error')
    })
  }

    return (
        <>
        <div className="flex flex-col gap-10 items-center bg-gray-100 min-h-screen">
        <NavBar/>
        <div className="bg-gray-50 min-h-screen w-full flex flex-col items-center">
        <div className="w-[70%] h-75 mt-28 flex items-center justify-around ">
            <img className="rounded-full w-70 h-70 shadow-xl hover:scale-105 duration-200" src={data.avatar}/>
            <ul className="text-2xl leading-14 bg-white p-7 shadow-xl rounded-2xl">
                <li className="list-none"><span className="font-bold">Name:</span> {data.first_name} {data.last_name}</li>
                <li className="list-none"><span className="font-bold">Email:</span> {data.email}</li>
                <li className="list-none"><span className="font-bold">Age:</span> 35</li>
                <li className="list-none"><span className="font-bold">Location:</span> Bekasi</li>
            </ul>
        </div>
        <div className="shadow-xl w-[56%] h-75 flex flex-col items-center bg-white rounded-2xl">
        <p className="w-170 text-lg leading-8 mt-6">{data.first_name} {data.last_name} is a passionate tech enthusiast from
            Build Your Computer. With a background in computer engineering 
            and over a decade of hands-on experience assembling high-performance systems, Alex is dedicated to making PC building 
            approachable for everyone.</p>
            <div className="flex flex-col items-center mt-7 gap-4">
                <h1 className="text-2xl text-cyan-400 font-semibold">Follow me on:</h1>
                <div class="flex items-center space-x-4">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={Facebook} className="duration-300 size-13 hover:scale-130"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={Instagram} className="duration-300 size-13 hover:scale-130"/>
                    </a>
                    <a href="https://www.x.com/" target="_blank">
                        <img src={Twitter} className="duration-300 size-13 hover:scale-130"/>
                    </a>
                </div>  
            </div>
        </div>
        </div>
        {/* {data && (
        )} */}
        </div>
        </>
    )
}

export default ProfileDetail