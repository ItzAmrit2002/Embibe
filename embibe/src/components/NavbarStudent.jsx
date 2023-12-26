import React from "react";
import "./StudentDashboard.css";
import { Div, Button, Text, Icon, Container } from "atomize";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SidebarStudent = () => {
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const handleClick = () => {
		localStorage.removeItem("token_embibe");
		setAuth({});
		navigate("/login");
	};
	return (
		<Div
			className="student-dashboard"
			minW="15rem"
			d="flex"
			justify="space-around"
			align="center"
			bg="#6DCE96"
			h="auto"
			w="100%"
			shadow="4"
			textAlign="center">
			<Div>
				<Text
					textWeight="1000"
					textSize="display2"
					fontFamily="Cedarville Cursive"
					m={{ x: "2rem", y: "1rem" }}
					textColor="#121212">
					Embibe
				</Text>
			</Div>
			<Div d="flex" align="center" justify="space-around">
				<Div
					onClick={() => navigate("/givepaper")}
					textAlign="center"
					align="center"
					hoverShadow="4"
					justify="space-between"
					w="auto"
					className="student-dashboard-links"
					cursor="pointer"
					bg="#6DCE96"
					p="0.5rem"
					rounded="xl">
					<Icon name="Edit" size="20px" color="#121212" />
					<Text
						textSize="subheader"
						textWeight="1000"
						fontFamily="Montserrat"
						textColor="#121212">
						Attempt a Paper
					</Text>
				</Div>
			</Div>
			<Div d="flex" align="center" justify="space-around">
				<Div
					onClick={() => navigate("/stats")}
					textAlign="center"
					align="center"
					hoverShadow="4"
					justify="space-between"
					w="auto"
					className="student-dashboard-links"
					cursor="pointer"
					bg="#6DCE96"
					// bg="#ffffff"
					p="0.5rem"
					rounded="xl"
					>
					<Icon name="Loading2" size="20px" color="#121212" />
					<Text
						textSize="subheader"
						textWeight="1000"
						fontFamily="Montserrat"
						className="scribble"
						textColor="#121212">
						View Stats
					</Text>
				</Div>
			</Div>
			<Div d="flex" align="center" justify="space-around">
				<Div
					onClick={() => navigate("/myprofile")}
					textAlign="center"
					align="center"
					hoverShadow="4"
					justify="space-between"
					w="auto"
					className="student-dashboard-links"
					cursor="pointer"
					bg="#6DCE96"
					p="0.5rem"
					rounded="xl">
					<Icon name="User" size="20px" color="#121212" />
					<Text
						textSize="subheader"
						textWeight="1000"
						fontFamily="Montserrat"
						textColor="#121212">
						My Profile
					</Text>
				</Div>
			</Div>
			<Div d="flex" justify="center" align="center">
				<Button
					prefix={<Icon name="Logout" size="40px" color="#121212" />}
					m={{ x: "1rem", y: "1.5rem" }}
					bg="#6DCE96"
					hoverShadow="4"
					rounded="md"
					onClick={handleClick}></Button>
			</Div>
		</Div>
	);
};

export default SidebarStudent;
