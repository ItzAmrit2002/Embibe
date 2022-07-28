import React from 'react'
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
			flexDir="column"
			className="student-dashboard"
			minW="15rem"
			d="flex"
			justify="space-between"
			// align="center"
			bg="#323232"
			h="100vh"
			w="15%"
			shadow="4"
			textAlign="center">
			<Div>
				<Text
					textWeight="1000"
					textSize="heading"
					fontFamily="Montserrat"
					m={{ t: "3rem" }}
					textColor="#ffffff">
					Dashboard
				</Text>
				<Icon name="Minus" size="20px" m={{ b: "1.5rem" }} color="#ffffff" />
				<Div d="flex" align="center" justify="space-between">
					<Div className="hover-bar" h="15px" w="4px" bg="#4abfa9" m={{ l: "0.1rem" }} rounded="circle" />
					<Div
						onClick={() => navigate("/givepaper")}
						textAlign="center"
						className="student-dashboard-links"
						p="0.5rem"
						w="13vw"
						//shadow="1"
						hoverShadow="2"
						bg="#323232"
						m={{ b: "0.3rem", r: "0.5rem" }}
						cursor="pointer"
						d="flex"
						align="center"
						//justify="space-evenly"
						hoverBg="rgba(33, 33, 33,0.6)"
						rounded="xl">
						<Icon
							name="Edit"
							size="20px"
							m={{ r: "1.2rem" }}
							color="#6ab5ab"
						/>
						<Text
							textSize="subheader"
							textWeight="1000"
							fontFamily="Montserrat"
							textColor="#6ad1bf">
							Attempt a Paper
						</Text>
					</Div>
				</Div>
				<Div d="flex" align="center" justify="space-between">
					<Div className="hover-bar" h="15px" w="4px" bg="#4abfa9" m={{ l: "0.1rem" }} rounded="circle" />
					<Div
						textAlign="center"
						className="student-dashboard-links"
						p="0.5rem"
						w="13vw"
						//shadow="1"
						hoverShadow="2"
						bg="#323232"
						m={{ b: "0.3rem", r: "0.5rem" }}
						d="flex"
						cursor="pointer"
						align="center"
						//justify="space-evenly"
						hoverBg="rgba(33, 33, 33,0.6)"
						rounded="xl">
						<Icon
							name="Loading2"
							size="20px"
							m={{ r: "1.2rem" }}
							color="#6ab5ab"
						/>
						<Text
							textSize="subheader"
							textWeight="1000"
							fontFamily="Montserrat"
							textColor="#6ad1bf">
							View Statistics
						</Text>
					</Div>
				</Div>
				<Div d="flex" align="center" justify="space-between">
					<Div className="hover-bar" h="15px" w="4px" bg="#4abfa9" m={{ l: "0.1rem" }} rounded="circle" />
					<Div
						onClick={() => navigate("/myprofile")}
						textAlign="center"
						className="student-dashboard-links"
						p="0.5rem"
						w="13vw"
						//shadow="1"
						hoverShadow="2"
						bg="#323232"
						m={{ b: "0.3rem", r: "0.5rem" }}
						d="flex"
						cursor="pointer"
						align="center"
						//justify="space-evenly"
						hoverBg="rgba(33, 33, 33,0.6)"
						rounded="xl">
						<Icon
							name="User"
							size="20px"
							m={{ r: "1.2rem" }}
							color="#6ab5ab"
						/>
						<Text
							textSize="subheader"
							textWeight="1000"
							fontFamily="Montserrat"
							textColor="#6ad1bf">
							My Profile
						</Text>
					</Div>
				</Div>
			</Div>
			<Div
				d="flex"
				justify="center"
				align="center">
				<Button
					prefix={<Icon name="Logout" size="30px" color="#6ab5ab" />}
					h="2.5rem"
					w="2.5rem"
					bg="#323232"
					hoverBg="rgba(33, 33, 33,0.6)"
					rounded="lg"
					m={{ r: "1.2rem", l: "0.5rem", b: "1rem" }}
					onClick={handleClick}>
				</Button>
			</Div>
		</Div>
	);
}

export default SidebarStudent