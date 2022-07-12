import React from "react";
import SidebarStudent from "./SidebarStudent";
import { Div, Button, Text, Icon, Container } from "atomize";
import QuestionCards from "./QuestionCards";
import { useEffect, useState } from "react";
import axios from "axios";
// import "./GivePaper.css"

const GivePaper = () => {
	

	const [count, setCount] = useState(0);
	let itemList = [];

	const [result, setResult] = useState([]);

	useEffect(() => {
		getData();
		getCount();
	}, []);

	

	const getCount = async () => {
		let res = await axios.get("http://localhost:8000/api/student/givepaper")

		console.log(res.data)

		setCount(res.data)
	};

	const getData = async () => {
		let res =	 await axios.get("http://localhost:8000/api/student/getpapers");

		// Setting the data i our usestate.
		setResult(res.data.papers);


		
	};


	return (
		<Div d="flex" bg="#f7fafa">
			<SidebarStudent />
			<Container
				className="main-page"
				overflow="scroll"
				h="100vh"
				flexGrow="1"
				minW="85%">
				{result.map((item, index) => (
					<QuestionCards
						name={item.name}
						sub={item.subject}
						time={item.time}
						key={index}
					/>
				))}
			</Container>
		</Div>
	);
};

export default GivePaper;
