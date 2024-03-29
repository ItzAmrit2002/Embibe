import { Div, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const QuesDisplay = ({
  question_dsc,
  marks,
  slno,
  optionA,
  optionB,
  optionC,
  optionD,
  checkA,
  checkB,
  checkC,
  checkD,
  markA,
  markB,
  markC,
  markD,
}) => {
  const { auth } = useAuth();
  const { pid, sid } = useParams();
  const [isA, setIsA] = useState(false);
  const [isB, setIsB] = useState(false);
  const [isC, setIsC] = useState(false);
  const [isD, setIsD] = useState(false);
  const [isACorrect, setIsACorrect] = useState(false);
  const [isBCorrect, setIsBCorrect] = useState(false);
  const [isCCorrect, setIsCCorrect] = useState(false);
  const [isDCorrect, setIsDCorrect] = useState(false);
  const setCorrectOptions = () => {
    console.log("markA", markA);
    console.log("checkA", checkA);
    if (markA) {
      setIsA(true);
    }
    if (markB) {
      setIsB(true);
    }
    if (markC) {
      setIsC(true);
    }
    if (markD) {
      setIsD(true);
    }
    if (checkA) {
      setIsACorrect(true);
    }
    if (checkB) {
      setIsBCorrect(true);
    }
    if (checkC) {
      setIsCCorrect(true);
    }
    if (checkD) {
      setIsDCorrect(true);
    }
  };
  useEffect(() => {
    setCorrectOptions();
  }, []);

  return (
    <Div>
      <Container>
        <Div
          d="flex"
          flexDir="column"
          shadow="2"
          hoverShadow="3"
          bg="#CCF7E3"
          h="auto"
          w="auto"
          rounded="lg"
          textColor="#1C0F13"
          border="1px solid"
          borderColor="#6DCE96"
          m={{ t: "3rem", b: "3rem" }}
        >
          <ToastContainer />
          <Div
            d="flex"
            justify="space-between"
            bg="#6DCE96"
            align="center"
            w="100%"
            p="4%"
            rounded="lg"
          >
            <Text
              textSize="heading"
              fontFamily="Poppins"
              textWeight="400"
              textColor="#1C0F13"
              m={{ l: "5%" }}
            >
              {slno}. {question_dsc}
            </Text>
            <Text
              textSize="subheader"
              fontFamily="Poppins"
              textWeight="700"
              textColor="#1C0F13"
              m={{ r: "5%" }}
            >
              ({marks} marks)
            </Text>
          </Div>
          <Div
            m={{ x: "3%", t: "4vh" }}
            d="flex"
            align="center"
            bg = {isACorrect ? "#BCE9CA" : "#D6F8E8"}
            border="1px dashed"
            borderColor="#6DCE96"
            rounded="md"
            p="0.5%"
          >
            <Label align="center" textWeight="600">
              <Checkbox
                checked={isA}
                inactiveColor="#6DCE96"
                activeColor="#2C666E"
                size="24px"
              />
            </Label>
            <Text
              textSize="subheader"
              fontFamily="Poppins"
              textWeight="400"
              m={{ l: "1%" }}
            >
              {optionA}
            </Text>
          </Div>
          <Div
            m={{ x: "3%", t: "3vh" }}
            d="flex"
            align="center"
            bg = {isBCorrect ? "#BCE9CA" : "#D6F8E8"}
            border="1px dashed"
            borderColor="#6DCE96"
            rounded="md"
            p="0.5%"
          >
            <Label align="center" textWeight="600">
              <Checkbox
                checked={isB}
                inactiveColor="#6DCE96"
                activeColor="#2C666E"
                size="24px"
              />
            </Label>
            <Text
              textSize="subheader"
              fontFamily="Poppins"
              textWeight="400"
              m={{ l: "1%" }}
            >
              {optionB}
            </Text>
          </Div>
          <Div
            m={{ x: "3%", t: "3vh" }}
            d="flex"
            align="center"
            bg = {isCCorrect ? "#BCE9CA" : "#D6F8E8"}
            border="1px dashed"
            borderColor="#6DCE96"
            rounded="md"
            p="0.5%"
          >
            <Label align="center" textWeight="600">
              <Checkbox
                checked={isC}
                inactiveColor="#6DCE96"
                activeColor="#2C666E"
                size="24px"
              />
            </Label>
            <Text
              textSize="subheader"
              fontFamily="Poppins"
              textWeight="400"
              m={{ l: "1%" }}
            >
              {optionC}
            </Text>
          </Div>
          <Div
            m={{ x: "3%", t: "3vh", b: "4vh" }}
            d="flex"
            align="center"
            bg = {isDCorrect ? "#BCE9CA" : "#D6F8E8"}
            border="1px dashed"
            borderColor="#6DCE96"
            rounded="md"
            p="0.5%"
          >
            <Label align="center" textWeight="600">
              <Checkbox
                checked={isD}
                inactiveColor="#6DCE96"
                activeColor="#2C666E"
                size="24px"
              />
            </Label>
            <Text
              textSize="subheader"
              fontFamily="Poppins"
              textWeight="400"
              m={{ l: "1%" }}
            >
              {optionD}
            </Text>
          </Div>
          <Div
            d="flex"
            flexDir="colum"
            align="center"
            textAlign="center"
            justify="center"
          ></Div>
        </Div>
      </Container>
    </Div>
  );
};

export default QuesDisplay;
