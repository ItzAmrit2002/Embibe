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
      .post("https://testhubbknd.onrender.com/api/tally/getmarks", {
        paper_id: pid,
        user_id: sid,

      })
      .then((res) => {
        console.log(res);
        setMarks(res.data.marks);


      }).catch((err) => console.log(err));


  }
  return (
    <Div d="flex" bg="#FCE2DB" flexDir="column" h="100%">
      <Div d="flex" bg="#94618e" h="10vh" w="100%" align="center" justify="center" textAlign="center" shadow="3" p="2%">
        <Text
          fontFamily="Cedarville Cursive"
          textSize="display3"
          textWeight="800"
          textColor="#f8eee7">
          Embibe
        </Text>
      </Div>
     
      <Row w="100%" h="100%">
        <Col h="100%" w="100%" >
          <PieCharts marks={marks} totalmarks={totalmarks} heading={"Marks"}/>
          </Col>
          <Col h="100%" w="100%" >
          <PieCharts marks={marks} totalmarks={totalmarks} heading={"Questions Answered"}/>
          </Col>
          <Col h="100%" w="100%">
          <PieCharts marks={marks} totalmarks={totalmarks} heading={"Marks"}/>
          </Col>
          <Col h="100%" w="100%">
          <PieCharts marks={marks} totalmarks={totalmarks} heading={"Marks"}/>
          </Col>
          <Col h="100%" w="100%">
          <PieCharts marks={marks} totalmarks={totalmarks} heading={"Marks"}/>
          </Col>
          <Col h="100%" w="100%">
          <PieCharts marks={marks} totalmarks={totalmarks} heading={"Marks"}/>
          </Col>
          
      </Row>
      </Div>
    
  )
}

export default Results