import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
// import green from "@material-ui/core/colors/green";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Lottie from "react-lottie";
import exams from "../assets/exams.json";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}>
			{"Copyright © "}
			<Link color="inherit" href="https://embibe.vercel.app/login">
				TestHub
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// const api = axios.create({
//     baseURL: 'https://localhost:3000/register'
// })

const theme = createTheme();

const Register = () => {
	const navigate = useNavigate();
	const defaultOptions = {
		loop: true,
		autoplay: true,
		// here is where we will declare lottie animation
		// "animation" is what we imported before animationData: animation,
		animationData: exams,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const [fname, setFirstName] = useState("");
	const [lname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const handleSubmit = (event) => {
	//     event.preventDefault();
	//     //const data = new FormData(event.currentTarget);
	//     // const fname = data.get('fname')
	//     // const lname = data.get('lname')
	//     // const email = data.get('email')
	//     // const password = data.get('password')
	//     axios.post('https://testhubbknd.onrender.com/api/user/register', {
	//         firstname: fname,
	//         secondname: lname,
	//         email: email,
	//         password: password})
	//         .then((res) => {
	//             console.log(res)
	//             if(res.status === 201)
	//             {
	//                 navigate('/login')
	//             }
	//         })
	//         .catch(err => console.log(err))
	// };

	const handleSubmit = (event) => {
		event.preventDefault();

		// Assuming you've already extracted form data into fname, lname, email, password

		toast.promise(
			axios.post("https://testhubbknd.onrender.com/api/user/register", {
				firstname: fname,
				secondname: lname,
				email: email,
				password: password,
			}),
			{
				pending: "Registering...",
				success: {
					render({ data }) {
						if (data.status === 201) {
							setTimeout(() => {
								navigate("/login");
							}, 1600);

							return "Registration successful, Please Login now";
						}
					},
					autoClose: 1400,
				},
				error: {
					render({ data }) {
						return "Registration failed, try again!";
					},
				},
			}
		);
	};

	const [width, setWidth] = useState(550);

	// useEffect(() => {
	//     if (window.innerWidth > 900 && window.innerWidth <= 1400) {
	//         setWidth(550)
	//     }
	//     if (window.innerWidth > 1400) {
	//         setWidth(750)
	//     }

	//     window.addEventListener("resize", () => {
	//         if (window.innerWidth < 900) {
	//             setWidth(0)
	//         }
	//         if (window.innerWidth > 900 && window.innerWidth <= 1400) {
	//             setWidth(550)
	//         }
	//         if (window.innerWidth > 1400) {
	//             setWidth(750)
	//         }
	//     });
	// }, []);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 900) {
				setWidth(0);
			}
			if (window.innerWidth > 900 && window.innerWidth <= 1400) {
				setWidth(550);
			}
			if (window.innerWidth > 1400) {
				setWidth(750);
			}
		};

		window.addEventListener("resize", handleResize);

		// Cleanup event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [window.innerWidth]);
	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" height="100vh" backgroundColor="#DCFBE9">
				<CssBaseline />
				<ToastContainer />
				<Grid
					item
					spacing={0}
					xs={false}
					sm={4}
					md={7}
					sx={
						{
							// backgroundImage: 'url(https://www.vidyalayaschoolsoftware.com/assets/images/call-action.svg)',
							// backgroundRepeat: 'no-repeat',
							// backgroundColor: (t) =>
							//   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
							// backgroundSize: 'cover',
							// backgroundPosition: 'center',
						}
					}>
					<Typography
						component="h1"
						variant="h4"
						sx={{
							mt: 2,
							mx: 3,
							color: "#51ce99",
							fontFamily: "Cedarville Cursive",
							// fontSize: 32,
							fontWeight: "bold",
							cursor: "pointer",
						}}>
						TestHub
					</Typography>
					<Lottie options={defaultOptions} height={width} width={width} />
				</Grid>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Avatar sx={{ m: 1, bgcolor: "#cdf7e4" }}>
							<LockOutlinedIcon style={{ color: "green" }} />
						</Avatar>
						<Typography
							component="h1"
							variant="h5"
							sx={{
								fontFamily: "Raleway",
							}}>
							Begin your journey!
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								style={{
									backgroundColor: "#cdf7e4",
								}}
								id="fname"
								label="First Name"
								name="fname"
								onChange={(e) => {
									setFirstName(e.target.value);
								}}
								autoComplete="fname"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								style={{
									backgroundColor: "#cdf7e4",
								}}
								id="lname"
								label="Last Name"
								name="lname"
								onChange={(e) => setLastName(e.target.value)}
								autoComplete="lname"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								style={{
									backgroundColor: "#cdf7e4",
								}}
								id="email"
								label="Email Address"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								style={{
									backgroundColor: "#cdf7e4",
								}}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<Button
								style={{
									backgroundColor: "#51ce97",
								}}
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}>
								Sign Up
							</Button>
							<Copyright sx={{ mt: 5 }} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Register;
