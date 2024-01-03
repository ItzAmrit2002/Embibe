import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Container, Div, Text, Row, Col, Button, Icon } from "atomize";
import axios from "axios";
import PieCharts from "./PieCharts";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { pid, sid, totalmarks, mid } = useParams();
  const { auth } = useAuth();
  const [papers, setPapers] = useState([]);
  const navigate = useNavigate();

  const getMarks = async () => {
    try {
      const res = await axios.post(
        "https://testhubbknd.onrender.com/api/tally/getmarks",
        {
          userid: auth.id,
          mid: mid
        }
      );
      console.log("Marks res= ", res);
      setPapers(res.data);
    } catch (err) {
      console.error("Error fetching marks:", err);
    }
  };
  const goHome = () => {
    // Navigate to givepaper
    navigate('/givepaper')
  };
  useEffect(() => {
    getMarks();
  }, []);

  return (
    <Div d="flex" bg="#DCFBE9" flexDir="column" h="100%" overflow="visible">
      <Div
        d="flex"
        bg="#6DCE96"
        h="100%"
        w="100%"
        align="center"
        justify="center"
        textAlign="center"
        shadow="3"
        p="1rem"
      >
        <Button
        pos = "absolute"
        left = "3%"
        bg = "#6DCE96"
        shadow = "3"
        border = "1px solid"
        onClick={goHome}
        >
          <Icon name="LeftArrow" size="20px" color="#1C0F13" />
        </Button>
        <Text
          fontFamily="Cedarville Cursive"
          textSize="display3"
          textWeight="800"
          textColor="#1C0F13"
        >
          TestHub
        </Text>
      </Div>

      <Div
        d="flex"
        flexDir="row"
        minH="100vh"
        h="auto"
        align="center"
        justify="center"
      >
        {papers.map((item, index) => (
          <Div
            key={index}
            w="100%"
            align="center"
            justify="center"
            flexDir="column"
          >
            <Text
              textSize="display3"
              fontFamily="Poppins"
              textWeight="500"
              textColor="#1C0F13"
              textAlign="center"
            >
              Results
            </Text>

            {/* Display each chart in a 2x2 grid */}
            <Container className="center" d="flex" flexDir="column">
              <Row>
                <Col size="6">
                  <Div size={{ w: "50%", h: "50%" }}>
                    <PieCharts
                      marks={item.marks}
                      totalmarks={totalmarks}
                      heading={`Marks`}
                    />
                  </Div>
                </Col>
                <Col size="6">
                  <Div size={{ w: "50%", h: "50%" }}>
                    <PieCharts
                      attempted={item.attempted}
                      totalmarks={totalmarks}
                      heading={`Attempted`}
                    />
                  </Div>
                </Col>
              </Row>
              <Row>
                <Col size="6">
                  <Div size={{ w: "50%", h: "50%" }}>
                    <PieCharts
                      marks={item.correct}
                      totalmarks={totalmarks}
                      heading={`Correct`}
                    />
                  </Div>
                </Col>
                <Col size="6">
                  <Div size={{ w: "50%", h: "50%" }}>
                    <PieCharts
                      marks={item.incorrect}
                      totalmarks={totalmarks}
                      heading={`Incorrect`}
                    />
                  </Div>
                </Col>
              </Row>
            </Container>
          </Div>
        ))}
      </Div>
    </Div>
  );
};

export default Results;
