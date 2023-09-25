import { LoginForm } from "../Component/LoginForm"

export function Loginpage({setIsloggedin,isloggedin}){
    return (
        <div>
            <LoginForm setIsloggedin={setIsloggedin} isloggedin={isloggedin}  />
            
        </div>
    )

}