import React from 'react'
import { Div, Button, Text, Icon, Container } from "atomize";
import "./QuestionCards.css";

const QuestionCards = ({name, time, sub, marks, nq}) => {
    return (
        <Div d="flex" shadow="1" hoverShadow="3" h="6rem" w="auto" rounded="lg" hoverBg="rgba(193, 226, 223,0.6)" m={{ t: "3rem" }} justify="space-between" align="center" className="main-card" cursor="pointer">
            <Div d="flex" flexDir="column">
                <Text textWeight="1000" fontFamily="Montserrat" textSize="heading" m={{ x: "2rem", y: "0.2rem" }} textColor="#2b4641">{name}</Text>
                <Div d="flex">
                    <Text textWeight="600" fontFamily="Montserrat" textSize="subheader" m={{ x: "2rem" }} textColor="#2b4641">No. Of Questions: {nq}</Text>
                    <Text textWeight="600" fontFamily="Montserrat" textSize="subheader" m={{ x: "2rem" }} textColor="#2b4641">Time: {time} minutes</Text>
                    <Text textWeight="600" fontFamily="Montserrat" textSize="subheader" m={{ x: "2rem" }} textColor="#2b4641">Marks: {marks}</Text>
                    <Text textWeight="600" fontFamily="Montserrat" textSize="subheader" m={{ x: "2rem" }} textColor="#2b4641">Subject: {sub}</Text>
                </Div>
            </Div>
            <Button
                h="2.5rem"
                w="2.5rem"
                bg="rgba(193, 226, 223,0)"
                hoverBg="rgba(193, 226, 223,0.75)"
                rounded="lg"
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