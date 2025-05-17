import { Link, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();
    const API = 'https://reqres.in/api/login';
    
             

    useEffect(() => {
        buttonValid();
    }, [email, password]);

    const buttonValid = () => {
        const isValid = email.trim() !== '' && password.trim() !== '';
        setValid(isValid);  
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const headers = {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
        const payload = {
        email: email,
        password: password
    }   
        try {
            const response = await axios.post(API, payload, 
            {
                headers: headers
            });
            console.log('Successfuly logged in ✓',response);
            setMessage('Successfuly logged in ✓');
            localStorage.setItem('token', response.data.token);
            setTimeout(() => {
                navigate('/dashboard');
            }, 2500);
        } catch (error){
            if(error.response){
                setTimeout(() => {
                    console.error("Error detail:", error.response.data.error);
                    setMessage(error.response.data.error.toUpperCase());
                }, 500);
            } else {
                setTimeout(() => {
                    setMessage('Something went wrong');
                }, 500);
            }
        }
    }

    

    return (
        <>
    <div className="container min-h-screen flex justify-center gap-20 items-center bg-[url('./assets/login.png')] bg-cover bg-center bg-fixed">
       <div className='flex justify-center'>
                <div className='flex flex-col justify-center bg-white px-3 py-8 items-center rounded-lg mt-10'>
                    <div className='flex'>
                        <p className='flex justify-center text-lg md:w-95'>Login to your account</p>
                    </div>
                    <form onSubmit={handleLogin} action="" className='flex flex-col gap-7 text-lg px-5 mt-5'>
                        <div className='flex flex-col text-lg'>
                            <div>
                                <p>Email</p>
                            </div>
                            <div>
                                <input 
                                    type={"text"} 
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='form-input w-full bg-gray-100 py-1 rounded-3xl px-2 focus:outline-none'/>
                            </div>
                        </div>
                        <div className='flex flex-col text-lg'>
                            <div>
                                <p>Password</p>
                            </div>
                            <div className='relative flex'>
                                <input
                                    type={"password"}
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='form-input w-full bg-gray-100 py-1 rounded-3xl px-2 focus:outline-none'/>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className='flex h-12 text-lg'>
                            <button
                                type="submit"
                                disabled={!valid}
                                className={` ${valid ? 'bg-cyan-400 rounded-3xl  w-75 text-white hover:cursor-pointer hover:bg-white hover:text-cyan-400 hover:outline-cyan-400 hover:outline-4 duration-200' 
                                    :'bg-cyan-400 rounded-3xl w-75 text-white opacity-40'}`}
                            >Login
                            </button>
                        </div>
                    </form>
                    {message && (
                        <div className='mt-5'>
                            <p className={`text-center text-xl font-semibold ${message === "Successfuly logged in ✓" ? 'text-cyan-400' : 'text-red-600'}`}>{message}</p>
                        </div>
                    )}
        <div className='flex justify-between items-center w-full mt-5 px-5'>
        <Link to='/' className='text-md text-gray-500 hover:text-gray-300 hover:cursor-pointer duration-100'>
            ← Back
        </Link>
        <p className='text-md mr-9'>
        No account yet?
        <Link to='/register' className='text-cyan-400 ml-5 hover:text-cyan-300 hover:cursor-pointer duration-100'>
            Register
        </Link>
        </p>
        </div>

                </div>
            </div>
    </div>
        </>
    )
}

export default LoginPage