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
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios";
import Button1 from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { borderColor } from "@mui/system";
const theme = {
	fontFamily: {
		primary: "Raleway",
	},
};
const CreatePaper = () => {
	const [name, setName] = useState("");
	const [time, setTime] = useState(0);
	const [subject, setSubject] = useState("");
	const [id, setId] = useState(0);
	const [width, setWidth] = useState(window.innerHeight);
	const [open, setOpen] = useState(false)
	const navigate = useNavigate();
	useEffect(() => {
		window.addEventListener("resize", () => {
			setWidth(window.innerHeight);
		});
	}, []);
	const handleSubmit = (event) => {
		// event.preventDefault();
		// const data = new FormData(event.currentTarget);

		axios
			.post("http://testhubbknd.onrender.com/api/paper/createpaper", {
				name: name,
				time: time,
				subject: subject,
			})
			.then((res) => {
				console.log(res);
				setId(res.data._id);
				setOpen(true);
				// navigate('/addquestion')
			})
			.catch((err) => console.log(err));
	};

	return (
		<ThemeProvider theme={theme}>
			{/* <Div position="fixed" h={{ xs: 'auto', md: '100vh' }}>
			 <Lottie options={defaultOptions} height={width} width={width} /> 

			</Div> */}
			<Div
				position="fixed"
				h={{ xs: "auto", md: "100vh" }}
				bgImg="https://cdn.discordapp.com/attachments/699704209355964439/993137807126175844/dynamic-wang-g-YsyUUwT9M-unsplash.jpg"
				bgSize="cover"
				// bgRepeat="no-repeat"
				bgPos="center"
			/>

			<Container d="flex" align="center" justify="center">
				<Row
					align="center"
					justify="center"
					flexDir="column"
					shadow="4"
					rounded="lg"
					h="30rem"
					pos="fixed"
					top="20%"
					flexGrow="1"
					bg="success100">
					<Col
						sm="12"
						md="6"
						align="center"
						justify="center"
						flexDir="column"
						w="30rem">
						<Div
							borderRadius="10px"
							p="20px"
							textAlign="center"
							d="flex"
							flexDir="column">
							<Text
								mb="20px"
								fontSize="64px"
								textSize="heading"
								textWeight="700"
								fontFamily="Raleway"
								m={{ t: "1rem", b: "3rem" }}>
								Create a Paper
							</Text>
							<Input
								placeholder="Name of the Paper"
								h="3.5rem"
								m={{ b: "2rem" }}
								onChange={(e) => setName(e.target.value)}
							/>
							<Input
								type="number"
								placeholder="Time (in min)"
								h="3.5rem"
								m={{ b: "2rem" }}
								onChange={(e) => setTime(e.target.value)}
							/>
							<Input
								placeholder="Subject"
								h="3.5rem"
								m={{ b: "2rem" }}
								onChange={(e) => setSubject(e.target.value)}
							/>
							{/* {id != 0 && (
								<Text
									textSize="title"
									textAlign="center"
									textColor="danger700"
									m={{ b: "1rem" }}>
									Your paper ID is : {id}
								</Text>
							)} */}
							<Div d="flex" align="center" justify="center">
								<Button
									onClick={handleSubmit}
									suffix={
										<Icon
											name="LongRight"
											size="16px"
											color="black"
											m={{ l: "1rem" }}
										/>
									}
									shadow="3"
									hoverShadow="4"
									bg="success700"
									textAlign="center"
									textColor="black"
									textWeight="700"
									w="10rem"
									m={{ r: "0.5rem" }}>
									Create
								</Button>
								<Modal
									open={open}
									onClose={() => setOpen(false)}
									aria-labelledby="modal-modal-title"
									aria-describedby="modal-modal-description">
									<Box position="absolute" left="40%" top="40%" sx={{ color: 'white', p:2.5, borderRadius: 2,border: 1 ,borderColor: 'black' }}>
										<Typography
											id="modal-modal-title"
											variant="h6"
											component="h2"
											sx={{m:0.5}}
											>
											Your Paper Id is:
										</Typography>
										<Typography id="modal-modal-description" sx={{my:2}}>
											{id}
										</Typography>
										<Button1 onClick={() => setOpen(false)} variant="outlined" sx={{ color: "black" ,borderColor: "black"}}>Close</Button1>
									</Box>
								</Modal>
							</Div>
						</Div>
					</Col>
				</Row>
			</Container>
		</ThemeProvider>
	);
};
export default CreatePaper;
