import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { useMediaQuery } from "react-responsive";
import {
	NotificationManager,
} from "react-notifications";

const InputField = () => {
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

	const useStyles = makeStyles((theme) => ({
		root: {
			"& .MuiTextField-root": {
				width: isPortrait ? "100%" : "50vw",
				color: "white",
			},
			"& .MuiInputLabel-root": {
				color: "#69779b",
			},

			"& label.Mui-focused": {
				color: "#69779b",
			},
			"& .MuiInput-underline:after": {
				borderBottomColor: "#69779b",
			},
			"& .MuiOutlinedInput-root": {
				"& fieldset": {
					borderColor: "#69779b",
				},
				"&:hover fieldset": {
					borderColor: "#69779b",
				},
				"&.Mui-focused fieldset": {
					borderColor: "#69779b",
				},
			},
		},
	}));
	const classes = useStyles();
	const [value, setValue] = React.useState("");
	const [correct, setCorrect] = React.useState(false);
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const handleAnswer = () => {
		if (value.toLowerCase().toString() === process.env.REACT_APP_ANSWER.toLowerCase().toString()) {
			setCorrect(true);
			console.log(value);
			NotificationManager.success(
				"Click on Next Round",
				"Correct Answer"
			);
		} else {
			setCorrect(false);
			NotificationManager.error("Keep Trying", "Wrong Answer");
		}
	};

	return (
		<div style={{marginBottom:50}}>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					id="standard-textarea"
					label="Enter the Answer here"
					placeholder="Answer"
					onChange={handleChange}
					inputProps={{ style: { color: "white" } }}
					multiline
				/>
				<br />
				<br />
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						width: isPortrait ? "100%" : "50vw",
						margin: "auto",
					}}
				>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.button}
						endIcon={<CloudUploadIcon />}
						onClick={handleAnswer}
					>
						Verify Answer
					</Button>
					{correct ? (
						<Button
							variant="outlined"
							color="secondary"
							href={process.env.REACT_APP_NEXT_ROUND}
						>
							Next Round
						</Button>
					) : (
						<Button
							variant="outlined"
							style={{
								borderColor: "#69779b",
								color: "#69779b",
							}}
							disabled
						>
							Answer to activate
						</Button>
					)}
				</div>
			</form>
		</div>
	);
};

export default InputField;
