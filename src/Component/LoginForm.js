import { useState } from "react"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function LoginForm({ setIsloggedin, isloggedin }) {
    console.log(isloggedin);
    const Navigator = useNavigate();

    const [show, setShow] = useState(false)
    const [formData, setFormData] = useState({
        fName: "",
        password: ""
    })


    console.log(formData)

    function UpdateHandler(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value

            }
        })


    }

    function SubmitHandler(e) {
        e.preventDefault();
        setIsloggedin(true)
        setFormData(formData)

        toast.success("Logged in")
        Navigator("/Movies")

    }

    return (
        <div className="h-[860px] w-50vw bg-black  flex justify-center   items-center flex-col  ">

         

            <form onSubmit={SubmitHandler} className="flex flex-col mt-20 text-white   items-center gap-y-7 py-10 w-[300px] rounded-lg h-[350px]   mx-auto"  style={{ background: "rgb(51 65 85);",border:'2px solid white'}}>

                <label>
               Name
                    <br></br>
                    <input
                        className=" rounded-[0.8rem] w-[100%] p-[12px]  "
                     
                        type="text"

                        placeholder="Name"
                        value={formData.fName}
                        onChange={UpdateHandler}
                        name="fName"

                    />
                </label>

                <div>

                    <label>
                  Passsword
                        <br></br>
                        <input
                            className=" rounded-[0.8rem] w-full p-[12px]    "
                          

                            type={show ? "password" : "text"}
                            placeholder="Password"
                            value={formData.password}
                            onChange={UpdateHandler}
                            name="password"
                        />

                        <span onClick={() => { setShow(!show) }}>{
                            show ? <p>hidden</p> : <p>Visible</p>
                        }
                        </span>


                    </label>
                </div>


                <button className="bg-blue-600 rounded-md h-16 font-bold w-[90%] text-white">Login</button>
            </form>
        </div>
    )

}