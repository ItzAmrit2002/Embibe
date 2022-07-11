import React from "react";
import SidebarStudent from "./SidebarStudent";
import { Div, Button, Text, Icon, Container } from "atomize";
import QuestionCards from "./QuestionCards";
import { useEffect, useState } from "react";
import axios from "axios";
// import "./GivePaper.css"


const GivePaper = () => {
	const [components, setComponents] = useState([]);
	// function addCard() {
	// 	 setComponents([...components, <QuestionCards/>]);
	// }

	const [count, setCount] = useState(0);
	useEffect(() => {
		axios.get("http://localhost:8000/api/student/givepaper").then((res) => {
			console.log(res.data);
			setCount(res.data);


		});
		axios.get("http://localhost:8000/api/student/getpapers").then((res) => {
			setComponents(res.data.papers);
		})
	}, []);
	
	let itemList = [];
	for (let i = 0; i < count; i++) {
		const name = components[i].name;
		const time = components[i].time;
		const subject = components[i].subject;
		console.log(name)
		itemList.push(<QuestionCards name={name} time={time} sub={subject} />)
	}



	return (
		<Div d="flex" bg="#f7fafa">
			<SidebarStudent />
			<Container
				className="main-page"
				overflow="scroll"
				h="100vh"
				flexGrow="1"
				minW="85%">
				{/* <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/> */}
				{itemList}
			</Container>
		</Div>
	);
};

export default GivePaper;
