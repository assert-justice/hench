import { Link } from "react-router-dom"

export default function Nav({userName, setUserName}){
    return <nav>
        {userName? `Welcome Back ${userName}! |` : ""}
        <Link to="/">Home</Link> | 
        {userName? 
            <Link to="/" onClick={()=>setUserName("")}>Sign Out</Link> :
            <Link to="sign-in">Sign In</Link>} |
        <Link to="about">About</Link> | 
        <Link to="careers">Careers</Link>
    </nav>
}