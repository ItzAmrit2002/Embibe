import { ThemeProvider, Div, Row, Col, Text, Container, Input, Button, Icon, } from "atomize";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

const theme = {
  fontFamily: {
    primary: "Raleway",
  },
};

const Main = () => {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Div d="flex" >
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Div
        position="fixed"
        h="100vh"
        w="100vw"
        bgImg="https://cdn.discordapp.com/attachments/699704209355964439/993137807126175844/dynamic-wang-g-YsyUUwT9M-unsplash.jpg"
        bgSize="cover "
        bgPos="left"
      >
        
        <Text textSize="display1" textColor="success300" textAlign="center" fontFamily="Raleway">
          Welcome to your Dasboard, Admin.
        </Text>

      </Div>
      </Div>
    </ThemeProvider>
  );
};

export default Main;