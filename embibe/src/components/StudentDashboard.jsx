import React from "react";
import { Div, Button, Text, Icon } from "atomize";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token_embibe");
    setAuth({});
    navigate("/login");
  }
	return (
		<Div d="flex">
			<Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
				This is h1 of display1 size
			</Text>
			<Button
				h="2.5rem"
				w="2.5rem"
				bg="danger700"
				hoverBg="danger600"
				rounded="circle"
				m={{ r: "1rem" }}
				shadow="2"
				hoverShadow="4"
        onClick={handleClick}
        >
				<Icon name="DeleteSolid" size="20px" color="white" />
			</Button>
		</Div>
	);
};

export default StudentDashboard;
