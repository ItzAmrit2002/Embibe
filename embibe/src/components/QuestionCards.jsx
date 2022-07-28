import React from 'react'
import { Div, Button, Text, Icon, Container } from "atomize";
import "./QuestionCards.css";
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const QuestionCards = ({ name, time, sub, marks, nq, id }) => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    return (
        <Div d="flex" shadow="1" hoverShadow="3" h="6rem" w="auto" rounded="lg" hoverBg="#323232" m={{ t: "3rem" }} justify="space-between" align="center" className="main-card" cursor="pointer">
            <Div d="flex" flexDir="column">
                <Text textWeight="1000" fontFamily="Montserrat" textSize="heading" m={{ x: "2rem", y: "0.2rem" }} textColor="#ffffff">{name}</Text>
                <Div d="flex">
                    <Text textWeight="600" fontFamily="Montserrat" textSize="subheader" m={{ x: "2rem" }} textColor="#6ad1bf">No. Of Questions: {nq}</Text>
                    <Text textWeight="600" fontFamily="Montserrat" textSize="subheader" m={{ x: "2rem" }} textColor="#6ad1bf">Time: {time} minutes</Text>
                    <Text textWeight="600" fontFamily="Montserrat" textSize="subheader" m={{ x: "2rem" }} textColor="#6ad1bf">Marks: {marks}</Text>
                    <Text textWeight="600" fontFamily="Montserrat" textSize="subheader" m={{ x: "2rem" }} textColor="#6ad1bf">Subject: {sub}</Text>
                </Div>
            </Div>
            <Button
                h="2.5rem"
                w="2.5rem"
                bg="rgba(193, 226, 223,0)"
                hoverBg="#212121"
                rounded="lg"
                onClick={() => {

                    navigate(`/questionpaper/${id}/${auth.id}`);
                }
                }
                m={{ r: "1rem" }}
            >
                <Icon
                    name="RightArrow"
                    size="30px"
                    color="#6ab5ab"
                />
            </Button>

        </Div>
    )
}

export default QuestionCards;