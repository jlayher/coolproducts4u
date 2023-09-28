import React from 'react'
import './signup.css'


const Signup = () => {
  return (
    <div className='signup_container'>
      <h1 className='signup_container_title'>Sign Up!</h1>
      <div className='signup_container_details'>
        <p className='signup_container_details_description'>Morbi neque libero, semper at nunc consectetur, sollicitudin feugiat risus. Mauris eu sodales quam. Etiam vitae efficitur sapien. Pellentesque luctus rhoncus vehicula. Phasellus laoreet nisi sapien, vel feugiat orci congue a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sollicitudin dignissim tincidunt. Etiam luctus vehicula congue. Pellentesque urna nisl, euismod quis fringilla eget, pulvinar egestas nisl. Pellentesque felis nisl, pharetra sit amet lobortis nec, mollis eget lectus. Sed maximus commodo lectus, ac auctor lorem aliquet et. Morbi vel neque hendrerit, sollicitudin dolor quis, porta dui. In magna libero, convallis non rhoncus pulvinar, tempor ut turpis.</p>
        <form className='signup_container_details_form'>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input id="firstName" type='text' name='firstName' placeholder='John'/>
            <label htmlFor='lastName'>Last Name</label>
            <input id="lastName" type='text' name='lastName' placeholder='Doe'/>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder='jDoe@fakeEmail.net'/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder='******'/>
          </div>
          <button>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Signup
