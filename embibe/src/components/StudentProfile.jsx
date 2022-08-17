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
    let res = await axios.get("http://localhost:8000/api/user/getuser", config)
    if (res.request.status !== 200) {
      localStorage.removeItem("token_embibe");
      setAuth({});
      navigate("/login");
    }
    setEmail(res.data.email)
    setName(res.data.Firstname + " " + res.data.Secondname)
  };
  return (
    <Div d="flex" bg="#212121">
      <Sidebar />
      <Container d="flex" align="center" justify="center">
        <Row
          align="center"
          justify="center"
          flexDir="column"
          shadow="4"
          rounded="lg"
          h="25rem"
          pos="fixed"
          top="25%"
          flexGrow="1"
          bg="#323232">
          <Col
            sm="12"
            md="6"
            align="center"
            justify="center"
            flexDir="column"
            w="30rem">
            <Div
              borderRadius="10px"
              p="20px"
              textAlign="center"
              d="flex"
              flexDir="column">
              <Text
                mb="20px"
                textSize="display1"
                textWeight="1000"
                fontFamily="Montserrat"
                textColor="#ffffff"
                m={{ t: "1rem", b: "2rem" }}>
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
        </Row>
      </Container>
    </Div>
  )
}

export default StudentProfile