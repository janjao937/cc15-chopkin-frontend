const ChatComponentMe = ({ message, author, time }) => {
	return (
		<div className="message">
			<div
				// style={{
				// 	display: "flex",
				// 	justifyContent: "right",
				// 	gap: "4px",
				// 	border: "1px solid",
				// 	margin: "25px",
				// }}
				className="flex justify-end gap-4 "
			>
				<p>{message}</p>
				<p style={{ color: "green" }} className="flex flex-col">
					: {author}
					<small
						// style={{ color: "brown" }}
						className="text-xs text-gray-500/90"
					>
						{time}
					</small>
				</p>
			</div>
		</div>
	);
};
const ChatComponentOther = ({ message, author, time }) => {
	return (
		<div className="message">
			<div
				// style={{
				// 	display: "flex",
				// 	justifyContent: "left",
				// 	gap: "4px",
				// 	border: "1px solid",
				// 	margin: "25px",
				// }}
				className="flex justify-start gap-4 "
			>
				<p style={{ color: "red" }} className="flex flex-col">
					{author} :
					<small
						// style={{ color: "brown" }}
						className="text-xs text-gray-500/90"
					>
						{time}
					</small>{" "}
				</p>
				<p>{message}</p>
			</div>
		</div>
	);
};

export { ChatComponentOther };
export { ChatComponentMe };
