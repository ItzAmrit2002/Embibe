import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useState } from "react";
import QuesDisplay from "./QuesDisplay";
const QuestionPaper = () => {
    return (
        <Div>
            <Div d="flex" shadow="2" hoverShadow="3" h="5rem" w="auto" justify="space-between" align="center" className="navbar" textAlign="center">
                <Text tag="h1" textSize="display1" fontFamily="Montserrat" m={{ l: "8%" }}>
                    Paper Name
                </Text>
                <Text tag="h1" textSize="display1" fontFamily="Montserrat" m={{ r: "8%" }}>
                    Timer
                </Text>
            </Div>
            <QuesDisplay/>
            <QuesDisplay/>
            <QuesDisplay/>
            <QuesDisplay/>
        </Div>
    );
}

export default QuestionPaper;