import React, { useState } from 'react'
import Sidebar from './NavbarStudent'
import { Div, Button, Text, Icon, Container, Row, Col, Modal, Input } from "atomize";
import axios from 'axios';
import { useEffect } from 'react';
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [pass1, setState1] = React.useState(false);
  const [pass2, setState2] = React.useState(false);
  const [pass3, setState3] = React.useState(false);
  const [p1, setP1] = useState("")
  const [p2, setP2] = useState("")
  const [p3, setP3] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal2 = () => {
    setIsOpen2(true);
  };

  const handleCloseModal2= () => {
    setIsOpen2(false);
  };
  
  // const changePass = async() => {
  //   try{
  //     if(p2===p3){
  //       let res = await axios.put("https://testhubbknd.onrender.com/api/user/changepassword", {
  //         currentPassword: p1,
  //         newPassword: p3,
  //         email: email
  //       })
  //       console.log(res)
  //       if(res.status==200){
  //         toast.success("Password Chnaged", {
  //           position: toast.POSITION.TOP_RIGHT,
  //           autoClose: 1500
  //         });
  //       }
  //     } 
  //     else{
  //       toast.error("New Password Confirm Mismatch, Try Again!", {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     }     
  //   }
  //   catch(err)
  //   {
  //     console.log(err);
  //     toast.error(err.response.data.message, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }
  //   setIsOpen(false);
  // }
  const changePass = async () => {
    try {
      if (p2 === p3) {
        toast.promise(axios.put("https://testhubbknd.onrender.com/api/user/changepassword", {
          currentPassword: p1,
          newPassword: p3,
          email: email
        }), {
          pending: "Changing password...",
          success: {
            render(){
              return "Password changed successfully!"
            },
            // other options
            autoClose: 1500
          },
          error: {
            render({data}){
              console.log(data)
              return `${data.response.data.message}`
            },
            // other options
            autoClose: 1500
          },
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000, // Close success toasts after 1500ms
        });
      } else {
        toast.error("New Password Confirm Mismatch, Try Again!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsOpen(false);
    }
  };
  const changeName = async () => {
    try {
        toast.promise(axios.put("https://testhubbknd.onrender.com/api/user/changename", {
          firstname: firstName,
          secondname: secondName,
          email: email
        }), {
          pending: "Changing name...",
          success: {
            render(){
              return "Name updated successfully!"
            },
            // other options
            autoClose: 1500
          },
          error: {
            render({data}){
              console.log(data)
              return `${data.response.data.message}`
            },
            // other options
            autoClose: 1500
          },
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000, // Close success toasts after 1500ms
        });
      
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsOpen2(false);
    }
  };
  
  
  const getDeets = async () => {
    try{
    let res = await axios.get("https://testhubbknd.onrender.com/api/user/getuser", config)
    if (res.request.status !== 200) {
      localStorage.removeItem("token_embibe");
      setAuth({});
      navigate("/login");
    }
    console.log("profile res", res)
    setEmail(res.data.email)
    setName(res.data.Firstname + " " + res.data.Secondname)
  }
  catch(err)
  {
    console.log(err)
  }
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
            <ToastContainer/>
            <Div d="flex" bg="#CCF7E3" w="100%" h="80%" align="center" textAlign="center" justify="space-evenly" flexDir="column">
                <Div d="flex" flexDir="column" justify="space-between">
                    <Text textWeight="400" fontFamily="Poppins" textSize="title" textColor="#1C0F13" p={{  y: '1rem' }}>Email: {email}</Text>
                    <Text textWeight="400" fontFamily="Poppins" textSize="title" textColor="#1C0F13" p={{  y: '1rem' }}>Name: {name} </Text>
            
                </Div>
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
                onClick={handleOpenModal}
              >
                Change Password/Email
              </Button>
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
                onClick={handleOpenModal2}
              >
                Change Name
              </Button>
            </Div>
        </Div>
      </Container>
      <Modal isOpen={isOpen} onClose={handleCloseModal} align="center" rounded="md" bg="#CCF7E3">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={handleCloseModal}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "2rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Do you really want to change your password?
        </Text>
      </Div>
      <Div d="flex" flexDir="column" justify="space-between" m={{ b: "2rem" }}>
      <Input
        placeholder="Enter current Password"
        type={pass1 ? "text" : "password"}
        m={{ b: "10px" }}
        onChange={(e)=> {setP1(e.target.value)}}
        suffix={
          <Button
            pos="absolute"
            onClick={() => setState1(!pass1)}
            bg="transparent"
            w="3rem"
            top="0"
            right="0"
            rounded={{ r: "md" }}
          >
            <Icon
              name={pass1 ? "EyeSolid" : "Eye"}
              color={pass1 ? "danger800" : "success800"}
              size="16px"
            />
          </Button>
        }
      />
            <Input
        placeholder="Enter new Password"
        m={{ b: "10px" }}
        type={pass2 ? "text" : "password"}
        onChange={(e)=> {setP2(e.target.value)}}
        suffix={
          <Button
            pos="absolute"
            onClick={() => setState2(!pass2)}
            bg="transparent"
            w="3rem"
            top="0"
            right="0"
            rounded={{ r: "md" }}
          >
            <Icon
              name={pass2 ? "EyeSolid" : "Eye"}
              color={pass2 ? "danger800" : "success800"}
              size="16px"
            />
          </Button>
        }
      />       
            <Input
        placeholder="Confirm new Password"
        m={{ b: "10px" }}
        type={pass3 ? "text" : "password"}
        onChange={(e)=> {setP3(e.target.value)}}
        suffix={
          <Button
            pos="absolute"
            onClick={() => setState3(!pass3)}
            bg="transparent"
            w="3rem"
            top="0"
            right="0"
            rounded={{ r: "md" }}
          >
            <Icon
              name={pass3 ? "EyeSolid" : "Eye"}
              color={pass3 ? "danger800" : "success800"}
              size="16px"
            />
          </Button>
        }
      />              
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={handleCloseModal}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={changePass} bg="#2C666E">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
    <Modal isOpen={isOpen2} onClose={handleCloseModal2} align="center" rounded="md" bg="#CCF7E3">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={handleCloseModal2}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "2rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Do you really want to change your name?
        </Text>
      </Div>
      <Div d="flex" flexDir="column" justify="space-between" m={{ b: "2rem" }}>
      <Input
        placeholder="Enter new First Name"
        type="text"
        m={{ b: "10px" }}
        onChange={(e)=> {setFirstName(e.target.value)}}
      />
            <Input
        placeholder="Enter new Second Name"
        m={{ b: "10px" }}
        type="text"
        onChange={(e)=> {setSecondName(e.target.value)}}
      />                   
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={handleCloseModal2}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={changeName} bg="#2C666E">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
    </Div>
  )
}

export default StudentProfile