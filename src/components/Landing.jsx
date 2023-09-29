
import React from "react";
import './Landing.css'
import { useNavigate } from "react-router-dom";
import ShowCourses from "./ShowCourses";
import Usercourses from "../components/User/Usercourses"
import Search from "./Search";
/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    const navigate = useNavigate() ;
    return <div>
        
   <Search></Search>
   <Usercourses></Usercourses>
        
        
    </div>
}

export default Landing;