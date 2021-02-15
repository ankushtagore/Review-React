import react,{useState} from 'react'
import data from './data'
import Review from './review'
import {FaGithubSquare} from 'react-icons/fa'
import './App.css';


function App() {
  return (
    <main className="App">
      <FaGithubSquare className='icon'/>
      <section className="container">
          <div className="title">
            <h2>Our Reviews </h2>
              <div className="underline"></div>
          </div>

      </section>
  <Review />
  
    </main>
  );
}

export default App;


/* In this App we will fetch the data direct in the review.js. App.js will be only used to show the components.*/