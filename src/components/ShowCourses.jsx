import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KitchenIcon from '@mui/icons-material/Kitchen';
function ShowCourses() {
    const [courses, setCourses] = React.useState([]);

    // Add code to fetch courses from the server
    // and set it in the courses state variable.
    useEffect(()=>{
        function callback1(data) {
            setCourses(data.courses) ;
            console.log(data) ;
        }
        function callback(res){
            res.json().then(callback1) ;
        }
 fetch("http://localhost:3000/admin/courses/" , {
    method : "GET",
    headers :{
        "Authorization" : "Bearer " + localStorage.getItem("token") 
    }
 }).then(callback) ;
    } , []) ;
    return <div style = {{display : "flex" , flexWrap : "wrap"}}>
       
        {courses.map((course , index) => <Course courses ={courses} course={course} index = {index} setCourses = {setCourses}/>)}
    </div>
}

function Course(props) {
  const navigate = useNavigate();
    return <div style ={{padding : "8px" , marginTop : "3rem" , marginLeft : "3rem"}}>
        <Card sx={{ maxWidth: 500  , minHeight : 200 , background : grey}}>
      <CardMedia
        sx={{ height: 140 , width : 400  }}
        image= {props.course.imageLink}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span>{props.course.address}</span>
       <br />
       <br />
      <div style={{justifyContent:'space-between' , display:'flex' , flexDirection:'row' , position:'relative'}}>
        <div>
         <BedIcon ></BedIcon>Bedroom {props.course.bedroom} 
         </div>
         <div >           
         <BathtubIcon ></BathtubIcon>Bathroom {props.course.bathroom}
         </div>   
         <div >           
         <KitchenIcon ></KitchenIcon>Kitchen {props.course.kitchen}
         </div>   
         </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" >BUY RS.{props.course.price}/m</Button> 
       
        <Button size="small" variant="contained" onClick={()=>{navigate('/courses/'+props.index)}} >EDIT</Button>
        <Button size="small" color="error" variant="contained" onClick={()=>{
    function callback2(data) {
      // /alert('Course updated Sucessfully') ;
        console.log(data) ;
        let updatedcourse = [] ;
        for(let i = 0 ;i <data.courses.length ; i ++){
          if(data.courses[i]._id != props.course._id){
                updatedcourse.push(data.courses[i]) ;
                
          }
        }
        props.setCourses(updatedcourse);
        data.courses = setCourses ;
        // for(let i = 0 ;i <updatedcourse.length ; i ++){
        //   console.log(updatedcourse[i]) ;
        // }
        console.log(updatedcourse) ;
    }
    function callback(res) {
        res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/courses/" , {
        //const token = localStorage.getItem("token") ;
  
        method: "GET" ,
      
        headers : {
            "content-type" : "application/json" ,
            "Authorization" : "Bearer " +  localStorage.getItem("token")
        }
    }).then(callback) ;
    function call2(data){
      console.log(data) ;
    }
    function call(res){
      res.json().then(call2) ;
    }
    console.log(props.course._id);
  fetch("http://localhost:3000/admin/courses/" + props.course._id  , {
    //console.log(props.course._id);
  method : "DELETE" ,
  headers : {
    "content-type" : "application/json" ,
    "Authorization" : "Bearer " +  localStorage.getItem("token")
}
  }).then(call) ;
  navigate('/courses') ;

  }
//navigate('/courses') ;
        } >DELETE</Button>
       
      </CardActions>
    </Card>
    </div>
}

export default ShowCourses;