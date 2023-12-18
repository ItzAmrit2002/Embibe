import React, { useState } from 'react'
import Sidebar from './NavbarStudent'
import { Div, Button, Text, Icon, Container, Row, Col } from "atomize";
import axios from 'axios';
import { useEffect } from 'react';
import StatBox from './StatBox';
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const StudentStats = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token_embibe")
    }
  }
  const [papers, setPapers] = useState([])
  const getMarks = async ()=> {
    await axios
      .post("http://localhost:8000/api/student/getmarks", {
        userid: auth.id
      })
      .then((res) => {
        console.log("Marks res= ", res);
        setPapers(res.data);
        console.log(auth.id)
        // navigate('/addquestion')
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    return () => {
      getMarks()
      console.log("hii")
    };
  }, []);
  return (
    <Div d="flex" bg="#FCE2DB" flexDir="column" h="100%" minH="100vh">
    <Sidebar />
    <Div d="flex" align="center" justify="center" flexDir="column"  w="100%">
    {papers.map((item, index) => {
          console.log(item);
          // setTotalmarks(totalmarks + item.marks);
          return (  
            <StatBox pid={item.paperid}/>
          );
        })}
      
      
    </Div>
  </Div>
  )
}

export default StudentStats