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
	Checkbox,
	Label,
	Textarea,
} from "atomize";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const theme = {
	fontFamily: {
		primary: "Raleway",
	},
};

const Card = ({count}) => {

    const { id } = useParams();
    const navigate = useNavigate();
	const cid = id+count;
	const shuffled = cid
	console.log(shuffled)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
      .post("http://localhost:8000/api/paper/addquestion", {
		uid : shuffled,
        paperId: id,
        question_dsc: question,
        ansA: ansa,
        ansB: ansb,
        ansC: ansc,
        ansD: ansd,
        optionA: opta,
        optionB: optb,
        optionC: optc,
        optionD: optd
    })
      .then((res) => {
       if(res.status == 201)
	   {
		toast.success("Question Submitted!", {
			position: toast.POSITION.TOP_RIGHT
		  })
	   }
	   else{
		toast.error("Question Submission Failed", {
			position: toast.POSITION.TOP_RIGHT
		  })
	   }
        console.log(res)
      })
      .catch((err) =>{ 
		toast.error("Question Submission Failed", {
			position: toast.POSITION.TOP_RIGHT
		  })
		  console.log("error")
		console.log(err)
	});

    }

	const [opta, setOpta] = useState(false);
	const [optb, setOptb] = useState(false);
	const [optc, setOptc] = useState(false);
	const [optd, setOptd] = useState(false);

	const [ansa, setAnsa] = useState("");
	const [ansb, setAnsb] = useState("");
	const [ansc, setAnsc] = useState("");
	const [ansd, setAnsd] = useState("");

	const [question, setQuestion] = useState("");
	return (
		<ThemeProvider theme={theme}>
			<Div
				bg="success100"
				d="flex"
				align="center"
				m="2rem"
				rounded="md"
				shadow="2"
				hoverShadow="5">
					<ToastContainer/>
				<Text
					tag="h1"
					textSize="title"
					fontFamily="Raleway"
					m={{ t: "1rem", x: "1rem" }}>
					{count}.
					<Textarea
						placeholder="Basic Input"
						w={{ xs: "auto", md: "35vw" }}
						onChange={(e) => {
							setQuestion(e.target.value);
							console.log(question);
						}}
					/>			
					<Div m="2rem" rounded="lg">
						<Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
							<Checkbox
								onChange={(e) => setOpta(e.target.checked)}
								checked={opta}
								inactiveColor="info400"
								activeColor="info700"
								size="24px"
								m="0.5rem"
							/>
							<Text textSize="subheader" fontFamily="Raleway">
								<Input
									placeholder="Medium"
									h="2.5rem"
									onChange={(e) => {
										setAnsa(e.target.value);
										console.log(ansa);
									}}
								/>
							</Text>
						</Label>
					</Div>
					<Div m="2rem" rounded="lg">
						<Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
							<Checkbox
								onChange={(e) => setOptb(e.target.checked)}
								checked={optb}
								inactiveColor="info400"
								activeColor="info700"
								size="24px"
								m="0.5rem"
							/>
							<Text textSize="subheader" fontFamily="Raleway">
								<Input
									placeholder="Medium"
									h="2.5rem"
									onChange={(e) => {
										setAnsb(e.target.value);
										console.log(ansb);
									}}
								/>
							</Text>
						</Label>
					</Div>
					<Div m="2rem" rounded="lg">
						<Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
							<Checkbox
								onChange={(e) => setOptc(e.target.checked)}
								checked={optc}
								inactiveColor="info400"
								activeColor="info700"
								size="24px"
								m="0.5rem"
							/>
							<Text textSize="subheader" fontFamily="Raleway">
								<Input
									placeholder="Medium"
									h="2.5rem"
									onChange={(e) => {
										setAnsc(e.target.value);
										console.log(ansc);
									}}
								/>
							</Text>
						</Label>
					</Div>
					<Div m="2rem" rounded="lg">
						<Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
							<Checkbox
								onChange={(e) => setOptd(e.target.checked)}
								checked={optd}
								inactiveColor="info400"
								activeColor="info700"
								size="24px"
								m="0.5rem"
							/>
							<Text textSize="subheader" fontFamily="Raleway">
								<Input
									placeholder="Medium"
									h="2.5rem"
									onChange={(e) => {
										setAnsd(e.target.value);
										console.log(ansd);
									}}
								/>
							</Text>
						</Label>
                        <Div d="flex" align="center" justify="center">
						<Button
							h="2.5rem"
							w="2.5rem"
							bg="success700"
							hoverBg="success600"
							rounded="circle"
							m={{ y: "1rem" }}
							shadow="2"
							hoverShadow="4">
							<Icon name="Checked" size="20px" color="white" onClick={handleSubmit}/>
						</Button>
                        </Div>
					</Div>
				</Text>
			</Div>
		</ThemeProvider>
	);
};

export default Card;
