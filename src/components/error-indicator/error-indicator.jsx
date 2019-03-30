import React from 'react'
import './error-indicator.css'
import jpg from './404-error.jpg'
import  png from './404-sorry.png'

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img src={jpg} alt='error icon' />
            <span className='warning'>WARNING URGENTLY</span>
            <span className=''>(Everyone went to the beach!!!)</span>
            <span className=''>(We will answer you when we stop rolling Vanya!!!)</span>
            <span className='warning'>SOMETHING HAS GONE TERRIBLY WRONG</span>
            <img src={png} alt='error icon' />
        </div>
    )
}
export default ErrorIndicator
