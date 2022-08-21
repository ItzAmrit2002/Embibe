import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useState } from "react";
import axios from "axios";
import { Chart } from 'react-charts'
import { PieChart, PieArcSeries } from 'reaviz';
import "./PieCharts.css";
const PieCharts = ({ marks, totalmarks }) => {
    return (
        <Div
            d="flex"
            bg="#f4decb"
            h="30vh"
            w="25vw"
            align="center"
            m="4rem"
            shadow="3"
            border="1px solid"
            borderColor="#94618e"
            rounded="lg"
            flexDir="column"
        >
            <Div bg="#94618e" w="100%" rounded="md" shadow="3" textAlign="center" maxW="25vw" pos="relative" top="0%">
                <Text
                    fontFamily="Itim"
                    textSize="display3"
                    textColor="#f8eee7"
                >
                    Marks
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
                    series={<PieArcSeries colorScheme={["#94618e", "#f8eee7"]} />}
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