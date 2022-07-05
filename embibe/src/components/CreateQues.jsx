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
import Card from "./cards/Card";

const theme = {
    fontFamily: {
        primary: "Raleway",
    },
};
const CreateQues = () => {
    return (
        <ThemeProvider theme={theme}>
            <Div
                position="fixed"
                h={{ xs: "auto", md: "100vh" }}
                bgImg="https://cdn.discordapp.com/attachments/699704209355964439/993137807126175844/dynamic-wang-g-YsyUUwT9M-unsplash.jpg"
                bgSize="cover"
                bgPos="center"
            >
                <Container d="flex" align="center" justify="center">
                    <Card />
                </Container>
            </Div>
        </ThemeProvider>
    );
}

export default CreateQues;
