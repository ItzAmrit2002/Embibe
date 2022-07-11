import React from 'react'
import SidebarStudent from './SidebarStudent'
import { Div, Button, Text, Icon, Container } from "atomize";
import QuestionCards from './QuestionCards';
// import "./GivePaper.css"
const GivePaper = () => {
  return (
    <Div d="flex" bg="#f7fafa">
      <SidebarStudent />
      <Container className="main-page" overflow="scroll" h="100vh" flexGrow="1" minW="85%">
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
        <QuestionCards/>
      </Container>
    </Div>
  )
}

export default GivePaper