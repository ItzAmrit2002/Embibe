import React, { useState } from 'react'
import { Div, Button, Text, Icon, Container, Collapse } from "atomize";
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const StatBox = ({pid,timeC,uid,marks,incorrect, correct, attempted}) => {
    const {auth} = useAuth();
    const [showCollapse, setCollapse] = useState(false)
    const [name, setName] = useState("")
    // const [time, setTime] = useState("")
    const [subject, setSubject] = useState("")
    const navigate = useNavigate();
    const [paperDetails, setPaperDetails] = useState({})
    const getPaper = async () => {
        await axios
      .post("https://embibefrontend.onrender.com/api/paper/getpaper", {
        id: pid
      })
      .then((res) => {
        
        // navigate('/addquestion')
        setName(res.data.name)
        setSubject(res.data.subject)
        console.log("Stats res= ", res.data);
      })
      .catch((err) => console.log(err));
    }
    
    const getPaperDetails = async () => {
        await axios
      .post("https://embibefrontend.onrender.com/api/student/getpaperdetails", {
        paperId: pid
      })
      .then((res) => {
        
        // navigate('/addquestion')
        setPaperDetails(res.data)
        console.log("Paper res= ", res.data);
      })
      .catch((err) => console.log(err));
    }
    useEffect(() => {
      
    
      return () => {
        getPaper()
        getPaperDetails()
        console.log(timeC)
      }
    }, [])
    
  return (
    <>
    <Div bg="#F4DECB" shadow="2" hoverShadow="3" m={{x:'1rem', y:'0.5rem'}} rounded="sm" p={{x:"2rem", y:"0.5rem"}} d="flex" flexDir="row" textWeight="800" align="center" w="98vw" justify="space-between" fontFamily="Raleway">
        <Div d="flex" flexDir="row" justify=" space-around">
        <Text m={{r:'2.5rem'}}>
            Paper Name : {name}
        </Text>
        <Text m={{r:'2.5rem'}}>
            Submitted At : {new Date(timeC).toLocaleString()}
        </Text>
        <Text>
            Subject: {subject}
        </Text>
        </Div>
        <Div d="flex" flexDir="row" justify=" space-around" p="0.5rem">
        <Icon name="External" size="25px" cursor="pointer" onClick={() => {
                        navigate(`/stats/${auth.id}/${pid}`)
                    }} />
        <Icon name="DownArrowCircle" size="25px" m={{l:"2.5rem"}} cursor='pointer' onClick={() => {
                        setCollapse(!showCollapse)
                    }} />
                    </Div>
        
    </Div>
    <Collapse isOpen={showCollapse} w="100%">
                    <Div
                    bg="gray100"
                    border="1px solid"
                    borderColor="gray400"
                    rounded="lg"
                    m={{x:'1rem'}}
                    shadow="4"
                    textWeight="600"
                    fontFamily="Raleway"
                    >
                        <Div
                            p={{ x: "1rem", y: "0.75rem" }}
                            border={{ b:"1px solid" }}
                            borderColor="gray400"
                            w="100%"
                        >
                            Full Marks: {paperDetails.totalMarks}
                        </Div>
                        <Div
                            p={{ x: "1rem", y: "0.75rem" }}
                            border={{ b:"1px solid" }}
                            borderColor="gray400"
                            w="100%"
                        >
                            Marks Obtained: {marks}
                        </Div>
                        <Div
                            p={{ x: "1rem", y: "0.75rem" }}
                            border={{ b:"1px solid" }}
                            borderColor="gray400"
                            w="100%"
                        >
                            Total Number of Questions: {paperDetails.totalQuestions}
                        </Div>
                        <Div
                            p={{ x: "1rem", y: "0.75rem" }}
                            border={{ b:"1px solid" }}
                            borderColor="gray400"
                            w="100%"
                        >
                            Questions Attempted: {attempted}
                        </Div>
                        <Div
                            p={{ x: "1rem", y: "0.75rem" }}
                            border={{ b:"1px solid" }}
                            borderColor="gray400"
                            w="100%"
                        >
                            Number of correct answers: {correct}
                        </Div>
                        <Div
                            p={{ x: "1rem", y: "0.75rem" }}
                            border={{ b:"1px solid" }}
                            borderColor="gray400"
                            w="100%"
                        >
                            Number of incorrect answers: {incorrect}
                        </Div>
                    </Div>
                </Collapse>
    </>
    
  )
}

export default StatBox
