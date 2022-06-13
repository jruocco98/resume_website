import React from 'react';
const Projects = () => {
    return(
        <div className='page'>
            <div className="header">
                <h1>Projects</h1>
            </div> 
            <div Style='line-height: 30px' className='primary'>
                <h2>Alternative Methods to Listwise Deletion: Results from Multiple Regression Analysis</h2>
                <div Style='margin-top: -20px' className='secondary'>
                    <p><b>Mathematics Proseminar - August 2018</b></p>
                </div>
            </div>
            <p>Using SAS, I looked at what kind of effect different methods for handling missing data had on multiple regression (Listwise Deletion, Mean Imputation, Random Hot Deck Imputation, and Maximum Likelihood by Expectation Maximization).</p>  
        </div> 
                 
       
    )
}


export default Projects;