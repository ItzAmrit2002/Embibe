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
} from "atomize";
import Card from "./cards/Card";
import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const theme = {
  fontFamily: {
    primary: "Raleway",
  },
};

const AddQuestion = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8000/api/paper/getpaper", {
        id: id
      })
      .then((res) => {
        if(res.status === 200)
        {
          navigate(`/addquestion/${id}`)
        }
        console.log(res)
      })
      .catch((err) => console.log(err));
  }
  return (
    <ThemeProvider theme={theme}>
      <Div
        position="fixed"
        h={{ xs: "auto", md: "100vh" }}
        bgImg="https://cdn.discordapp.com/attachments/699704209355964439/993137807126175844/dynamic-wang-g-YsyUUwT9M-unsplash.jpg"
        bgSize="cover"
        // bgRepeat="no-repeat"
        bgPos="center"
      >
      </Div>
      <Container d="flex" align="center" justify="center">
        <Row
          align="center"
          justify="center"
          flexDir="column"
          shadow="4"
          rounded="lg"
          h="20rem"
          pos="fixed"
          top="30%"
          flexGrow="1"
          bg="success100">
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
                fontSize="64px"
                textSize="heading"
                textWeight="700"
                fontFamily="Raleway"
                m={{ t: "1rem", b: "3rem" }}>
                Enter your Paper ID
              </Text>
              <Input
                placeholder="Paper ID"
                h="3.5rem"
                m={{ b: "2rem" }}
                onChange={(e) => setId(e.target.value)}
              />
              <Div d="flex" align="center" justify="center">
                <Button
                  onClick={handleSubmit}
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
                  textWeight="700"
                  w="10rem"
                  m={{ r: "0.5rem" }}>
                  Add
                </Button>
              </Div>
            </Div>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}

export default AddQuestion