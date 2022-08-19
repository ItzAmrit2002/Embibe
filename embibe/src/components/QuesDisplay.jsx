import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Routes, Route, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const QuesDisplay = ({
	question_dsc,
	marks,
	slno,
	optionA,
	optionB,
	optionC,
	optionD,
	callback,
	qid,
}) => {
	const { auth } = useAuth();
	const { pid, sid } = useParams();
	const [isA, setIsA] = useState(false);
	const [isB, setIsB] = useState(false);
	const [isC, setIsC] = useState(false);
	const [isD, setIsD] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handlesubmit = async() => {
		await axios
			.post("http://localhost:8000/api/student/postanswer", {
				pid: pid,
				sid: sid,
				qid: qid,
				checkA: isA,
				checkB: isB,
				checkC: isC,
				checkD: isD,
			})
			.then((res) => {
				if (res.status == 201) {
					toast.success("Answer Submitted!", {
						position: toast.POSITION.TOP_RIGHT,
					});
					callback()
				} else {
					toast.error("Answer Submission Failed", {
						position: toast.POSITION.TOP_RIGHT,
					});
				}
				console.log(res);
				setSubmitted(true);

				// setId(res.data._id);
				// setOpen(true);
				// navigate('/addquestion')
			})
			.catch((err) =>{ 
				toast.error("Answer Submission Failed", {
					position: toast.POSITION.TOP_RIGHT
				  })
				  console.log("error")
				console.log(err)
			});
			
		await axios.post('http://localhost:8000/api/tally/tallymarks', {
          paper_id: pid,
          user_id: sid,
		  question_id : qid,
		  checkA: isA,
		  checkB: isB,
		  checkC: isC,
		  checkD: isD,
		})
          .then((res) => {
              console.log(res)
              
          })
          .catch(err =>{
           
             console.log(err)
          })
	};
	return (
		<Div>
			<Container>
				<Div
					d="flex"
					flexDir="column"
					shadow="2"
					hoverShadow="3"
					bg="#f4decb"
					h="auto"
					w="auto"
					rounded="lg"
					textColor="#121212"
					border="1px solid"
					borderColor="#94618e"
					m={{ t: "3rem", b: "3rem" }}>
						<ToastContainer/>
					<Div d="flex" justify="space-between" bg ="#49274a" align="center" w="100%" p="4%" rounded="lg">
						<Text
							textSize="heading"
							fontFamily="Itim"
							textWeight="400"
							textColor="#eeeeee"
							m={{ l: "5%" }}>
							{slno}. {question_dsc}
						</Text>
						<Text
							textSize="subheader"
							fontFamily="Itim"
							textWeight="400"
							textColor="#eeeeee"
							m={{ r: "5%" }}>
							({marks} marks)
						</Text>
					</Div>
					<Div m={{ x: "3%", t: "4vh" }} d="flex" align="center" border="1px dashed" borderColor="#B270A2" rounded="md" p="0.5%">
						<Label align="center" textWeight="600">
							<Checkbox
								onChange={(e) => setIsA(e.target.checked)}
								checked={isA}
								inactiveColor="#b270a2"
								activeColor="#94618e"
								size="24px"
							/>
						</Label>
						<Text
							textSize="subheader"
							fontFamily="Itim"
							textWeight="400"
							m={{ l: "1%" }}>
							{optionA}
						</Text>
					</Div>
					<Div m={{ x: "3%", t: "3vh" }} d="flex" align="center" border="1px dashed" borderColor="#B270A2" rounded="md" p="0.5%">
						<Label align="center" textWeight="600">
							<Checkbox
								onChange={(e) => setIsB(e.target.checked)}
								checked={isB}
								inactiveColor="#b270a2"
								activeColor="#94618e"
								size="24px"
							/>
						</Label>
						<Text
							textSize="subheader"
							fontFamily="Itim"
							textWeight="400"
							m={{ l: "1%" }}>
							{optionB}
						</Text>
					</Div>
					<Div m={{ x: "3%", t: "3vh" }} d="flex" align="center" border="1px dashed" borderColor="#B270A2" rounded="md" p="0.5%">
						<Label align="center" textWeight="600">
							<Checkbox
								onChange={(e) => setIsC(e.target.checked)}
								checked={isC}
								inactiveColor="#b270a2"
								activeColor="#94618e"
								size="24px"
							/>
						</Label>
						<Text
							textSize="subheader"
							fontFamily="Itim"
							textWeight="400"
							m={{ l: "1%" }}>
							{optionC}
						</Text>
					</Div>
					<Div m={{ x: "3%", t: "3vh" }} d="flex" align="center" border="1px dashed" borderColor="#B270A2" rounded="md" p="0.5%">
						<Label align="center" textWeight="600">
							<Checkbox
								onChange={(e) => setIsD(e.target.checked)}
								checked={isD}
								inactiveColor="#b270a2"
								activeColor="#94618e"
								size="24px"
							/>
						</Label>
						<Text
							textSize="subheader"
							fontFamily="Itim"
							textWeight="400"
							m={{ l: "1%" }}>
							{optionD}
						</Text>
					</Div>
					<Div
						d="flex"
						flexDir="colum"
						align="center"
						textAlign="center"
						justify="center">
					{ !submitted &&	<Button
							prefix={
								<Icon
									name="Checked"
									size="16px"
									color="white"
									m={{ r: "0.5rem" }}
								/>
							}
							bg="#B270A2"
							hoverBg="#49274a"
							rounded="circle"
							p={{ r: "1.5rem", l: "1rem" }}
							shadow="3"
							m={{ y: "1.5rem" }}
							onClick={handlesubmit}
							hoverShadow="4">
							Submit Answer
						</Button>}
						{ submitted &&	<Button
							prefix={
								<Icon
									name="Checked"
									size="16px"
									color="white"
									m={{ r: "0.5rem" }}
								/>
							}
							bg="#49274a"
							rounded="circle"
							p={{ r: "1.5rem", l: "1rem" }}
							shadow="3"
							m={{ y: "1.5rem" }}
							hoverShadow="4">
							Answer Submitted
						</Button>}
					</Div>
				</Div>
			</Container>
		</Div>
	);
};

export default QuesDisplay;
