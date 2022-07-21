import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import QuesDisplay from "./QuesDisplay";

const QuestionPaper = () => {
	const [begtime, setBegtime] = useState(new Date());
	const [time, setTime] = useState(() => {
		const teme = new Date()
		return teme
	});
	useEffect(() => {
		setTime(new Date() - begtime)
	}, [time]);
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
					Paper Name
				</Text>
				<Text
					tag="h1"
					textSize="display1"
					fontFamily="Montserrat"
					m={{ r: "8%" }}>
					Time remaining: {120 - Math.round(time / 1000 / 60)} minutes.
				</Text>
			</Div>
			<QuesDisplay />
			<QuesDisplay />
			<QuesDisplay />
			<QuesDisplay />
		</Div>
	);
};

export default QuestionPaper;
