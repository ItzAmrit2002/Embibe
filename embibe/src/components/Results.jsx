import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Container, Div, Text, Row, Col } from "atomize";
import axios from "axios";
import PieCharts from "./PieCharts";
import { useParams } from "react-router-dom";

const Results = () => {
  const { pid, sid, totalmarks, mid } = useParams();
  const { auth } = useAuth();
  const [papers, setPapers] = useState([]);

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

  useEffect(() => {
    getMarks();
  }, []);

  return (
    <Div d="flex" bg="#FCE2DB" flexDir="column" h="100%" overflow="visible">
      <Div
        d="flex"
        bg="#94618e"
        h="100%"
        w="100%"
        align="center"
        justify="center"
        textAlign="center"
        shadow="3"
        p="1rem"
      >
        <Text
          fontFamily="Cedarville Cursive"
          textSize="display3"
          textWeight="800"
          textColor="#f8eee7"
        >
          Embibe
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
              fontFamily="Itim"
              textWeight="500"
              textColor="#333"
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
                      marks={item.attempted}
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
