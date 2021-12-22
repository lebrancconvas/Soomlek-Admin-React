import React, {useState, useEffect} from 'react';  
import Axios from 'axios';
import {Typography, TextField, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Firstpage = () => {
	const [questionsList, setQuestionsList] = useState([]); 

	useEffect(() => {
		Axios.get('http://localhost:3002/questions').then((response) => {
			setQuestionsList(response.data); 
		})
	})

	return (
		<div>
			<Box sx={{textAlign: 'center'}}> 
				<Typography variant="h3">  
					Soomlek Admin  
				</Typography>
			</Box> 
			<Box>
				<form action="">
					<Typography variant="h6">Question</Typography>
					<TextField fullWidth placeholder="Question" required/> 
					<br /><br />
					<Typography variant="h6">Option1</Typography>
					<TextField fullWidth placeholder="Option1" required/>
					<br /><br />
					<Typography variant="h6">Option2</Typography>
					<TextField fullWidth placeholder="Option2" required/>
					<br /><br />
					<Typography variant="h6">Option3</Typography>
					<TextField fullWidth placeholder="Option3" required/>
					<br /><br />
					<Typography variant="h6">Option4</Typography>
					<TextField fullWidth placeholder="Option4" required/>
					<br /><br />
					<Typography variant="h6">Answer</Typography> 
					<TextField fullWidth placeholder="Answer" required/>  
					<Box mt={3}> 
						<Button variant="contained">Add Question</Button>  
					</Box>
				</form>
			</Box>
			<Box mt={2}>
				{questionsList.map((questions, index) => (
					<div key={index}>
						Question: {questions.question} 
						<br />
						Choice: <br />  
							I) {questions.option1}
							<br />
							II) {questions.option2}
							<br />
							III) {questions.option3}
							<br />
							IV) {questions.option4}
							<br />
						Answer: {questions.answer}  
						<br /><br /><br />  
					</div>
				))}
			</Box>
		</div>
	)
}

export default Firstpage; 