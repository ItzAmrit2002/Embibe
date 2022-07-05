import {
    ThemeProvider,
    Div,
    Row,
    Col,
    Text,
    Container,
    Input,
    Button,
    Icon,
    Checkbox,
    Label
} from "atomize";
import { useState } from "react";

const theme = {
    fontFamily: {
        primary: "Raleway",
    },
};

const Card = () => {
    const [opta, setOpta] = useState(false)
    const [optb, setOptb] = useState(false)
    const [optc, setOptc] = useState(false)
    const [optd, setOptd] = useState(false)
    return (
        <ThemeProvider theme={theme}>
            <Div
                bg="success100"
                d="flex"
                align="center"
                m="2rem"
                rounded="md"
                shadow="2"
                hoverShadow="5"
            >
                <Text tag="h1" textSize="title" fontFamily="Raleway" m={{t: "1rem", x: "1rem"}}>
                    1. Whose mom did I fuck last night?
                    <Div m="2rem" shadow="2" rounded="lg" bg="success200">
                    <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                        <Checkbox
                            onChange={e => setOpta(e.target.checked)}
                            checked={opta}
                            inactiveColor="info400"
                            activeColor="info700"
                            size="24px"
                            m="0.5rem"
                        />
                        <Text textSize="subheader" fontFamily="Raleway">
                            Amritendu
                        </Text>
                    </Label>
                    </Div>
                    <Div m="2rem" shadow="2" rounded="lg" bg="success200">
                    <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                        <Checkbox
                            onChange={e => setOptb(e.target.checked)}
                            checked={optb}
                            inactiveColor="info400"
                            activeColor="info700"
                            size="24px"
                            m="0.5rem"
                        />
                        <Text textSize="subheader" fontFamily="Raleway">
                            Ankur
                        </Text>
                    </Label>
                    </Div>
                    <Div m="2rem" shadow="2" rounded="lg" bg="success200">
                    <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                        <Checkbox
                            onChange={e => setOptc(e.target.checked)}
                            checked={optc}
                            inactiveColor="info400"
                            activeColor="info700"
                            size="24px"
                            m="0.5rem"
                        />
                        <Text textSize="subheader" fontFamily="Raleway">
                            SabbyKilled
                        </Text>
                    </Label>
                    </Div>
                    <Div m="2rem" shadow="2" rounded="lg" bg="success200">
                    <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                        <Checkbox
                            onChange={e => setOptd(e.target.checked)}
                            checked={optd}
                            inactiveColor="info400"
                            activeColor="info700"
                            size="24px"
                            m="0.5rem"
                        />
                        <Text textSize="subheader" fontFamily="Raleway">
                            Sumit
                        </Text>
                    </Label>
                    </Div>
                </Text>
            </Div>
        </ThemeProvider>
    );
}

export default Card;