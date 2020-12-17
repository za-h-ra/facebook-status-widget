import React from 'react'
import LikeIcon from './LikeIcon'

export default function Like() {
	return (
		<>
			<LikeIcon />
			<hr />
			<div>
				<button type='button'>
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
