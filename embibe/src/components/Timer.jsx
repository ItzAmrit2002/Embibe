import React, { useEffect, useState } from 'react'
import { Div, Button, Text, Icon, Container, Label, Checkbox } from "atomize";


const Timer = () => {
    const [begtime, setBegtime] = useState(new Date());
	const [time, setTime] = useState(() => {
		const teme = new Date();
		return teme;
	});

    useEffect(() => {
		setTime(new Date() - begtime);
	}, [time]);
  return (
    <Div>
        <Text textSize="heading" fontFamily="Montserrat" m={{ r: "8%" }}>
					Time remaining: {120 - Math.ceil(time / 1000 / 60)} minutes,{" "}
					{60 - Math.round((time / 1000) % 60)} seconds.
				</Text>
    </Div>
  )
}

export default Timer