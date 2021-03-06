import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";

const Footer = () => {
	const isPortrait = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div
			style={{
				textAlign: "center",
				fontSize: 25,
				margin: "auto",
				width: isPortrait ? "90%" : "70%",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<div
				style={{
					border: "1px solid #fbecec",
					padding: "20px 10px",
				}}
			>
				<p
					style={{
						fontSize: 20,
					}}
				>
					After every round you have to fill the google form given below.
				 This is important as it
					will acounts for your participation.
				</p>
				<Button
					variant="outlined"
					color="secondary"
					href="https://forms.gle/E3whQBUYP5DaCCV86"
				>
					Click here to submit you participation!
				</Button>
			</div>
			<br />
			<p>
				Follow us on{" "}
				<a href="https://www.instagram.com/roundtabledtu/">
					<InstagramIcon style={{ fontSize: 25 }} />
				</a>{" "}
				<a href="https://www.linkedin.com/company/round-table-dtu/mycompany/">
					<LinkedInIcon style={{ fontSize: 25 }} />
				</a>
			</p>
		</div>
	);
};

export default Footer;
