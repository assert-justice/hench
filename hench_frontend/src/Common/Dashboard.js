
import Landing from "./Landing";

export default function Dashboard({userName}){
    if (!userName){
        return <Landing/>;
    }
    return <></>
}