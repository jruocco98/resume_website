import React from 'react'; 
const Education = () => {
    
    return(
        <div className='page'>
            <div className="header">
                <h1>Education</h1>
            </div>   
            <div className='primary'>
                <h2>Masters of Science in Data Science</h2>
                <div className='secondary' style={{paddingTop: '12px'}}><b>University of West Florida - Pensacola,FL - In Progress</b></div>    
            </div>

            <div className='primary'>
                <h2>Bachelor of Science in Mathematics</h2>
                <div className='secondary' style={{paddingTop: '12px'}}><b>Minor in Statistics - University of West Florida - Pensacola,FL - 2018</b></div>
                
            </div>

            <div Style='margin-top: 60px' className="header">
                <h1>Skills</h1>
            </div>
            <div style={{marginTop: '25px'}}>   
                <ul className='skills'>
                    <li>SQL Server</li>
                    <li>SAS</li>
                    <li>SRSS</li>
                    <li>Excel</li>
                    <li>Tableau</li>
                    <li>ServiceNow</li>
                    <li>Workfront</li>
                    <li>Python</li>
                </ul>
            </div>
            
        </div> 
                 
       
    )
}


export default Education;