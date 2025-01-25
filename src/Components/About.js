import React from 'react'

export default function About() {
  
  return (
    <div className="container ">
        <h1 className='heading my-5'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Introduction
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body">
        <h7>"Welcome to TextUtils your one-stop solution for text transformation and analysis! Easily convert text between uppercase, lowercase, or capitalize the first letters of words. Instantly count the number of words and characters, and even get an estimated reading time. Simple, fast, and efficient.TextUtils makes managing your text a breeze!"</h7>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
        Learning
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h7>This is a simple React app I built while learning the basics of React development. It’s a text utility tool that allows users to perform basic text transformations like converting to uppercase, lowercase, and capitalizing the first letters of words. It also includes features to count the number of words and characters in the text and estimate the reading time. Building this app helped me understand React concepts like state management, props, and component-based architecture, while also practicing integration with React Router for navigation.</h7>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
