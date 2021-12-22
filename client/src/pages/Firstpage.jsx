/* eslint-disable no-dupe-keys */
import React, {useState, useEffect} from 'react';  
import Axios from 'axios';
import {Typography, TextField, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Firstpage = () => {
	const [questionsList, setQuestionsList] = useState([]); 
	const [question, setQuestion] = useState(''); 
	const [option1, setOption1] = useState('');
	const [option2, setOption2] = useState('');
	const [option3, setOption3] = useState('');
	const [option4, setOption4] = useState('');
	const [answer, setAnswer] = useState(''); 

	useEffect(() => {
		Axios.get('http://localhost:3002/questions').then((response) => {
			setQuestionsList(response.data); 
		})
	})

	const addQuestion = () => {
		Axios.post('http://localhost:3002/create', {
			question: question,
			option1: option1,
			option2: option2,
			option3: option3,
			option4: option4,
			answer: answer 
		}).then(() => {
			setQuestionsList([
				...questionsList,
				{
					question: question,
					option1: option1,
					option2: option2,
					option3, option3,
					option4, option4,
					answer: answer 
				} 
			]);
		}) 
	}

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
					<TextField fullWidth placeholder="Question" onChange={event => setQuestion(event.target.value)} required/> 
					<br /><br />
					<Typography variant="h6">Option1</Typography>
					<TextField fullWidth placeholder="Option1" onChange={event => setOption1(event.target.value)} required/>
					<br /><br />
					<Typography variant="h6">Option2</Typography>
					<TextField fullWidth placeholder="Option2" onChange={event => setOption2(event.target.value)} required/>
					<br /><br />
					<Typography variant="h6">Option3</Typography>
					<TextField fullWidth placeholder="Option3" onChange={event => setOption3(event.target.value)} required/>
					<br /><br />
					<Typography variant="h6">Option4</Typography>
					<TextField fullWidth placeholder="Option4" onChange={event => setOption4(event.target.value)} required/>
					<br /><br />
					<Typography variant="h6">Answer</Typography> 
					<TextField fullWidth placeholder="Answer" onChange={event => setAnswer(event.target.value)} required/>  
					<Box mt={3}> 
						<Button variant="contained" type="submit" onClick={addQuestion}>Add Question</Button>   
					</Box>
				</form>
			</Box>
			<Box mt={2}>
				{questionsList.map((questions, index) => (
					<div key={index}>
						Question {index + 1}: {questions.question} 
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