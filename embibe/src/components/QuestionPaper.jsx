import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import QuesDisplay from "./QuesDisplay";
import Timer from "./Timer";
import axios from "axios";
import Lottie from "react-lottie";
import patterns from "../assets/pattern_dots.json";

const QuestionPaper = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // here is where we will declare lottie animation
    // "animation" is what we imported before animationData: animation,
    animationData: patterns,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [ques, setQues] = useState([]);
  const [paperName, setPaperName] = useState("");
  const [subject, setSubject] = useState("");
  const { pid, sid } = useParams();
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const callback = () => {
    setCount(count + 1);
  };
  const [totalmarks, setTotalmarks] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .post("http://localhost:8000/api/student/getquestions", {
        paperid: pid,
      })
      .then((res) => {
        console.log(res);
        setQues(res.data);
        // navigate('/addquestion')
      })
      .catch((err) => console.log(err));

    await axios
      .post("http://localhost:8000/api/student/paperinfo", {
        paperid: pid,
      })
      .then((res) => {
        console.log(res);
        setPaperName(res.data.name);
        setSubject(res.data.subject);
        setTime(res.data.time);
        // navigate('/addquestion')
      })
      .catch((err) => console.log(err));

    await axios
      .post("http://localhost:8000/api/tally/countmarks", {
        paper_id: pid,
      })
      .then((res) => {
        console.log("totalmarks", res);
        setTotalmarks(res.data);
        // navigate('/addquestion')
      })
      .catch((err) => console.log(err));
  };
  // for (let i = 0; i < ques.length; i++) {
  // 	setTotalmarks(totalmarks + ques[i].marks);
  //   }
  return (
    <Div bg="#FCE2DB" h="100%">
      <Div
        d="flex"
        shadow="2"
        h="5rem"
        w="auto"
        justify="space-between"
        align="center"
        className="navbar"
        bg="#49274a"
        textAlign="center"
        p="2%"
        pos="relative"
      >
        <Text
          tag="h2"
          textSize="display1"
          textWeight="500"
          textColor="#f8eee7"
          fontFamily="Itim"
          m={{ l: "3%" }}
        >
          {paperName} ({subject})
        </Text>
        <Timer minutes={time} pid={pid} sid={sid} totalmarks={totalmarks} />
      </Div>
      {/* <QuesDisplay />
			<QuesDisplay />
			<QuesDisplay />
			<QuesDisplay /> */}
      <Div
        d="flex"
        flexDir="column"
        w="100%"
        justify="center"
        textAlign="center"
      >
        <Text
          textSize="display1"
          textWeight="500"
          textColor="#121212"
          fontFamily="Itim"
          m={{ t: "2%" }}
        >
          <Icon
            name="Checked"
            size="20px"
            color="#121212"
            m={{ x: "0.5rem" }}
          />
          Questions answered: {count}
        </Text>
        <Text
          textSize="display1"
          textWeight="500"
          textColor="#121212"
          fontFamily="Itim"
          textAlign="center"
        >
          <Icon name="Cross" size="20px" color="#121212" m={{ x: "0.5rem" }} />
          Questions aired: {ques.length - count}
        </Text>

        {ques.map((item, index) => {
          console.log(item);
          // setTotalmarks(totalmarks + item.marks);
          return (
            <QuesDisplay
              question_dsc={item.question_dsc}
              marks={item.marks}
              slno={index + 1}
              optionA={item.optionA}
              optionB={item.optionB}
              optionC={item.optionC}
              optionD={item.optionD}
              qid={item._id}
              callback={callback}
              key={index}
            />
          );
        })}
      </Div>
      <Div></Div>
      <Div
        d="flex"
        flexDir="column"
        justify="center"
        align="center"
        textAlign="center"
        m={{ b: "1.5rem" }}
      >
        <Button
          prefix={
            <Icon name="Logout" size="16px" color="white" m={{ r: "0.5rem" }} />
          }
          bg="#7A4495"
          hoverBg="#7A4495"
          rounded="circle"
          onClick={() => {
            navigate(`/results/${pid}/${sid}/${totalmarks}`);
          }}
          p={{ r: "1.5rem", l: "1rem" }}
          shadow="3"
          hoverShadow="4"
        >
          Finish Test
        </Button>
      </Div>
    </Div>
  );
};

export default QuestionPaper;
