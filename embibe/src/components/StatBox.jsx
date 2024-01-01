import React, { useState } from "react";
import { Div, Button, Text, Icon, Container, Collapse } from "atomize";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const StatBox = ({
  attemptid,
  pid,
  timeC,
  uid,
  marks,
  incorrect,
  correct,
  attempted,
}) => {
  const { auth } = useAuth();
  const [showCollapse, setCollapse] = useState(false);
  const [name, setName] = useState("");
  const [attemptId, setAttemptId] = useState("");
  // const [time, setTime] = useState("")
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();
  const [paperDetails, setPaperDetails] = useState({});
  const getPaper = async () => {
    try {
      setAttemptId(attemptid);
      console.log("attemptid", attemptid);
      const res = await axios.post(
        "https://testhubbknd.onrender.com/api/paper/getpaper",
        {
          id: pid,
        }
      );
      setName(res.data.name);
      setSubject(res.data.subject);
      console.log("Stats res= ", res.data);
    } catch (err) {
      console.error("Error fetching paper:", err);
      // Handle the error appropriately
    }
  };
  const getPaperDetails = async () => {
    try {
      const res = await axios.post(
        "https://testhubbknd.onrender.com/api/student/getpaperdetails",
        {
          paperId: pid,
        }
      );
      setPaperDetails(res.data);
      console.log("Paper res= ", res.data);
    } catch (err) {
      console.error("Error fetching paper details:", err);
      // Handle the error appropriately
    }
  };

  useEffect(() => {
    getPaper();
    getPaperDetails();
  }, []); // Empty dependency array to run on every render

  return (
    <>
      <Div
        bg="#6DCE96"
        shadow="2"
        hoverShadow="3"
        m={{ x: "1rem", y: "0.5rem" }}
        rounded="sm"
        p={{ x: "2rem", y: "0.5rem" }}
        d="flex"
        flexDir="row"
        textWeight="800"
        align="center"
        w="98vw"
        justify="space-between"
        fontFamily="Raleway"
      >
        <Div d="flex" flexDir="row" justify=" space-around">
          <Text m={{ r: "2.5rem" }}>Paper Name : {name}</Text>
          <Text m={{ r: "2.5rem" }}>
            Submitted At : {new Date(timeC).toLocaleString()}
          </Text>
          <Text>Subject: {subject}</Text>
        </Div>
        <Div d="flex" flexDir="row" justify=" space-around" p="0.5rem">
          <Icon
            name="External"
            size="25px"
            cursor="pointer"
            onClick={() => {
              // Also pass the attempt id, i.e. _id
              navigate(`/stats/${auth.id}/${pid}`);
            }}
          />
          <Icon
            name="DownArrowCircle"
            size="25px"
            m={{ l: "2.5rem" }}
            cursor="pointer"
            onClick={() => {
              setCollapse(!showCollapse);
            }}
          />
        </Div>
      </Div>
      <Collapse isOpen={showCollapse} w="100%">
        <Div
          bg="#ECFBFB"
          border="1px solid"
          borderColor="gray400"
          rounded="lg"
          m={{ x: "1rem" }}
          shadow="4"
          textWeight="600"
          fontFamily="Raleway"
        >
          <Div
            p={{ x: "1rem", y: "0.75rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray400"
            w="100%"
          >
            Full Marks: {paperDetails.totalMarks}
          </Div>
          <Div
            p={{ x: "1rem", y: "0.75rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray400"
            w="100%"
          >
            Marks Obtained: {marks}
          </Div>
          <Div
            p={{ x: "1rem", y: "0.75rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray400"
            w="100%"
          >
            Total Number of Questions: {paperDetails.totalQuestions}
          </Div>
          <Div
            p={{ x: "1rem", y: "0.75rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray400"
            w="100%"
          >
            Questions Attempted: {attempted}
          </Div>
          <Div
            p={{ x: "1rem", y: "0.75rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray400"
            w="100%"
          >
            Number of correct answers: {correct}
          </Div>
          <Div
            p={{ x: "1rem", y: "0.75rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray400"
            w="100%"
          >
            Number of incorrect answers: {incorrect}
          </Div>
        </Div>
      </Collapse>
    </>
  );
};

export default StatBox;
