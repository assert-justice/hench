import { useNavigate } from "react-router-dom"

export default function Benefactor(){
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get('email');
        console.log(email);
        navigate("/");
    }
    return <>
        <h1>
            Thanks for Your Interest!
        </h1>   
        <p>
            At this time Benefactors are invite-only. Leave your email here and be notified when that changes!
        </p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input type={"email"} name="email"/>
            <button type="submit">Submit</button>
        </form>
    </>
}