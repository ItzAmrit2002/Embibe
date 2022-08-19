import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useState } from "react";
import axios from "axios";
import { Chart } from 'react-charts'
import { PieChart } from 'react-minimal-pie-chart';
import "./PieCharts.css";
const PieCharts = ({marks, totalmarks}) => {
    return (
        <Div
            d="flex"
            bg="#f4decb"
            h="30vh"
            w="25vw"
            align="center"
            justify="center"
            m="4rem"
            shadow="3"
            border="1px solid"
            borderColor="#94618e"
            rounded="lg"
            flexDir="column"
        >
            <Div bg="#FF8FB1" w="100%" textAlign="center" rounded="lg" shadow="3">
                <Text
                    fontFamily="Itim"
                    textSize="display3"
                    textColor="#f8eee7"
                >
                    Marks
                </Text>
            </Div>
            <Div d="flex" maxW="20vw" justify="space-between" align="center">
                <PieChart
                    data={[
                        { title: 'One', value: `${totalmarks}`, color: '#f8eee7' },
                        { title: 'Two', value: `${marks}`, color: '#B270A2' },
                    ]}
                    animate={true}
                    animationDuration={500}
                    radius={40}
                />
                <Text
                    fontFamily="Itim"
                    textSize="display1"
                    textColor="#49274a"
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