import React from "react";
import { Div, Button, Text, Icon, Container } from "atomize";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const handleClick = () => {
		localStorage.removeItem("token_embibe");
		setAuth({});
		navigate("/login");
	}
	return (
		<Div flexDir="column"
			className="student-dashboard"
			minW="15rem"
			d='flex'
			justify="space-between"
			align="center"
			bg="#f7fafa"
			h="100vh"
			w="15%"
			shadow="4"
			textAlign="center">
			<Div>
				<Text textWeight="1000" textSize="heading" fontFamily='Montserrat' m={{ t: "3rem"}} textColor="#2b4641">
					Dashboard
				</Text>
				<Icon name="Minus" size="20px" m={{ b: "1.5rem"}}/>
				<Div
					textAlign="center"
					className="student-dashboard-links"
					p="0.5rem"
					w="13vw"
					//shadow="1"
					hoverShadow="2"
					bg="#f7fafa"
					m={{ b: "0.3rem" }}
					d="flex"
					align="center"
					//justify="space-evenly"
					hoverBg="#def3ee"
					rounded="xl">
					<Icon name="Edit" size="20px" m={{ r: "1.2rem", l: "0.5rem" }} color="#6ab5ab" />
					<Text textSize="subheader" textWeight='1000' fontFamily='Montserrat' textColor="#2b4641">
						Attempt a Paper
					</Text>
				</Div>
				<Div
					textAlign="center"
					className="student-dashboard-links"
					p="0.5rem"
					w="13vw"
					//shadow="1"
					hoverShadow="2"
					bg="#f7fafa"
					m={{ b: "0.3rem" }}
					d="flex"
					align="center"
					//justify="space-evenly"
					hoverBg="#def3ee"
					rounded="xl">
					<Icon name="Loading2" size="20px" m={{ r: "1.2rem", l: "0.5rem" }} color="#6ab5ab" />
					<Text textSize="subheader" textWeight='1000' fontFamily='Montserrat' textColor="#2b4641">
						View Statistics
					</Text>
				</Div>
			</Div>
			<Button
				prefix={
					<Icon name="Logout" size="30px" color="#6ab5ab" />
				}
				h="2.5rem"
				w="2.5rem"
				bg="#f7fafa"
				hoverBg="#def3ee"
				rounded="lg"
				m={{ r: "1.2rem", l: "0.5rem", b: "1rem" }}
				onClick={handleClick}
			>
			</Button>
		</Div >
	);
};

export default StudentDashboard;
