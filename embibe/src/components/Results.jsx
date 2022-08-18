import React from 'react'
import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useState } from "react";
import axios from "axios";
import { Chart } from 'react-charts'
import PieCharts from './PieCharts';

const Results = () => {
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
      <PieCharts/>
    </Div>
  )
}

export default Results