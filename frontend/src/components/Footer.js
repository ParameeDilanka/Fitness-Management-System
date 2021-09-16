import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box><br></br><br></br><br></br>
	<Container>
		<Row>
		<Column>
		<FooterLink href="#">
			<i className="fas fa-map-marker-alt">
				<span style={{ marginLeft: "10px" }}>
				New Kandy Road,
				Waliweriya South,
				Sri Lanka.
				</span>
			</i>
			</FooterLink>

			<FooterLink href="#">
			<i className="fas fa-clock">
				<span style={{ marginLeft: "10px" }}>
				05:00-22:00
				</span>
			</i>
			</FooterLink>
			</Column>


		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">
			<i className="fas fa-phone">
				<span style={{ marginLeft: "10px" }}>
				076 257 0888
				</span>
			</i>
			</FooterLink>

			<FooterLink href="#">
			<i className="fas fa-sms">
				<span style={{ marginLeft: "10px" }}>
				+94 076 257 0888
				</span>
			</i>
			</FooterLink>

            <FooterLink href="#">
			<i className="fas fa-envelope">
				<span style={{ marginLeft: "10px" }}>
				C4fitnesscenter@gmail.com
				</span>
			</i>
			</FooterLink>
			</Column>
			&nbsp;
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
 
);
};
export default Footer;
