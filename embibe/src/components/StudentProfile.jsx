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
    <Div d="flex" bg="#FCE2DB" flexDir="column" h="100vh">
      <Sidebar />
      <Container d="flex" align="center" justify="center" flexDir="column" >
        {/* <Row
          align="center"
          justify="center"
          flexDir="column"
          shadow="4"
          rounded="lg"
          h="25rem"
          pos="fixed"
          top="25%"
          flexGrow="1"
          bg="#FCE2DB">
          <Col
            sm="12"
            md="6"
            align="center"
            justify="center"
            flexDir="column"
            w="30rem">
            <Div
              borderRadius="10px"
              // p="20px"
              textAlign="center"
              d="flex"
              flexDir="column">
              <Text
                
                textSize="display1"
                textWeight="1000"
                fontFamily="Montserrat"
                textColor="#ffffff"
                // m={{ t: "1rem", b: "2rem" }}
                bg="#FF8FB1"
                >
                My Profile
              </Text>
              <Text
                mb="20px"
                textSize="title"
                textWeight="600"
                fontFamily="Montserrat"
                textColor="#6ad1bf"
                m={{ t: "1rem", b: "1rem" }}>
                Name: {name}
              </Text>
              <Text
                mb="20px"
                textSize="title"
                textWeight="600"
                fontFamily="Montserrat"
                textColor="#6ad1bf"
                m={{ t: "1rem", b: "4rem" }}>
                Email: {email}
              </Text>
              <Button
                prefix={
                  <Icon
                    name="Edit"
                    size="16px"
                    color="white"
                    m={{ r: "1rem" }}
                  />
                }
                bg="rgba(13, 115, 119,0.5)"
                hoverBg="rgb(13, 115, 119)"
                rounded="lg"
                shadow="3"
                hoverShadow="4"
              >
                Change Password/Email
              </Button>
            </Div>
          </Col>
        </Row> */}
        <Div d="flex" shadow="2" hoverShadow="3" h="24rem" w="22rem" rounded="lg" bg="#FF8FB1" m={{ t: "3rem" }} p={{ t: "3rem" }} justify="space-between" align="center" className="main-card" flexDir="column" border="1px solid" borderColor="#94618e">
            <Div d="flex">
                {/* <ToastContainer/> */}
                <Text textWeight="1000" fontFamily="Itim" textSize="display1" textColor="#f8eee7">My Profile</Text>
            </Div>
            <Div d="flex" bg="#f4decb" w="100%" h="80%" align="center" textAlign="center" justify="space-evenly" flexDir="column">
                <Div d="flex" flexDir="column" justify="space-between">
                    <Text textWeight="600" fontFamily="Raleway" textSize="title" textColor="#121212" p={{  y: '1rem' }}>Email: {email}</Text>
                    <Text textWeight="600" fontFamily="Raleway" textSize="title" textColor="#121212" p={{  y: '1rem' }}>Name: {name} </Text>
            
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
                    color="#121212"
                    m={{ r: "1rem" }}
                  />
                }
                bg="rgba(244, 210, 170, 1)"
                rounded="lg"
                shadow="3"
                textColor="#121212"
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