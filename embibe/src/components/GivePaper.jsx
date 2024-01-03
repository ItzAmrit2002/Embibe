import React from "react";
import SidebarStudent from "./NavbarStudent";
import { Div, Button, Text, Icon, Container, Row, Col } from "atomize";
import QuestionCards from "./QuestionCards";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./GivePaper.css"

const GivePaper = () => {

	const {auth} = useAuth();

	const [count, setCount] = useState(0);
	const [marks, setMarks] = useState(0);
	const [nq, setNq] = useState(0);
	const [result, setResult] = useState([]);
	const [isLoading, setLoading] = useState(true)


	useEffect(() => {
		getData();
		getCount();
	}, []);



	const getCount = async () => {
		let res = await axios.get("https://testhubbknd.onrender.com/api/student/givepaper")
		console.log(res.data)
		setCount(res.data)
	};

	// const getData = async () => {
	// 	let res = await axios.get("https://testhubbknd.onrender.com/api/student/getpapers");
	// 	console.log(res.data)
	// 	setResult(res.data.papers);
	// 	setMarks(res.data.rep);
	// 	setNq(res.data.rex);

	// };
	const getData = async () => {
		try {
		  toast.promise(
			axios.get("https://testhubbknd.onrender.com/api/student/getpapers"),
			{
			  pending: "Fetching papers...",
			  success: {
				render({data}){
					console.log(data.data);
					setResult(data.data.papers);
					setMarks(data.data.rep);
					setNq(data.data.rex);
					setLoading(false)
					return `Welcome ${auth.Firstname}`;
				},
				autoClose: 1700
			  },
			  error: {
				render({data})
				{
				console.error(data.response.data.message);
				return "Failed to fetch papers. Please try again.";
				}
			  },
			}
		  );
		} catch (err) {
		  console.error(err);
		  toast.error("An unexpected error occurred.");
		}
	  };


	return (
		<Div d="flex" bg="#DCFBE9" flexDir="column" h="100%" minH="100vh">
			<SidebarStudent />
			{/* <div className="loader">Loading...</div> */}

			<Container
				className="main-page"
				h="100vh"
				flexGrow="1"
				bg = "#DCFBE9"
				minW="85%"
			>
				<ToastContainer/>
			{isLoading ? <Div d="flex" bg="#CCF7E3" w="100%" h="80%" align="center" textAlign="center" justify="center" flexDir="column">
            <Text
						m={{ t: "2%" }}
						fontFamily="Montserrat"
						textWeight="700"
						textSize="display3"
						textColor="#1C0F13">
						Loading
					</Text>
            <Icon name="Loading2" size="50px" color="#121212" />
            </Div> :<> <Div textAlign="center"
					align="center"
					justify="center">
					<Text
						m={{ t: "2%" }}
						fontFamily="Montserrat"
						textWeight="700"
						textSize="display3"
						textColor="#1C0F13">
						Papers
					</Text>
					<Text
						fontFamily="Montserrat"
						textWeight="700"
						textSize="display1"
						textColor="#1C0F13">
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

				</Row></>}
			</Container>
		</Div >
	);
};

export default GivePaper;
