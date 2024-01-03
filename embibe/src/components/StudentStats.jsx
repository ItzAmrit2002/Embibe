import React, { useState } from "react";
import Sidebar from "./NavbarStudent";
import { Div, Button, Text, Icon, Container, Row, Col } from "atomize";
import axios from "axios";
import { useEffect } from "react";
import StatBox from "./StatBox";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentStats = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token_embibe"),
    },
  };
  const [papers, setPapers] = useState([]);
  const [isLoading, setLoading] = useState(true)
  // const getMarks = async () => {
  //   try {
  //     const res = await axios.post(
  //       "https://testhubbknd.onrender.com/api/student/getmarks",
  //       {
  //         userid: auth.id,
  //       }
  //     );
  //     console.log("Marks res= ", res);
  //     setPapers(res.data);
  //     console.log(auth.id);
  //   } catch (err) {
  //     console.error("Error fetching marks:", err);
  //     // Handle the error appropriately, e.g., display an error message
  //   }
  // };


const getMarks = async () => {
  try {
    toast.promise(
      axios.post(
        "https://testhubbknd.onrender.com/api/student/getmarks",
        {
          userid: auth.id,
        }
      ),
      {
        pending: "Fetching marks...",
        success: {
          render({data})
          {
            console.log("Marks res= ", data);
            setPapers(data.data);
            console.log(auth.id);
            setLoading(false)
            return "Marks loaded successfully!";
          },
          autoClose: 1700
        },
        error: {
          render({data}){
          console.error("Error fetching marks:", data.response.data.message);
          return "Failed to fetch marks. Please try again.";
          }
        },
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    toast.error("An unexpected error occurred.");
  }
};

  useEffect(() => {
    getMarks();
    // console.log("hii");
  }, []); // Empty dependency array removed
  return (
    <Div d="flex" bg="#DCFBE9" flexDir="column" h="100%" minH="100vh">
      <Sidebar />
      <ToastContainer/>

      {isLoading ? <Div d="flex" bg="#CCF7E3" w="100%" h="80%" align="center" textAlign="center" justify="center" flexDir="column">
            <Text
						m={{ t: "2%" }}
						fontFamily="Montserrat"
						textWeight="700"
						textSize="display3"
						textColor="#1C0F13">
						Loading
					</Text>
            <Icon name="Loading2" size="50px" color="#121212" />
            </Div> : <Div d="flex" align="center" justify="center" flexDir="column" w="100%">
        <Div
          d="flex"
          flexDir="column"
          align="center"
          justify="space-around"
          w="100%"
        >
          <Text
            m={{ t: "2%" }}
            fontFamily="Montserrat"
            textWeight="700"
            textSize="display3"
            textColor="#1C0F13"
          >
            Your Stats
          </Text>
          <Text
            fontFamily="Montserrat"
            textWeight="700"
            textSize="display1"
            textColor="#1C0F13"
          >
            ___
          </Text>
        </Div>
        {papers.map((item, index) => {
          console.log(item);
          // setTotalmarks(totalmarks + item.marks);
          return item.updatedAt && item.finished ? (
            <StatBox
              attemptid={item._id}
              pid={item.paperid}
              timeC={item.updatedAt}
              marks={item.marks}
              uid={item.userid}
              key={index}
              attempted={item.attempted}
              incorrect={item.incorrect}
              correct={item.correct}
            />
          ) : null;
        })}
      </Div>}
    </Div>
  );
};

export default StudentStats;
