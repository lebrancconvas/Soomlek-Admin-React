/* eslint-disable no-dupe-keys */
import React, {useState, useEffect} from 'react';  
import Axios from 'axios';
import {Typography, TextField, Button, Card, CardContent} from '@mui/material';  
import {Box} from '@mui/system'; 

const Firstpage = () => {
	const [questionsList, setQuestionsList] = useState([]); 
	const [question, setQuestion] = useState(''); 
	const [option1, setOption1] = useState('');
	const [option2, setOption2] = useState('');
	const [option3, setOption3] = useState('');
	const [option4, setOption4] = useState('');
	const [answer, setAnswer] = useState(''); 

	const [newQuestion, setNewQuestion] = useState(''); 
	const [newOption1, setNewOption1] = useState(''); 
	const [newOption2, setNewOption2] = useState(''); 
	const [newOption3, setNewOption3] = useState(''); 
	const [newOption4, setNewOption4] = useState(''); 
	const [newAnswer, setNewAnswer] = useState(''); 

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

	const updateQuestionQuestion = (id) => {
		Axios.put('http://localhost:3002/update', {question: newQuestion, id: id}).then((response) => {
			setQuestionsList(
				questionsList.map((val) => {
					return val.id === id ? {
						id: val.id,
						question: newQuestion, 
						option1: val.option1,
						option2: val.option2,
						option3: val.option3,
						option4: val.option4,
						answer: val.answer 
					} : val; 
				})
			)
		})
	}

	const updateQuestionOption1 = (id) => {
		Axios.put('http://localhost:3002/update', {option1: newOption1, id: id}).then((response) => {
			setQuestionsList(
				questionsList.map((val) => {
					return val.id === id ? {
						id: val.id,
						question: val.question, 
						option1: newOption1, 
						option2: val.option2,
						option3: val.option3,
						option4: val.option4,
						answer: val.answer 
					} : val; 
				})
			)
		})
	}

	const updateQuestionOption2 = (id) => {
		Axios.put('http://localhost:3002/update', {option2: newOption2, id: id}).then((response) => {
			setQuestionsList(
				questionsList.map((val) => {
					return val.id === id ? {
						id: val.id,
						question: val.question, 
						option1: val.option1,
						option2: newOption2, 
						option3: val.option3,
						option4: val.option4,
						answer: val.answer 
					} : val; 
				})
			)
		})
	}

	const updateQuestionOption3 = (id) => {
		Axios.put('http://localhost:3002/update', {option3: newOption3, id: id}).then((response) => {
			setQuestionsList(
				questionsList.map((val) => {
					return val.id === id ? {
						id: val.id,
						question: val.question, 
						option1: val.option1,
						option2: val.option2,
						option3: newOption3, 
						option4: val.option4,
						answer: val.answer 
					} : val; 
				})
			)
		})
	}

	const updateQuestionOption4 = (id) => {
		Axios.put('http://localhost:3002/update', {option4: newOption4, id: id}).then((response) => {
			setQuestionsList(
				questionsList.map((val) => {
					return val.id === id ? {
						id: val.id,
						question: val.question,  
						option1: val.option1,
						option2: val.option2,
						option3: val.option3,
						option4: newOption4, 
						answer: val.answer 
					} : val; 
				})
			)
		})
	}

	const updateQuestionAnswer = (id) => {
		Axios.put('http://localhost:3002/update', {answer: newAnswer, id: id}).then((response) => {
			setQuestionsList(
				questionsList.map((val) => {
					return val.id === id ? {
						id: val.id,
						question: newQuestion, 
						option1: val.option1,
						option2: val.option2,
						option3: val.option3,
						option4: val.option4,
						answer: newAnswer 
					} : val; 
				})
			)
		})
	}

	const deleteQuestion = (id) => {
		Axios.delete(`http://localhost:3002/delete/${id}`).then((response) => {
			setQuestionsList(questionsList.filter((val) => {
				return val.id !== id;  
			}))
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
			<br />
			<hr />
			<br /> 
			<Box>
				<Typography variant="h5"> 
					Questions List 
				</Typography>
			</Box>
			<Box mt={2}>
				{questionsList.map((questions, index) => (
					<div key={index}>
						<Card>
							<CardContent>
								<Typography>
									<Typography variant="h5"> 
										Question {index + 1}: {questions.question} 
									</Typography>
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
										<br /> 
									Answer: {questions.answer}  
								</Typography>
							</CardContent>
							<Box>
								<TextField placeholder="Edit Question" sx={{width: 500}} /><br /><Button variant="contained" onClick={() => updateQuestionQuestion()}>Edit Question</Button><br />
								<TextField placeholder="Edit Option1" sx={{width: 500}} /><br /><Button variant="contained" onClick={() => updateQuestionOption1()}>Edit Option1</Button><br />
								<TextField placeholder="Edit Option2" sx={{width: 500}} /><br /><Button variant="contained" onClick={() => updateQuestionOption2()}>Edit Option2</Button><br />
								<TextField placeholder="Edit Option3" sx={{width: 500}} /><br /><Button variant="contained" onClick={() => updateQuestionOption3()}>Edit Option3</Button><br />
								<TextField placeholder="Edit Option4" sx={{width: 500}} /><br /><Button variant="contained" onClick={() => updateQuestionOption4()}>Edit Option4</Button><br />
								<TextField placeholder="Edit Answer" sx={{width: 500}} /><br /> <Button variant="contained" onClick={() => updateQuestionAnswer()}>Edit Answer</Button><br />   
							</Box>
							<Box mt={2}> 
								<Button variant="contained" onClick={() => deleteQuestion(questions.id)}>Delete Question</Button>  
							</Box>
							<br /><br /> 
						</Card>
						<br /><br /> 
					</div>
				))}
			</Box>
		</div>
	)
}

export default Firstpage; 