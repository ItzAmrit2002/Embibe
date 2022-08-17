import React from 'react'
import { Div, Button, Text, Icon, Container } from "atomize";
import "./QuestionCards.css";
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const QuestionCards = ({ name, time, sub, marks, nq, id }) => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    return (
        <Div d="flex" shadow="2" hoverShadow="3" h="24rem" w="22rem" rounded="lg" bg="#FF8FB1" m={{ t: "3rem" }} p={{ t: "3rem" }} justify="space-between" align="center" className="main-card" flexDir="column" border="1px solid" borderColor="#94618e">
            <Div d="flex">
                <Text textWeight="1000" fontFamily="Itim" textSize="display1" textColor="#f8eee7">{name}</Text>
            </Div>
            <Div d="flex" bg="#f4decb" w="100%" h="80%" align="center" textAlign="center" justify="space-evenly" flexDir="column">
                <Div d="flex" flexDir="column" justify="space-evenly">
                    <Text textWeight="400" fontFamily="Itim" textSize="title" textColor="#121212">No. Of Questions: {nq}</Text>
                    <Text textWeight="400" fontFamily="Itim" textSize="title" textColor="#121212">Time: {time} minutes</Text>
                    <Text textWeight="400" fontFamily="Itim" textSize="title" textColor="#121212">Marks: {marks}</Text>
                    <Text textWeight="400" fontFamily="Itim" textSize="title" textColor="#121212">Subject: {sub}</Text>
                </Div>
                <Button
                    h="2.5rem"
                    w="2.5rem"
                    bg="rgba(244, 210, 170, 1)"
                    hoverShadow="4"
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
                        color="#121212"
                    />
                </Button>
            </Div>
        </Div>
    )
}

export default QuestionCards;