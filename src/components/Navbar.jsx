import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
function Navbar() {
       const navigate = useNavigate() ;
      const[email ,setemail] = React.useState(null) ;
      
      useEffect(()=>{
        const role = localStorage.getItem('role');
        console.log(role) ;
            function callback2(data){
                  setemail(data.username) ;
                  localStorage.setItem("name",data.username);
                  console.log(data.username) ;
            }
            function callback(res){
                  res.json().then(callback2) ;
            }
         fetch('http://localhost:3000/admin/me' , {
            method : "GET" ,
            headers : {
                  "content-type" : "application/json" ,
                  "Authorization" : "Bearer " + localStorage.getItem("token") 

            }
         }).then(callback) ;
      } , []);
      const role = localStorage.getItem('role');
   if((email) && (role == 'admin')){
  return (
  
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/landing">Rental.io</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/about">List Property</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/allproperty">All my properties</a>
          </li>
       
        
      </ul>
      <form class="d-flex">
        
        {/* <button class="btn btn-primary" type="button" style={{marginRight:"1rem"}}>Register</button> */}
       
        <button class="btn btn-primary" type="button" onClick={()=>{localStorage.setItem("token" , null); localStorage.setItem("name" ,null);localStorage.setItem("role" ,null); window.location = '/'}}>Logout</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
   }else if((email) && (role == 'user')) {
    return (
      <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/landing">Rental.io</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/landing">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/purchasedcourses">Purchased Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/usercourses">All courses</a>
          </li>
       
        
      </ul>
      <form class="d-flex">
        
        {/* <button class="btn btn-primary" type="button" style={{marginRight:"1rem"}}>Register</button> */}
        <div> {email}</div>
        <button class="btn btn-primary" type="button" onClick={()=>{localStorage.setItem("token" , null); localStorage.setItem("name" ,null);localStorage.setItem("role" ,null); window.location = '/'}}>Logout</button>
      </form>
    </div>
  </div>
</nav>

    </div>



    )
   }
   return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="">Rental.io</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          
         
         
          
        </ul>
        <form class="d-flex">
          
          <button class="btn btn-primary" type="button" onClick={()=>{navigate('/register')}} style={{marginRight:"1rem"}} >Owner Signup</button>
          <button class="btn btn-primary" type="button" onClick={()=>{navigate('/login')}}>Owner Login</button>
        </form>
      </div>
    </div>
  </nav>
 
      </div>
      
    )

}

export default Navbar
