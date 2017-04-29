import React, { Component } from 'react';

class Popular extends Component {
	constructor(props) {
		super(props);

		this.state = { selectedLanguage: 'All'}
		// we need to bind our updateLanguage function because we are going to
		// call the method on something that will provide it the wrong context

		// we are binding the context of 'this' in updateLanguage()
		// to the compenent no matter where updateLanguage is called
		this.updateLanguage = this.updateLanguage.bind(this)
	}

	// method for updating selectedLanguage state
	updateLanguage(language) {
		this.setState({
			selectedLanguage: language
		});
	}

	render() {
		console.log(this.props);
		var languages = [ 'All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
		return(
			<ul id="languages">
				{languages.map( (language) => {
					console.log(this);
					return (
						console.log(this);
						<li 
						key={language}
						onClick={(language) => this.updateLanguage(language)}>
							{language}
						</li>
						) 
				}, this)}
			</ul>
		)
	}
}

export default Popular;
