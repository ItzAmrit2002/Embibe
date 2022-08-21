import React, { useEffect } from 'react'
import { Div, Button, Text, Icon, Container, Label, Checkbox, Row, Col } from "atomize";
import { useState } from "react";
import axios from "axios";
import { Chart } from 'react-charts'
import PieCharts from './PieCharts';
import { useParams } from 'react-router-dom';

const Results = () => {
  const { pid, sid, totalmarks } = useParams();
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    getData()

  }, []);

  const getData = async () => {
    await axios
      .post("http://localhost:8000/api/tally/getmarks", {
        paper_id: pid,
        user_id: sid,

      })
      .then((res) => {
        console.log(res);
        setMarks(res.data.marks);


      }).catch((err) => console.log(err));


  }
  return (
    <Div d="flex" bg="#FCE2DB" flexDir="column" h="100vh">
      <Div d="flex" bg="#94618e" h="10vh" w="100%" align="center" justify="center" textAlign="center" shadow="3" p="2%">
        <Text
          fontFamily="Cedarville Cursive"
          textSize="display3"
          textWeight="800"
          textColor="#f8eee7">
          Embibe
        </Text>
      </Div>
      <Row>
        <Col size="3">
          <PieCharts marks={marks} totalmarks={totalmarks} />
          <PieCharts marks={marks} totalmarks={totalmarks} />
          <PieCharts marks={marks} totalmarks={totalmarks} />
          <PieCharts marks={marks} totalmarks={totalmarks} />
          <PieCharts marks={marks} totalmarks={totalmarks} />
          <PieCharts marks={marks} totalmarks={totalmarks} />
        </Col>
      </Row>
    </Div>
  )
}

export default Results