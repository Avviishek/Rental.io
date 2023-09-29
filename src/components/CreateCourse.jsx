import React from "react";
import { Card } from "@mui/material";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KitchenIcon from '@mui/icons-material/Kitchen';
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const[bedroom , setbedroom] = React.useState("") ;
    const[kitchen , setkitchen] = React.useState("") ;
    const[bathroom , setbathroom] = React.useState("") ;
    const [price , setprice] = React.useState("" ) ;
    const [address , setaddress] = React.useState("" ) ;
    const [imagelink , setimagelink] = React.useState("") ;
    return <div style = {{marginTop : "5rem" , marginLeft: "10rem" , marginRight: "10rem"}  }>
        <Card variant="outlined" style = {{backgroundColor : "#ECF0F1"}}>
        <center><h2>Add Your Property details</h2></center>
        <br />
       
        <form>

  <div class="form-outline mb-2">
    <input type="text" id="form5Example1" class="form-control" placeholder="Property Name" onChange={(e)=>setTitle(e.target.value)}/>
    
  </div>
<br />
<div class="form-outline mb-2">
    <input type="text" id="form5Example1" class="form-control" placeholder="Address" onChange={(e)=>setaddress(e.target.value)}/>
    
  </div>
<br />
 
  <div class="form-outline mb-2">
    <input type="text" id="form5Example2" class="form-control" placeholder="No of Bedroom" onChange ={(e) => setbedroom(e.target.value)}/>
    
  </div>
  <br />
  <div class="form-outline mb-2">
    <input type="text" id="form5Example2" class="form-control" placeholder="No of Kitchen" onChange ={(e) => setkitchen(e.target.value)}/>
    
  </div>
  <br />
  <div class="form-outline mb-2">
    <input type="text" id="form5Example2" class="form-control" placeholder="No of Bathrooms" onChange ={(e) => setbathroom(e.target.value)}/>
    
  </div>
  <br />
  <div class="form-outline mb-2">
    <input type="number" id="form5Example2" class="form-control" placeholder="Price" onChange = {(e)=> setprice(e.target.value)}/>
    
  </div>
  <br />
  <div class="form-outline mb-2">
    <input type="link" id="form5Example2" class="form-control" placeholder="Image Link" onChange = {(e)=>setimagelink(e.target.value)}  />
    
  </div>
  <br />
  

  <center>
  <button type="submit" class="btn btn-primary btn-block mb-2" size = "lg" onClick={()=>{
    function callback2(data) {
      alert('Property Added Sucessfully') ;
        console.log(data) ;
    }
    function callback(res) {
        res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/courses" , {
        //const token = localStorage.getItem("token") ;

        method: "POST" ,
        body : JSON.stringify({
            title : title ,
            bedroom : bedroom , 
            kitchen: kitchen ,
            bathroom: bathroom , 
            address : address , 
            price : price , 
            imageLink : imagelink ,
            published : true 
        }) , 
        headers : {
            "content-type" : "application/json" ,
            "Authorization" : "Bearer " +  localStorage.getItem("token")
        }
    }).then(callback) ;
  }}>Add Property</button>
  </center>
</form>
</Card>
    </div>
}
export default CreateCourse;