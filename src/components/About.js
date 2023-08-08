import React from 'react'

export default function About() {
    return (
        <div>
            <h1 className='my-3'>About Us</h1>
            <div className="d-flex position-relative">
                <img src="..." className="flex-shrink-0 me-3" alt="..."/>
                    <div>
                        <h5 className="mt-0">Custom component with stretched link</h5>
                        <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                        {/* <a href="/about" className="stretched-link">Go somewhere</a> */}
                    </div>
            </div>
        </div>
    )
}
