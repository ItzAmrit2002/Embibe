import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useState } from "react";
import axios from "axios";
import { Chart } from 'react-charts'
import { PieChart, PieArcSeries } from 'reaviz';
import "./PieCharts.css";
const PieCharts = ({ marks, totalmarks, heading }) => {
    return (
        <Div
            d="flex"
            bg="#CCF7E3"
            h="12%"
            w="55%"
            align="center"
            m="4rem"
            shadow="3"
            border="1px solid"
            borderColor="#6E7E85"
            rounded="lg"
            flexDir="column"
        >
            <Div bg="#6DCE96" w="100%" rounded="md" shadow="3" textAlign="center" pos="relative" top="0%">
                <Text
                    fontFamily="Poppins"
                    
                    textSize="display1"
                    textColor="#1C0F13"
                    w="100%"
                >
                    {heading}
                </Text>
            </Div>
            <Div d="flex" flexDir="row" justify='space-evenly' align='center' h="100%" w="100%">
                <PieChart
                    height={180}
                    width={200}
                    data={[
                        { key: 'Score', data: `${marks}` },
                        { key: 'Total', data: `${totalmarks}` },
                    ]}
                    series={<PieArcSeries colorScheme={["#2C666E", "#f8eee7"]} />}
                />
                <Text
                    fontFamily="Poppins"
                    textSize="display1"
                    textColor="#1C0F13"
                    textWeight="100"
                    className="text-marks"
                    m={{ x: "1rem" }}
                >
                    {marks}/{totalmarks}
                </Text>
            </Div>
        </Div>
    );
}

export default PieCharts;