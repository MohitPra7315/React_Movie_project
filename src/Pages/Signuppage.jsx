import { SignupForm } from "../Component/SignupForm"

export function Signuppage({setIsloggedin,isloggedin}){
    return(
        <div className="">
            <SignupForm isloggedin={isloggedin} setIsloggedin={setIsloggedin}></SignupForm>
     
        </div>
    )
}