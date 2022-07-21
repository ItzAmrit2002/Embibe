import React from "react";
import SidebarStudent from "./SidebarStudent";
import { Div, Button, Text, Icon, Container } from "atomize";
import QuestionCards from "./QuestionCards";
import { useEffect, useState } from "react";
import axios from "axios";
// import "./GivePaper.css"

const GivePaper = () => {
	

	const [count, setCount] = useState(0);
	const [marks, setMarks] = useState(0);
	const [nq, setNq] = useState(0);
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
		console.log(res.data)
		setResult(res.data.papers);
		setMarks(res.data.rep);
		setNq(res.data.rex);
		
	};


	return (
		<Div d="flex" bg="#f2f9f9">
			<SidebarStudent />
			{/* <div className="loader">Loading...</div> */}
			
			<Container
				className="main-page"
				overflow="scroll"
				h="100vh"
				flexGrow="1"
				minW="85%"
				>
					
				{result.map((item, index) =>{ 
					const mark = marks[index] ? marks[index].total : 0;
					const nqi = nq[index] ? nq[index].n : 0;
					return (<QuestionCards
						name={item.name}
						sub={item.subject}
						time={item.time}
						marks={mark}
						id={item._id}
						nq={nqi}
						key={index}
					/>)
				})}
			</Container>
		</Div>
	);
};

export default GivePaper;
