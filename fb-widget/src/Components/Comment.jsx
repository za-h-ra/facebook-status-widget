import React, { Component } from 'react'

export default class Comment extends Component {
    constructor() {
        super()
        this.state = {
            characterCount: 0
        }
    }


	render() {
		return (
				<>
					<textarea className='form-control' placeholder='Write a comment...' />
					<small>{this.props.maxLetters} Remaining</small>
				</>
		)
	}
}
