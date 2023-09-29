import React from 'react'
import { useState } from 'react';
import "./Landing.css"
import { useNavigate } from 'react-router-dom';

function Landing2() {
      const content = localStorage.getItem("name") ;
      console.log(content) ;
  return (
    <div>
   
     <Updateland  content = {content}/>
    </div>
  )
}
function Updateland(props){
      const navigate = useNavigate() ;
      const role = localStorage.getItem('role') ;
      if(role == 'admin'){
      return <div>
        
      <body100>
       {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/> */}

      

      <div class="jumbotron text-center">
    <h1 class="display-4">Welcome back {props.content}</h1>
    <p class="lead">List your property </p>
    <hr class="my-4"/>
    <button  type="button" class="btn btn-primary" size = "lg" onClick = {() => {navigate('/about')}}>LIST A PROPERTY</button>
    
        <br/>
        <br />
  <button type="button" class="btn btn-secondary" size = "lg" onClick = {() => {navigate('/allproperty')}} >ALL MY PROPERTIES</button>    
    
    
  </div>

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body100>
   
        
        
    </div>
      }else{
        return <div>
        
        <body100>
         {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/> */}
  
        
  
        <div class="jumbotron text-center">
      <h1 class="display-4">Welcome back {props.content}</h1>
      <p class="lead">Start learning with Course.io</p>
      <hr class="my-4"/>
      <button  type="button" class="btn btn-primary" size = "lg" onClick = {() => {navigate('/purchasedcourses')}}>PURCHASED COURSES</button>
      
          <br/>
          <br />
    <button type="button" class="btn btn-secondary" size = "lg" onClick = {() => {navigate('/usercourses')}} >ALL MY COURSES</button>    
      
      
    </div>
  
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body100>
     
          
          
      </div>


      }
}


export default Landing2
