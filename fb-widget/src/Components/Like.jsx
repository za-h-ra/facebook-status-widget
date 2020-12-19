import React, { Component } from 'react'
import LikeIcon from './LikeIcon'

export default class Like extends Component {
	constructor() {
		super()
		this.state = {
			liked: false,
		}

		this.toggleLike = this.toggleLike.bind(this)
	}

	toggleLike() {
		this.setState((previousState) => ({
			liked: !previousState.liked,
		}))
	}
	render() {
		return (
			<>
				{this.state.liked && <LikeIcon />}
				<hr />
				<div>
					<button
						type='button'
						className='btn no-outline btn-secondary'
						onClick={this.toggleLike}>
						<i
							className='fa fa-thumbs-o-up fa-4 align-middle'
							aria-hidden='true'
						/>
						<span className='align-middle'>Like</span>
					</button>
				</div>
			</>
		)
	}
}
