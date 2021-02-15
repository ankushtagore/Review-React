import data from './data'
import React,{useState} from 'react'
import {FaChevronLeft,FaChevronRight,FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


function Review() {
    const [review, setReview] = useState(0)
    const  {id,image,name,text,job} = data[review]

    const checkNumber= (num) => {
        if (num > data.length-1){return 0}
        if (num < 0){return data.length-1}
        return num
    }
    const nextPerson= () => {
        setReview((review) => checkNumber(review+1))} 
    const prevPerson= () => {
        setReview((review) => checkNumber(review-1))}

    return (
        <article className= 'review'>
            <div className="img-container">
        <img src ={image} alt = {name} className='person-img'></img>
        <span className="quote-icon">
            <FaQuoteRight />
            </span> 
        </div>
        <h4 className='author'> {name} </h4>
        <p className='job'>{job}</p>        
        <p className='text'>{text}</p>
        <div className="btn-container">
            <button className='prev-btn' onClick={prevPerson}>
                < FaChevronLeft />
            </button>

            <button className='next-btn' onClick = {nextPerson}>
                < FaChevronRight />
            </button>
        </div>
        <button className='random-btn' >
                Surprise Me
            </button>
                </article>
            )
    }

export default Review


/* In this App we will fetch the data in review.js
We will first import data. then create a function where we will useState(0) as it is a review folder and we will show one review at one time
in second one we will fetch data props one by one. */