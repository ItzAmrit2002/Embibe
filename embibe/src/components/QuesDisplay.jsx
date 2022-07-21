import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useState } from "react";
import useAuth from '../hooks/useAuth';


const QuesDisplay = () => {

    const {auth} = useAuth();

    const [isA, setIsA] = useState(false);
    const [isB, setIsB] = useState(false);
    const [isC, setIsC] = useState(false);
    const [isD, setIsD] = useState(false);
    return (
        <Div>
            <Container>
                <Div d="flex" flexDir="column" shadow="2" hoverShadow="3" h="auto" w="auto" rounded="lg" m={{ t: "3rem", b: "3rem" }} p="5%">
                    <Div d="flex" justify="space-between">
                        <Text textSize="heading" fontFamily="Montserrat" textWeight="600" m={{ l: "5%" }}>
                            1. Are you gay?
                        </Text>
                        <Text textSize="subheader" fontFamily="Montserrat" textWeight="600" m={{ r: "5%" }}>
                            (5 marks)
                        </Text>
                    </Div>
                    <Div m={{ l: "10%", t: "4vh" }} d="flex" align="center">
                        <Label align="center" textWeight="600">
                            <Checkbox
                                onChange={(e) => setIsA(e.target.checked)}
                                checked={isA}
                                inactiveColor="success400"
                                activeColor="success700"
                                size="24px"
                            />
                        </Label>
                        <Text textSize="subheader" fontFamily="Montserrat" textWeight="600" m={{ l: "1%" }}>
                            Option 1
                        </Text>
                    </Div>
                    <Div m={{ l: "10%", t: "3vh" }} d="flex" align="center">
                        <Label align="center" textWeight="600">
                            <Checkbox
                                onChange={(e) => setIsB(e.target.checked)}
                                checked={isB}
                                inactiveColor="success400"
                                activeColor="success700"
                                size="24px"
                            />
                        </Label>
                        <Text textSize="subheader" fontFamily="Montserrat" textWeight="600" m={{ l: "1%" }}>
                            Option 2
                        </Text>
                    </Div>
                    <Div m={{ l: "10%", t: "3vh" }} d="flex" align="center">
                        <Label align="center" textWeight="600">
                            <Checkbox
                                onChange={(e) => setIsC(e.target.checked)}
                                checked={isC}
                                inactiveColor="success400"
                                activeColor="success700"
                                size="24px"
                            />
                        </Label>
                        <Text textSize="subheader" fontFamily="Montserrat" textWeight="600" m={{ l: "1%" }}>
                            Option 3
                        </Text>
                    </Div>
                    <Div m={{ l: "10%", t: "3vh" }} d="flex" align="center">
                        <Label align="center" textWeight="600">
                            <Checkbox
                                onChange={(e) => setIsD(e.target.checked)}
                                checked={isD}
                                inactiveColor="success400"
                                activeColor="success700"
                                size="24px"
                            />
                        </Label>
                        <Text textSize="subheader" fontFamily="Montserrat" textWeight="600" m={{ l: "1%" }}>
                            Option 4
                        </Text>
                    </Div>
                </Div>
            </Container>
        </Div>
    );
}

export default QuesDisplay;