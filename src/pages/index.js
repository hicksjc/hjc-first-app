import React from 'react';
import { Link } from 'gatsby';

const HomePage = () => {

  function onButtonClick() {
    console.log("Hello World");
  }
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <p>Hi</p>
        <button onClick={onButtonClick}>Click Me!</button>
        <a href="/about">Go to the about page</a>
        {/* Link tags load pages faster than anchor tags */}
        <Link to='/about'>Link to the about page</Link> 
      </React.Fragment>
    );
};

export default HomePage;