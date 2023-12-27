import React from 'react'
import Sidebar from './NavbarStudent'
import { Div, Button, Text, Icon, Container, Row, Col } from "atomize";
import axios from 'axios';
import { useEffect } from 'react';
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token_embibe")
    }
  }

  useEffect(() => {
    getDeets();
  }, []);

  const getDeets = async () => {
    let res = await axios.get("https://testhubbknd.onrender.com/api/user/getuser", config)
    if (res.request.status !== 200) {
      localStorage.removeItem("token_embibe");
      setAuth({});
      navigate("/login");
    }
    setEmail(res.data.email)
    setName(res.data.Firstname + " " + res.data.Secondname)
  };
  return (
    <Div d="flex" bg="#DCFBE9" flexDir="column" h="100vh">
      <Sidebar />
      <Container d="flex" align="center" justify="center" flexDir="column" >
        <Div d="flex" shadow="2" hoverShadow="3" h="24rem" w="22rem" rounded="lg" bg="#6DCE96" m={{ t: "3rem" }} p={{ t: "3rem" }} justify="space-between" align="center" className="main-card" flexDir="column" border="1px solid" borderColor="#94618e">
            <Div d="flex">
                {/* <ToastContainer/> */}
                <Text textWeight="1000" fontFamily="Montserrat" textSize="display1" textColor="#1C0F13">Your Profile</Text>
            </Div>
            <Div d="flex" bg="#CCF7E3" w="100%" h="80%" align="center" textAlign="center" justify="space-evenly" flexDir="column">
                <Div d="flex" flexDir="column" justify="space-between">
                    <Text textWeight="400" fontFamily="Poppins" textSize="title" textColor="#1C0F13" p={{  y: '1rem' }}>Email: {email}</Text>
                    <Text textWeight="400" fontFamily="Poppins" textSize="title" textColor="#1C0F13" p={{  y: '1rem' }}>Name: {name} </Text>
            
                </Div>
                {/* <Button
                    h="2.5rem"
                    w="2.5rem"
                    bg="rgba(244, 210, 170, 1)"
                    hoverShadow="4"
                    rounded="lg"
                    onClick={() => {
                        // createMarks()
                        // navigate(`/questionpaper/${id}/${auth.id}`);
                    }
                    }
                    m={{ r: "1rem" }}
                >
                    <Icon
                        name="RightArrow"
                        size="30px"
                        color="#121212"
                    />
                </Button> */}
                <Button
                prefix={
                  <Icon
                    name="Edit"
                    size="16px"
                    color="#DCFBE9"
                    m={{ r: "1rem" }}
                  />
                }
                bg="#2C666E"
                rounded="lg"
                shadow="3"
                textColor="#DCFBE9"
                hoverShadow="4"
              >
                Change Password/Email
              </Button>
            </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default StudentProfile