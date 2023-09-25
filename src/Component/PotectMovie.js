import { useNavigate } from 'react-router-dom'




export function PotectMovie({ isloggedin, children }) {

    const Navigator = useNavigate();
    if (isloggedin === true) {
        return children
    }
    else {
        Navigator("/Login")

    }

}