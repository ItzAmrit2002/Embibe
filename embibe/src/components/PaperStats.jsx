import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import QuesCheck from "./QuesCheck";
import Timer from "./Timer";
import axios from "axios";
import Lottie from "react-lottie";
import patterns from "../assets/pattern_dots.json";
const ResultsPage = () => {
  const [ques, setQues] = useState([]);
  const [paperName, setPaperName] = useState("");
  const [subject, setSubject] = useState("");
  const { attemptid, sid, pid } = useParams();
  const [count, setCount] = useState(0);
  const [marked, setMarked] = useState([]);
  const callback = () => {
    setCount(count + 1);
  };

  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .post("https://testhubbknd.onrender.com/api/student/getquestions", {
        paperid: pid,
      })
      .then((res) => {
        // console.log(res);
        setQues(res.data);
        // navigate('/addquestion')
      })
      .catch((err) => console.log(err));
    console.log("attemptid", attemptid);
    await axios
      .post("http://localhost:8000/api/tally/getmarkedoptions", {
        attempt_id: attemptid,
        paper_id: pid,
        student_id: sid,
      })
      .then((res) => {
        console.log(res);
        setMarked(res.data);
      })
      .catch((err) => console.log(err));

    await axios
      .post("https://testhubbknd.onrender.com/api/student/paperinfo", {
        paperid: pid,
      })
      .then((res) => {
        // console.log(res);
        setPaperName(res.data.name);
        setSubject(res.data.subject);
        // navigate('/addquestion')
      })
      .catch((err) => console.log(err));
  };

  return (
    <Div bg="#DCFBE9" h="100%" overflow="auto">
      <Div
        d="flex"
        shadow="2"
        h="5rem"
        w="auto"
        justify="space-between"
        align="center"
        className="navbar"
        bg="#6DCE96"
        textAlign="center"
        p="2%"
        pos="relative"
      >
        <Text
          tag="h2"
          textSize="display1"
          textWeight="500"
          textColor="#1C0F13"
          fontFamily="Poppins"
          m={{ l: "3%" }}
        >
          {paperName} ({subject})
        </Text>
        <Div
          d="flex"
          pos="absolute"
          right="50%"
          transform="translate(50%, 0)"
          flexDir="column"
          justify="center"
          align="center"
          textAlign="center"
          m={{ y: "1rem" }}
        >
          <Button
            prefix={
              <Icon
                name="Logout"
                size="16px"
                color="#1C0F13"
                m={{ r: "0.5rem" }}
              />
            }
            bg="#6DCE96"
            rounded="circle"
            textColor="#1C0F13"
            onClick={() => navigate(`/givepaper`)}
            p={{ r: "1.5rem", l: "1rem" }}
            shadow="3"
            hoverShadow="4"
          >
            Back to Stats
          </Button>
        </Div>
      </Div>
      <Div
        d="flex"
        flexDir="column"
        w="100%"
        justify="center"
        textAlign="center"
      >
        <Text
          textSize="display2"
          fontFamily="Poppins"
          textWeight="500"
          m={{ t: "3rem" }}
          textColor="#1C0F13"
        >
          Your Answers
        </Text>
        {ques.map((item, index) => {
          // console.log(item);
          // setTotalmarks(totalmarks + item.marks);
          return (
            <QuesCheck
              question_dsc={item.question_dsc}
              marks={item.marks}
              slno={index + 1}
              optionA={item.optionA}
              optionB={item.optionB}
              optionC={item.optionC}
              optionD={item.optionD}
              checkA={item.checkA}
              checkB={item.checkB}
              checkC={item.checkC}
              checkD={item.checkD}
            />
          );
        })}
      </Div>
    </Div>
  );
};

export default ResultsPage;
