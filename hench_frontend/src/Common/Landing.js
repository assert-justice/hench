import { Link } from "react-router-dom"

export default function Landing(){
    return <>
        <h1>Welcome to Hench!™</h1>
        <p>Here at Hench!™ we connect enterprising entrepreneurs with clients whose unique business needs just can't be satisfied by anyone else! Whether Partner or Benefactor we see you, we hear you, you're valid, and we're here to connect you. Welcome to the family!</p>
        <Link to = "/sign-in">Sign Up as Partner</Link>
        <Link to = "/benefactor">Sign Up as Benefactor</Link>
    </>
}