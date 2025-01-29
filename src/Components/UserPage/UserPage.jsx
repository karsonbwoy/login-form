import { useContext } from "react"
import Notes from "../Notes/Notes"
import UserContext, { useUser } from "../../UserContext"


const UserPage = () => {
    const { userName, logout } = useUser();
    return (
        <>
            <p>
                Hello {userName}
            </p>
            <button onClick={logout}>Logout</button>
            <Notes />
        </>
    )
}

export default UserPage 