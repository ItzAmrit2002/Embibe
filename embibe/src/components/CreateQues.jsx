import {
	ThemeProvider,
	Div,
	Row,
	Col,
	Text,
	Container,
	Input,
	Button,
	Icon,
} from "atomize";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./cards/Card";

const theme = {
	fontFamily: {
		primary: "Raleway",
	},
};
//0b1b18
const CreateQues = () => {
	const { id } = useParams();
	console.log(id);
	const [count, setCount] = useState(1);
	const [components, setComponents] = useState([]);
	function addCard() {
		setCount(count + 1);
		setComponents([...components, <Card count={count}/>])
	}
	return (
		<ThemeProvider theme={theme}>
			<Div
				position="absolute"
				minH="100vh"
				bg="#0b1b18"
				hoverBg="#0b1b18"
			// bgImg="https://cdn.discordapp.com/attachments/699704209355964439/993137807126175844/dynamic-wang-g-YsyUUwT9M-unsplash.jpg"
			// bgSize="cover"
			// bgPos="center"
			>

				<Container d="flex" align="center" justify="center" flexDir="column">
					{components.map((item, i) => (item))}
					<Button
						prefix={
							<Icon
								name="Plus"
								size="16px"
								color="white"
								m={{ r: "0.5rem" }}
							/>
						}
						m={{t: "2rem"}}
						bg="warning700"
						hoverBg="warning800"
						rounded="circle"
						p={{ r: "1.5rem", l: "1rem" }}
						shadow="3"
						hoverShadow="4"
						onClick={addCard}
					>
						Add Question
					</Button>
				</Container>
			</Div>
		</ThemeProvider>
	);
};

export default CreateQues;
