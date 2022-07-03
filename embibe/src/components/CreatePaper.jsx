// Adding a custom border radius
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    Text,
    Container,
    Input,
    Button,
    Icon
} from "atomize";
import back2 from '../assets/back2.json'
import Lottie from "react-lottie";
import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react'
const theme = {
    fontFamily: {
        primary: "Raleway",
    }
};
const CreatePaper = () => {
	const [width, setWidth]= useState(1000)
	useEffect(() => {
		window.addEventListener("resize", () =>
		{
			setWidth(window.innerWidth)
		})
	}, []);
	const defaultOptions = {
        loop: true,
        autoplay: true,
        // here is where we will declare lottie animation
        // "animation" is what we imported before animationData: animation,
        animationData: back2,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };
    return (
        <ThemeProvider theme={theme}>
			<Div position="fixed" h={{ xs: 'auto', md: '100vh' }}>
			<Lottie options={defaultOptions} height={width} width={width} />

			</Div>
            <Container d="flex" align="center" justify="center">
                <Row align="center" justify="center" flexDir="column" shadow="4" rounded="lg" h="30rem" pos="fixed" top="20%" flexGrow="1" bg="gray200">
                    <Col sm="12" md="6" align="center" justify="center" flexDir="column" w="30rem">
                        <Div borderRadius="10px" p="20px" textAlign="center" d="flex" flexDir="column">
                            <Text mb="20px" fontSize="64px" textSize="heading" textWeight="700" fontFamily="Raleway" m={{t: '1rem', b: '3rem' }}>
                                Create your Paper
                            </Text>
                            <Input placeholder="Name of the Paper" h="3.5rem" m={{ b: '2rem' }} />
                            <Input placeholder="Time (in min)" h="3.5rem" m={{ b: '2rem' }} />
                            <Input placeholder="Subject" h="3.5rem" m={{ b: '2rem' }} />
                            <Div d="flex" align="center" justify="center">
                            <Button
                                suffix={
                                    <Icon
                                        name="LongRight"
                                        size="16px"
                                        color="black"
                                        m={{ l: "1rem" }}
                                    />
                                }
                                shadow="3"
                                hoverShadow="4"
                                bg="success700"
                                textAlign="center"
                                textColor="black"
                                textWeight= "700"
                                w="10rem"
                                m={{ r: "0.5rem" }}
                            >
                                Create
                            </Button>
                            </Div>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
}
export default CreatePaper;