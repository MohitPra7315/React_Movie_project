import { Navigate, useNavigate } from 'react-router-dom'




export function PotectMovie({ isloggedin, children }) {

    const Navigator = useNavigate();
    if (isloggedin === true) {
        return children
    }
    else {
        return (

            <Navigate to="/Login"/>
            // <Navigator to="/Login" ></Navigator>

        )

    }

}