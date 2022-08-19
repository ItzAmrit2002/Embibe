import React, { useEffect } from 'react'
import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useState } from "react";
import axios from "axios";
import { Chart } from 'react-charts'
import PieCharts from './PieCharts';
import { useParams } from 'react-router-dom';

const Results = () => {
  const {pid, sid, totalmarks} = useParams();
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
      <Div d="flex" bg="#FF8FB1" h="10vh" w="100%" align="center" justify="center" textAlign="center" shadow="3">
        <Text
          fontFamily="Cedarville Cursive"
          textSize="display3"
          textWeight="800"
          textColor="#121212">
          Embibe
        </Text>
      </Div>
      <PieCharts marks={marks} totalmarks={totalmarks}/>
    </Div>
  )
}

export default Results