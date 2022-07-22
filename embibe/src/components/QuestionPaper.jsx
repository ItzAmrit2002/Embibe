import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { Routes, Route, useParams } from 'react-router-dom';
import QuesDisplay from "./QuesDisplay";
import Timer from "./Timer";
import axios from "axios";

const QuestionPaper = () => {
	const [ques, setQues] = useState([]);
	const [paperName, setPaperName] = useState("");
	const [subject, setSubject] = useState("");
	const {pid} = useParams();
	

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
			// navigate('/addquestion')
		})
		.catch((err) => console.log(err));
	};
	return (
		<Div>
			<Div
				d="flex"
				shadow="2"
				hoverShadow="3"
				h="5rem"
				w="auto"
				justify="space-between"
				align="center"
				className="navbar"
				textAlign="center">
				<Text
					tag="h1"
					textSize="display1"
					fontFamily="Montserrat"
					m={{ l: "8%" }}>
					{paperName} ({subject})
				</Text>
				<Timer/>
			</Div>
			{/* <QuesDisplay />
			<QuesDisplay />
			<QuesDisplay />
			<QuesDisplay /> */}
			{ques.map((item, index) =>{ 
					
					return (<QuesDisplay
						question_dsc={item.question_dsc}
						marks = {item.marks}
						slno = {index+1}
						optionA = {item.optionA}
						optionB = {item.optionB}
						optionC = {item.optionC}
						optionD = {item.optionD}
					/>)
				})}
				<Div d="flex" flexDir="column" justify="center" align="center" textAlign="center" m={{b:"1.5rem"}}>
				<Button
						prefix={
							<Icon
								name="Logout"
								size="16px"
								color="white"
								m={{ r: "0.5rem" }}
							/>
						}
						bg="brand800"
						hoverBg="brand900"
						rounded="circle"
						p={{ r: "1.5rem", l: "1rem" }}
						shadow="3"
						hoverShadow="4">
						Finish Test
					</Button>
					</Div>
		</Div>
	);
};

export default QuestionPaper;
