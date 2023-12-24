import React from "react";
import SidebarStudent from "./NavbarStudent";
import { Div, Button, Text, Icon, Container, Row, Col } from "atomize";
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
		let res = await axios.get("https://embibe-backend.vercel.app/api/student/givepaper")
		console.log(res.data)
		setCount(res.data)
	};

	const getData = async () => {
		let res = await axios.get("https://embibe-backend.vercel.app/api/student/getpapers");
		console.log(res.data)
		setResult(res.data.papers);
		setMarks(res.data.rep);
		setNq(res.data.rex);

	};


	return (
		<Div d="flex" bg="#FCE2DB" flexDir="column">
			<SidebarStudent />
			{/* <div className="loader">Loading...</div> */}

			<Container
				className="main-page"
				h="100vh"
				flexGrow="1"
				minW="85%"
			>
				<Div textAlign="center"
					align="center"
					justify="center">
					<Text
						m={{ t: "2%" }}
						fontFamily="Montserrat"
						textWeight="700"
						textSize="display3"
						textColor="#121212">
						Papers
					</Text>
					<Text
						fontFamily="Montserrat"
						textWeight="700"
						textSize="display1"
						textColor="#121212">
						___
					</Text>
				</Div>
				<Row>

					{result.map((item, index) => {
						const mark = marks[index] ? marks[index].total : 0;
						const nqi = nq[index] ? nq[index].n : 0;
						return (
							<Col key={index}>
								<QuestionCards
									name={item.name}
									sub={item.subject}
									time={item.time}
									marks={mark}
									id={item._id}
									nq={nqi}
									
									
								/>
							</Col>
						)
					})}

				</Row>
			</Container>
		</Div >
	);
};

export default GivePaper;
