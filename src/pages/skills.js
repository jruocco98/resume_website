import React from 'react'; 
const Skills = () => {
    return(
        <div
            style={{
                color: '#c2c2c2',
                display: 'block',
                justifyContent: 'Center',
                alignItems: 'Right',
                width: '50vw',
                height: '100%',
                marginLeft: '30%',
                marginTop:'100px',
                background: 'rgba(0, 0, 0, 0.95)',
                padding: '30px',                
                paddingRight: '20px',
                border: '2px solid black'
            }}
            >
            <div className="header">
                <h1>Skills</h1>
            </div>
            <div style={{marginTop: '25px'}} className='skills'>   
                <ul>
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


export default Skills;