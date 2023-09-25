import { useState } from "react"
import { Link } from "react-router-dom"
// import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
// import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export function SignupForm({ setIsloggedin, isloggedin }) {

    console.log(isloggedin)
    const Navigate = useNavigate();

    const [hidden, setHidden] = useState(false)
    const [Conhidden, setConhidden] = useState(false)
    const [accounttype, setAccounttype] = useState("student")


    function ConHiddenHandler() {
        setConhidden((prev) => !prev)
    }
    function hiddenHandler() {
        setHidden((prevd) => !prevd)
    }


    const [formData, setFormData] = useState(
        {
            fName: "",
            lName: "",
            email: "",
            password: "",
            confirm: ""
        }
    )

    // console.log(formData)

    function changeHandler(event) {

        setFormData((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            }
        })

    }


    function submitHandler(e) {
        e.preventDefault();
        if (formData.password != formData.confirm) {
            toast.error("Password dosn't Match")
        } else {
            toast.success("Account has been created ")

            console.log(formData)
            setIsloggedin(true)
            Navigate('/Movies')

        }



    }
    return (

        <div className="h-[880px] w-[100%]  mx-auto bg-black-50    ">


            <div className=" w-full flex items-center">
               
                <form onSubmit={submitHandler} className="flex flex-col mt-20  gap-x-7 py-10  w-[600px]  rounded-lg  border bg-richblack-200 text-white mx-auto">



<div className="w-full ml-32">
                    <label htmlFor="fName" className="w-full mx-auto  ">
                        <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">  First Name<sup className="text-pink-200"> *</sup></p>

                        <input
                            className="bg-richblack-800 fw-full  rounded-[0.8rem] w-[60%] mx-auto text-richblack-5 p-[12px] "

                            type="text"
                            required
                            placeholder="First NAme"
                            onChange={changeHandler}
                            value={formData.fName}
                            id="fName"
                            name="fName"
                        />
                    </label>
                    <label htmlFor="lName" className="w-full">
                        <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">  Last Name<sup className="text-pink-200"> *</sup></p>

                        <input
                            className=" rounded-[0.8rem] text-richblack-5 w-[60%] p-[12px] "

                            type="text"
                            required
                            placeholder="last NAme"
                            onChange={changeHandler}
                            value={formData.lName}
                            id="lName"
                            name="lName"

                        />
                    </label>











                    <label htmlFor="email mt-6 " className="w-full">
                        <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">  Email<sup className="text-pink-200"> *</sup></p>

                        <input
                            className="bg-richblack-800 rounded-[0.8rem] text-richblack-5 w-[60%] p-[12px] "

                            type="email"
                            required
                            onChange={changeHandler}
                            value={formData.email}
                            name="email"
                            id="email"
                            placeholder="Enter email address"
                        />

                    </label>



                    {/* <div className="flex justify-between mt-[20px]  "> */}
                    
                        <label htmlFor="password" className="w-full relative">
                            <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">Create  Passsword<sup className="text-pink-200"> *</sup></p>
                            <input
                                className="bg-richblack-800 rounded-[0.8rem] text-richblack-5 w-[60%] p-[12px] "

                                type={hidden ? "password" : "text"}
                                required
                                onChange={changeHandler}
                                value={formData.password}
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <span
                                className="absolute text-white right-3 top-[40px] cursor-pointer"

                                onClick={hiddenHandler}>
                                {
                                    hidden ? (<p>inVisible</p>) : (<p>Visible</p>)
                                }
                            </span>

                        </label>
                  

                  


                        <label htmlFor="Confirm" className="w-full relative">
                            <p className="text-[0.857rem] text-richblack-5 mb-1 leading-[1.385rem]">Confirm Password<sup className="text-pink-200"> *</sup></p>
                            <input
                                className="bg-richblack-800 rounded-[0.8rem] text-richblack-5 w-[60%] p-[12px] "

                                type={Conhidden ? "password" : "text"}
                                required
                                onChange={changeHandler}
                                value={formData.confirm}
                                name="confirm"
                                id="confirm"
                                placeholder="Confirm password"
                            />


                            <span
                                className="absolute text-white right-3 top-[40px] cursor-pointer"

                                onClick={ConHiddenHandler}>
                                {
                                    Conhidden ? (<p>invisible</p>) : (<p>Visible</p>)
                                }
                            </span>
                        </label>
                 
                    {/* </div> */}
                 
                    </div>
                    <button className="w-full bg-blue-600 h-10 mt-6 rounded-md font-mono font-bold  text-white">Create Account</button>
                </form>
            </div>
        </div>
    )
}

