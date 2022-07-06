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
	return (
		<ThemeProvider theme={theme}>
			<Div
				position="absolute"
				h={{ xs: "auto", md: "100vh" }}
				bg="#0b1b18"
				hoverBg="#0b1b18"
				// bgImg="https://cdn.discordapp.com/attachments/699704209355964439/993137807126175844/dynamic-wang-g-YsyUUwT9M-unsplash.jpg"
				// bgSize="cover"
				// bgPos="center"
			>
                
				<Container d="flex" align="center" justify="center">
					<Card />
				</Container>
                </Div>
		</ThemeProvider>
	);
};

export default CreateQues;
