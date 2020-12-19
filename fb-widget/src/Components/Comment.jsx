import React, { Component } from 'react'

export default class Comment extends Component {
	constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
		this.state = {
			characterCount: 0,
		}
	}

	handleChange(e) {
		this.setState({
			characterCount: e.target.value.length,
		})
	}

	render() {
		return (
			<>
				<textarea
					className='form-control'
					placeholder='Write a comment...'
					onChange={this.handleChange}
				/>
				<small>
					{this.props.maxLetters - this.state.characterCount} Remaining
				</small>
			</>
		)
	}
}
