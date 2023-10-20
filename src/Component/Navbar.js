
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { useContext, useState } from 'react'
import { APiContent } from '../ContextAPI/ApiContext'

export function Navbar({ isLoggedin, setIsloggedin }) {


    // const[seach,setSearch]=useState('')
  

    const Navigtor = useNavigate();

    return (
        <div className="bg-black w-full flex  h-[100px] justify-around py-4 items-center mx-auto font-mono text-[20px] font-bold text-white " >
            <NavLink to="/" className="active:bg-cyan-950"  >
                <p>Movieplaywr</p>
            </NavLink>

            <div>
                <ul className='flex  gap-x-4'>
                    <NavLink to="/Movies/popular" className="active:text-red-700" ><li>Popular</li></NavLink>
                    <NavLink to="/Movies/top_rated" className="active:bg-cyan-950"><li>TopRated</li></NavLink>

                    <NavLink to="/Movies/upcoming" className="active:bg-cyan-950"><li>Upcoming</li></NavLink>
                    {/* <NavLink to="/Search">Search</NavLink> */}
                </ul>
            </div>

           

            <div className='flex gap-x-3'>
                {!isLoggedin ?
                    (<Link to="/Login" >
                        <button className='border' style={{ padding: "5px 10px", borderRadius: "5px ", fontWeight: "bold" }}>Login</button>
                    </Link>) :
                    (<Link to="/"
                        onClick={() => {
                            setIsloggedin(false)
                            toast.success("logged out")
                        }}

                        className="active:bg-cyan-950"><button className='border' style={{ padding: "5px 10px", borderRadius: "5px ", fontWeight: "bold" }}>Logout</button></Link>)
                }
                {!isLoggedin ?
                    <Link to="/Sigup" className="active:bg-cyan-950"><button className='border' style={{ padding: "5px 10px", borderRadius: "5px ", fontWeight: "bold" }}>Signup</button></Link> :

                    ""
                    // <Link to="/Dashboard" className="active:bg-cyan-950"><button className='border' style={{ padding: "5px 10px", borderRadius: "5px ", fontWeight: "bold" }}>Dashboard</button></Link>

                }
            </div>
        </div>
    )
}

