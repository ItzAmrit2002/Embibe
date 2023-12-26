import React from 'react'
import { Div, Button, Text, Icon, Container } from "atomize";
import "./QuestionCards.css";
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const QuestionCards = ({ name, time, sub, marks, nq, id }) => {
    const createMarks = async() => {
        await axios.post('https://testhubbknd.onrender.com/api/tally/createmarks', {
          paper_id: id,
          user_id: auth.id})
          .then((res) => {
              console.log(res)
              
          })
          .catch(err =>{
            toast.error(err.response.data, {
              position: toast.POSITION.TOP_RIGHT
            })
             console.log(err)
          })
    }
    const navigate = useNavigate();
    const { auth } = useAuth();
    return (
        <Div d="flex" shadow="2" hoverShadow="3" h="24rem" w="22rem" rounded="lg" bg="#6DCE96" m={{ t: "3rem" }} p={{ t: "3rem" }} justify="space-between" align="center" className="main-card" flexDir="column" border="1px solid" borderColor="#94618e">
            <Div d="flex">
                <ToastContainer/>
                <Text textWeight="1000" fontFamily="Montserrat" textSize="display1" textColor="#1C0F13">{name}</Text>
            </Div>
            <Div d="flex" bg="#CCF7E3" w="100%" h="80%" align="center" textAlign="center" justify="space-evenly" flexDir="column">
                <Div d="flex" flexDir="column" justify="space-evenly">
                    <Text textWeight="500" fontFamily="Poppins" textSize="title" textColor="#1C0F13">No. Of Questions: {nq}</Text>
                    <Text textWeight="500" fontFamily="Poppins" textSize="title" textColor="#1C0F13">Time: {time} minutes</Text>
                    <Text textWeight="500" fontFamily="Poppins" textSize="title" textColor="#1C0F13">Marks: {marks}</Text>
                    <Text textWeight="500" fontFamily="Poppins" textSize="title" textColor="#1C0F13">Subject: {sub}</Text>
                </Div>
                <Button
                    h="2.5rem"
                    w="2.5rem"
                    bg="#6DCE96"
                    hoverShadow="4"
                    rounded="lg"
                    onClick={() => {
                        createMarks()
                        navigate(`/questionpaper/${id}/${auth.id}`);
                    }
                    }
                    m={{ r: "1rem" }}
                >
                    <Icon
                        name="RightArrow"
                        size="30px"
                        color="#1C0F13"
                    />
                </Button>
            </Div>
        </Div>
    )
}

export default QuestionCards;