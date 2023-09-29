import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Landing2 from './components/Landing2';
import UserSignup from './components/User/UserSignup' ;
import Userlogin from './components/User/Userlogin' ;
import Usercourses from './components/User/Usercourses' ;
import Purchased from './components/User/Purchased'
// import { decodeRoleFromToken } from './components/authutils'
// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)

function App() {
    //const [course ,setcourse] = React.useState("to Course.io");
    // const role = decodeRoleFromToken() ;
    // console.log(role) ;
    return (
       
        <Router>
        <Navbar />
            <Routes>
                <Route path="/" element={<Landing  />} />
                <Route path="/userSignup" element={<UserSignup  />} />
                <Route path="/userSignup" element={<UserSignup  />} />
                <Route path="/purchasedcourses" element={<Purchased  />} />
                <Route path="/usercourses" element={<Usercourses  />} />
                <Route path="/userlogin" element={<Userlogin  />} />
                <Route path="/landing" element={<Landing2  />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<CreateCourse />} />
                <Route path="/allproperty" element={<ShowCourses />} />
                <Route path="/courses/:courseid" element={<Courses />} />
            </Routes>
        </Router>
    );
}

export default App;