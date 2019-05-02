import React, { Component } from "react";
import Project from "./project";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Projects extends Component {
	state = {
		projects: [
			{
				title: "Project 1",
				img:
					"https://www.corporatecomplianceinsights.com/wp-content/uploads/2018/09/data-analytics.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 2",
				img:
					"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 3",
				img:
					"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 4",
				img:
					"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 5",
				img:
					"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 6",
				img:
					"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
				text: "A brief blurb about what this is"
			}
		]
	};
	render() {
		return (
			<section id="projects">
				<CardDeck>{this.renderProjects()}</CardDeck>

				{/* <Container>
					<Row>{this.renderProjects()}</Row>
					<Row>{this.renderProjects()}</Row>
				</Container> */}
			</section>
		);
	}

	renderProjects() {
		return this.state.projects.map(function(p, index) {
			let projectEntry = [<Project key={p.name} project={p} />];

			// Add responsive breaks for cards
			if (index % 2 === 1) {
				projectEntry.push(
					<div class="w-100 d-none d-sm-block d-md-none" />
				);
			}
			if (index % 3 === 2) {
				projectEntry.push(
					<div class="w-100 d-none d-md-block d-lg-block d-xl-block" />
				);
			}

			return projectEntry;
		});
	}
}

export default Projects;
