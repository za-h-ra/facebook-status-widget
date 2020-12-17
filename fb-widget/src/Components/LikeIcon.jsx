import React from 'react'

export default function LikeIcon() {
	return (
		<>
			<span className='fa-stack fa-sm'>
				<i className='fa fa-circle fa-stack-2x blue-icon' />
				<i className='fa fa-thumbs-up fa-stack-1x fa-inverse' />
			</span>
		</>
	)
}
