import { ThemeProvider, Div, Row, Col, Text, Container, Input, Button, Icon, } from "atomize";

const theme = {
  fontFamily: {
    primary: "Raleway",
  },
};

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div
        position="fixed"
        cursor="pointer"
        h="100vh"
        w="100vw"
        bgImg="https://cdn.discordapp.com/attachments/699704209355964439/993137807126175844/dynamic-wang-g-YsyUUwT9M-unsplash.jpg"
        bgSize="fit"
        bgPos="left"
      >
        <Text textSize="display1" textColor="success300" textAlign="center" fontFamily="Raleway">
          Welcome to your Dasboard, Admin.
        </Text>

      </Div>
    </ThemeProvider>
  );
};

export default Main;