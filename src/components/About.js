import React from 'react'

export default function About() {
    return (
        <div>
            <h1 className='my-3'>About Us</h1>
            <div className="card mb-3 max-width: 540px">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="../5304238.png" className="img-fluid rounded-start img-thumbnail" alt="About us!"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Analyze your text with TextUtils</h5>
                            <p className="card-text">TextUtils give you a way to analyze your text quickly and efficiently. Be it word count, character count or remove any extra spaces</p>
                            <p>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtiles reports the number opf words and characters. Thus it is sutable for writing test with word/character limit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
