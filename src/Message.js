import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef((props, ref) => {
	const isUser = props.username === props.message.username;
	return (
		<div ref={ref} className={`message ${isUser && "message_user"}`}>
			<Card className={isUser ? "message_userCard" : "message_guestCard"}>
				<CardContent>
					<Typography color="white" variat="h5" component="h2">
						{!isUser && `${props.message.username || "Unknown User"}: `}
						{props.message.message}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
});

export default Message;
