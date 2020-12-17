import React from 'react'
import Comment from './Comment'
import Like from './Like'

export default function Status() {
    return (
        <>
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-10 profile-row">
                                <div className="row">
                                    <a href="#">The Zen of Programming</a>
                                </div>
                                <div className="row">
                                    <small className="post-time">10 mins</small>
                                </div>
                            </div>
                        </div>
                        <Like />
                    </div>
                    <div className="card-footer text-muted" />
                    <Comment />
                </div>
            </div>
        </>
    )
}
