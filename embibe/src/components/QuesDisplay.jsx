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
	mid,
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
		// await axios
		// 	.post("https://testhubbknd.onrender.com/api/student/postanswer", {
		// 		pid: pid,
		// 		sid: sid,
		// 		qid: qid,
		// 		mid: mid,
		// 		checkA: isA,
		// 		checkB: isB,
		// 		checkC: isC,
		// 		checkD: isD,
		// 	})
		// 	.then((res) => {
		// 		if (res.status == 201) {
		// 			toast.success("Answer Submitted!", {
		// 				position: toast.POSITION.TOP_RIGHT,
		// 				autoClose: 1200
		// 			});
		// 			callback()
		// 		} else {
		// 			toast.error("Answer Submission Failed", {
		// 				position: toast.POSITION.TOP_RIGHT,
		// 			});
		// 		}
		// 		console.log(res);
		// 		setSubmitted(true);

		// 		// setId(res.data._id);
		// 		// setOpen(true);
		// 		// navigate('/addquestion')
		// 	})
		// 	.catch((err) =>{ 
		// 		toast.error("Answer Submission Failed", {
		// 			position: toast.POSITION.TOP_RIGHT
		// 		  })
		// 		  console.log("error")
		// 		console.log(err)
		// 	});
		toast.promise(
			axios.post("https://testhubbknd.onrender.com/api/student/postanswer", {
			  pid: pid,
			  sid: sid,
			  qid: qid,
			  mid: mid,
			  checkA: isA,
			  checkB: isB,
			  checkC: isC,
			  checkD: isD,
			}),
			{
			  pending: "Submitting answer...",
			  success: {
				render({data}){
				if (data.status === 201) {
					console.log(data);
				setSubmitted(true);
				callback();
				  return "Answer Submitted!"
				}
				// } else {
				//   toast.error("Answer Submission Failed", {
				// 	position: toast.POSITION.TOP_RIGHT,
				//   });
				// }
			},
			autoClose: 1500
				
		  
				// setId(res.data._id);
				// setOpen(true);
				// navigate('/addquestion')
			  },
			  error: {
				render({data})
				{
					console.error("error");
					  console.error(data);
					return "Answer Submission Failed!"
					  
				}
				
			  },
			}
		  );
			
		await axios.post('https://testhubbknd.onrender.com/api/tally/tallymarks', {
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
					bg="#CCF7E3"
					h="auto"
					w="auto"
					rounded="lg"
					textColor="#1C0F13"
					border="1px solid"
					borderColor="#6DCE96"
					m={{ t: "3rem", b: "3rem" }}>
						<ToastContainer/>
					<Div d="flex" justify="space-between" bg ="#6DCE96" align="center" w="100%" p="4%" rounded="lg">
						<Text
							textSize="heading"
							fontFamily="Poppins"
							textWeight="400"
							textColor="#1C0F13"
							m={{ l: "5%" }}>
							{slno}. {question_dsc}
						</Text>
						<Text
							textSize="subheader"
							fontFamily="Poppins"
							textWeight="700"
							textColor="#1C0F13"
							m={{ r: "5%" }}>
							({marks} marks)
						</Text>
					</Div>
					<Div m={{ x: "3%", t: "4vh" }} d="flex" align="center" border="1px dashed" borderColor="#6DCE96" rounded="md" p="0.5%">
						<Label align="center" textWeight="600">
							<Checkbox
								onChange={(e) => setIsA(e.target.checked)}
								checked={isA}
								inactiveColor="#6DCE96"
								activeColor="#2C666E"
								size="24px"
							/>
						</Label>
						<Text
							textSize="subheader"
							fontFamily="Poppins"
							textWeight="400"
							m={{ l: "1%" }}>
							{optionA}
						</Text>
					</Div>
					<Div m={{ x: "3%", t: "3vh" }} d="flex" align="center" border="1px dashed" borderColor="#6DCE96" rounded="md" p="0.5%">
						<Label align="center" textWeight="600">
							<Checkbox
								onChange={(e) => setIsB(e.target.checked)}
								checked={isB}
								inactiveColor="#6DCE96"
								activeColor="#2C666E"
								size="24px"
							/>
						</Label>
						<Text
							textSize="subheader"
							fontFamily="Poppins"
							textWeight="400"
							m={{ l: "1%" }}>
							{optionB}
						</Text>
					</Div>
					<Div m={{ x: "3%", t: "3vh" }} d="flex" align="center" border="1px dashed" borderColor="#6DCE96" rounded="md" p="0.5%">
						<Label align="center" textWeight="600">
							<Checkbox
								onChange={(e) => setIsC(e.target.checked)}
								checked={isC}
								inactiveColor="#6DCE96"
								activeColor="#2C666E"
								size="24px"
							/>
						</Label>
						<Text
							textSize="subheader"
							fontFamily="Poppins"
							textWeight="400"
							m={{ l: "1%" }}>
							{optionC}
						</Text>
					</Div>
					<Div m={{ x: "3%", t: "3vh" }} d="flex" align="center" border="1px dashed" borderColor="#6DCE96" rounded="md" p="0.5%">
						<Label align="center" textWeight="600">
							<Checkbox
								onChange={(e) => setIsD(e.target.checked)}
								checked={isD}
								inactiveColor="#6DCE96"
								activeColor="#2C666E"
								size="24px"
							/>
						</Label>
						<Text
							textSize="subheader"
							fontFamily="Poppins"
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
									color="#1C0F13"
									m={{ r: "0.5rem" }}
								/>
							}
							bg="#6DCE96"
							rounded="circle"
							p={{ r: "1.5rem", l: "1rem" }}
							shadow="3"
							m={{ y: "1.5rem" }}
							onClick={handlesubmit}
							textColor="#1C0F13"
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
							bg="#2c666e"
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
