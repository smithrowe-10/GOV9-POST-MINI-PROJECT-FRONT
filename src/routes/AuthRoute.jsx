import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/Signup";

function AuthRoute() {


    
    return <Routes>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
    </Routes>

}

export default AuthRoute;