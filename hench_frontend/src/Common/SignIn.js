import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

export default function SignIn({userName, setUserName}){
    const [nickname, setNickname] = useState(userName);
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        setUserName(nickname);
        navigate("/");
    }

    return <>
        <h1>Sign In</h1>
        <p>
            Thanks to our friends at Panopticon™ for their GDPR compliant data collection services you don't need to supply your credentials, we already have them! That said please enter the nickname you would like to use:
        </p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="user-name">Input Nickname</label>
            <input type={"text"} name="user-name" value={nickname} onChange={e => setNickname(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    </>
}