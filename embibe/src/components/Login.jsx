import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
// import green from "@material-ui/core/colors/green";
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '@mui/material/Grid';
import Lottie from "react-lottie";
import exams from '../assets/exams.json'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
// axios.defaults.withCredentials = true;

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://embibe.vercel.app/login">
          TestHub
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();


const Login = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     if(email === 'Admin' && password === 'Admin'){
    //         setAuth({admin: 'Admin'});
    //         localStorage.setItem('token_embibe', 'Admin');
    //         navigate('/admin');
    //     }
    //     else{
    //     axios.post('https://testhubbknd.onrender.com/api/user/login', {
    //       email: email,
    //       password: password})
    //       .then((res) => {
    //           console.log(res)
    //           if(res.status === 200)
    //           {
    //             const Firstname = res.data.Firstname;
    //             const Secondname = res.data.Secondname;
    //             const token = res.data.token;
    //             const email = res.data.email;
    //             const id = res.data._id
    //               setAuth({Firstname, Secondname, token, email, id});
    //               localStorage.setItem('token_embibe', token);
    //               navigate('/givepaper')
    //           }
    //       })
    //       .catch(err =>{
    //         toast.error(err.response.data, {
    //           position: toast.POSITION.TOP_RIGHT
    //         })
    //          console.log(err)
    //       })
    //     }
    //   };

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
    
      if (email === "Admin" && password === "Admin") {
        setAuth({ admin: "Admin" });
        localStorage.setItem("token_embibe", "Admin");
        navigate("/admin");
      } else {
        toast.promise(
          axios.post("https://testhubbknd.onrender.com/api/user/login", {
            email: email,
            password: password,
          }),
          {
            pending: "Logging in...",
            success: {
              render({data}){
              if (data.status === 200) {
                const { Firstname, Secondname, token, email, _id: id } = data.data;
                setAuth({ Firstname, Secondname, token, email, id });
                localStorage.setItem("token_embibe", token);
                setTimeout(() => {
                  navigate("/givepaper");
                }, 1500);
                return "Login successful!";
                
                
              }
              
              },
              autoClose: 1300
            },
            error: {
              render({data}){
                
              return `Wrong email or password`
            },
            },
          }
        );
      }
    };
    
      const [width, setWidth] = useState(550)

      useEffect(() => {
        if(localStorage.getItem('token_embibe')){
          const token1 = localStorage.getItem('token_embibe');
          if(token1 === 'Admin'){
            setAuth({admin: 'Admin'});
            navigate('/admin');
          }
          else{
          const config = {
            headers: {
              Authorization: `Bearer ${token1}`,
            },
          }
          axios.get('https://testhubbknd.onrender.com/api/user/getuser', config).then(res => {
            if(res.status === 200)
            {
              console.log("persistent login possible");
              // setAuth
              console.log(res)
                const Firstname = res.data.Firstname;
                const Secondname = res.data.Secondname;
                const email = res.data.email;
                const id = res.data._id
                setAuth({Firstname, Secondname, token1, email, id});
                navigate('/givepaper', {replace: true})
            }
            
          })
        }
        }
        if(window.innerWidth > 900 && window.innerWidth <= 1400) 
        {
            setWidth(550)
        }
        if(window.innerWidth > 1400)
        {
          setWidth(750)
        }

        // window.addEventListener("resize", () => {
        // if(window.innerWidth < 900)
        // {
        //     setWidth(0)
        // }
        // if(window.innerWidth > 900 && window.innerWidth <= 1400)
        // {
        //     setWidth(550)
        // }
        // if(window.innerWidth > 1400)
        // {
        //   setWidth(750)
        // }
        //   });
      }, []);
      useEffect(() => {
        const handleResize = () => {
          if(window.innerWidth < 900)
        {
            setWidth(0)
        }
        if(window.innerWidth > 900 && window.innerWidth <= 1400)
        {
            setWidth(550)
        }
        if(window.innerWidth > 1400)
        {
          setWidth(750)
        }
        };
      
        window.addEventListener('resize', handleResize);
      
        // Cleanup event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [window.innerWidth]);
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" h="100vh" backgroundColor="#DCFBE9">
        <CssBaseline />
        <ToastContainer/>
        <Grid
          item
          
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://www.vidyalayaschoolsoftware.com/assets/images/call-action.svg)',
            // backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }}
          
        >
            <Typography component="h1" variant="h4"
              sx={{
                mt: 2,
                mx: 3,
                color: "#51ce99",
                fontFamily: 'Cedarville Cursive',
                // fontSize: 32,
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              TestHub
            </Typography>
            <Lottie options={defaultOptions} height={width} width={width} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#DCFBE9' }}>
              <LockOutlinedIcon style={{ color: "green" }}/>
            </Avatar>
            <Typography component="h1" variant="h5" sx={{
              fontFamily: "Raleway"
            }}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                style={{
                    backgroundColor: "#DCFBE9"
                }}
                onChange={e => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
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
                    backgroundColor: "#DCFBE9"
                }}
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
               
                control={<Checkbox value="remember" style={{
                  color: "#51ce97"
              }} />}
                label="Remember me"
              />
              <Button
                style={{
                    backgroundColor: "#51ce97"
                }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                  <Link href="/register" variant="body2" style={{textDecoration: 'none'}}>
                    Don't have an account?
                  </Link>
                  <Link href="/register" variant="body2">
                    Sign Up
                  </Link>
                  </Box>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login