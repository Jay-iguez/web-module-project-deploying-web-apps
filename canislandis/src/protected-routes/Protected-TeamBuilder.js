import { Outlet, Navigate } from "react-router-dom";

const ProtectedTeamBuilder = (props) => {
    const {tokenState} = props 
    const {token} = tokenState
    return (
        token ? <Outlet /> : <Navigate to={`home`} />
    )
}

export default ProtectedTeamBuilder