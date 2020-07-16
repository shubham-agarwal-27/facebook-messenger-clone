import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import FlipMove from "react-flip-move";
import db from "./firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import "./App.css";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({
						data: doc.data(),
						id: doc.id,
					}))
				);
			});
	}, []);

	useEffect(() => {
		setUsername(prompt("Please enter your name"));
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();
		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};

	const showMessages = messages.map((message) => {
		return (
			<Message key={message.id} username={username} message={message.data} />
		);
	});

	return (
		<div className="App">
			<img
				src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
				alt=""
			/>
			<h2>Hello {username}</h2>
			<form className="app_form">
				<FormControl className="app_formControl">
					<Input
						className="app_input"
						placeholder="Enter a message..."
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
					<IconButton
						className="app_iconButton"
						disabled={!input}
						variant="contained"
						color="primary"
						type="submit"
						onClick={sendMessage}
					>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>
			<FlipMove>{showMessages}</FlipMove>
		</div>
	);
}

export default App;
