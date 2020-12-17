import React from 'react'
import Status from './Components/Status'
import Comment from './Components/Comment'
import Like from './Components/Like'
import LikeIcon from './Components/LikeIcon'

export default function App() {
    return (
        <>
            <h1>Hello World!</h1>
            <Status />
            <Comment />
            <Like />
            <LikeIcon />
        </>
    )
}
