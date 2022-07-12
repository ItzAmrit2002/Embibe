import React from "react";
import SidebarStudent from "./SidebarStudent";
import { Div, Button, Text, Icon, Container } from "atomize";
import QuestionCards from "./QuestionCards";
import { useEffect, useState } from "react";
import axios from "axios";
// import "./GivePaper.css"


const GivePaper = () => {
	const [components, setComponents] = useState([]);
	// function addCard() {
	// 	 setComponents([...components, <QuestionCards/>]);
	// }

	const [count, setCount] = useState(0);
	let itemList = [];

	const [result, setResult] = useState([]);
	useEffect(()=> {
		getData()
		getCount()

	}, [])
	


	const getCount = async() => {
	 axios.get("http://localhost:8000/api/student/givepaper").then((res) => {
			console.log(res.data);
			setCount(res.data);
			console.log("count", count)

		});
	
		
	}
	const getData = async() => {
		// 	 await axios.get("http://localhost:8000/api/student/getpapers").then((res) => {
		// 		result = res.data;
		// 		setComponents(result);
		// 		console.log("result",result)
		// })

		// return result;
		// .then((res) => {
		// 	setComponents(res.data.papers);	
		// console.log("res", res)
			
		// })
		// console.log("status", data)
		// return data;


		await fetch("http://localhost:8000/api/student/getpapers").then((res) => res.json()).then((data) => {
			
			console.log("data", data)
			
			setResult( data.papers);
			console.log("result->",result)
		

		})
		
	}

	// console.log("data1", result);
	// setComponents(result);
	// console.log("components", components);
	// console.log("count", count)
	// console.log("data", data)
	// console.log("components", components)
	
// setTimeout(() => {
// 	console.log(result)
// }, 4000);
for (let i = 0; i < count; i++) {
	const name = result[i].name;
	const time = result[i].time;
	const subject = result[i].subject;
	// const marks = result[count-i-1].marks;
	// const nq = result[count-i-1].nq;

	// console.log(name)
	itemList.push(<QuestionCards name={name} time={time} sub={subject}/>)
}
console.log("itemlist", itemList)
// console.log(result)
	return (
		<Div d="flex" bg="#f7fafa">
			<SidebarStudent />
			<Container
				className="main-page"
				overflow="scroll"
				h="100vh"
				flexGrow="1"
				minW="85%">
				{/* <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/> */}
				{itemList}
			</Container>
		</Div>
	);
};

export default GivePaper;
