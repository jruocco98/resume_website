import React from 'react'; 
const Education = () => {
    
    return(
        <div
            style={{
                color: '#c2c2c2',
                display: 'block',
                justifyContent: 'Center',
                alignItems: 'Right',
                width: '50vw',
                height: '100%',
                marginLeft: '29%',
                marginTop:'90px',
                background: 'rgba(0, 0, 0, 0.95)',
                padding: '30px',                
                paddingRight: '20px',
                border: '2px solid black',
            }}
            >
            <div className="header">
                <h1>Education</h1>
            </div>   
            <div className='primary'>
                <h2>Masters of Science in Data Science</h2>
                <p><b>University of West Florida - Pensacola,FL - In Progress</b></p>    
            </div>

            <div className='primary'>
                <h2>Bachelor of Science in Mathematics</h2>
                <p><b>Minor in Statistics - University of West Florida - Pensacola,FL - 2018</b></p>
                
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