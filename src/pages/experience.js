import React from 'react';

const Experience = () => {
    return(

        <div
            style={{
                color: '#c2c2c2',
                display: 'block',
                justifyContent: 'Center',
                alignItems: 'Right',
                width: '50vw',
                marginLeft: '29%',
                marginTop:'90px',
                background: 'rgba(0, 0, 0, 0.95)',
                padding: '30px',                
                paddingRight: '20px',
                border: '2px solid black',
            }}
            >
            
            <div className="header">
                <h1>Experience</h1>
            </div>   
            <div className='primary'>
                <h2>Mortgage Process Automation Analyst - Intern</h2>
                <div className="secondary">
                    <p className='alignleft'><b>Navy Federal Credit Union</b> </p>
                    <p className='alignright'><b>November 2020 - Present, Pensacola,FL</b></p>
                </div>
                <div Style="clear: both;"></div>
            </div>
            <br />
            <ul>
                <li>Use SQL and SSRS to create interactive dashboards that promote data exploration and actionable insights for mortgage management.</li>    
                <li>Communicate with leadership and different teams throughout the design process to verify all requirements are captured. Also, continuing this communication through beta testing and implementation to make sure the reporting is running smoothly and as intended.</li>
                <li>Assist Mortgage Process Automation with project management through Workfront. This includes: tracking the progress of all projects, confirming due dates are accurate, and assuring that the correct forms are submitted, such as, intake forms, BRD's, etc.</li>
                <li>Updating older SQL queries to ensure efficiency and lower runtimes.</li>
            </ul>
            <div className='primary'>
                <h2>IT Analyst - Intern</h2>
                <div className="secondary">
                    <p className='alignleft'><b>Navy Federal Credit Union</b> </p>
                    <p className='alignright'><b>December 2019 - November 2020, Pensacola,FL</b></p>
                </div>
                <div Style="clear: both;"></div>
            </div>
            <br />
            <ul>
                <li>Was responsible for tracking over 300,000 IT assets including hardware assets and software assets. Using multiple tools and resources such as, HP asset manager, SCCM, Invoices, and physical asset scans. My team tracked the life cycle of all IT assets for all Navy Federal campuses and branches.</li>
                <li>Used excel proficiently to organize, connect, and analyze multiple large sets of asset data. Using formulas such as Vlookup, Concatenate, and Pivot tables to help process incoming information, maintain our database, and keep our information as accurate as possible.</li> 
                <li>Used Word, PowerPoint, and Tableau to create visually appealing reports, graphs and charts, and dashboards that represent our current data to management.</li> 
                <li>Effectively communicated and collaborated with different departments across the credit union to obtain the most current asset data and update our database accordingly.</li> 
            </ul>
            <div className='primary'>
                <h2>Substitute Teacher</h2>
                <div className="secondary">
                    <p className='alignleft'><b>PESG Educational Staffing Solutions</b> </p>
                    <p className='alignright'><b>September 2019 - December 2019, Milton,FL</b></p>
                </div>
                <div Style="clear: both;"></div>
            </div>
            <br />
            <ul>
                <li>Responsible for providing a safe and structured learning environment for up to thirty students per class, that range from middle school to high school.</li>
                <li>Implemented a teacher’s given lesson plan in their absence for a variety of subjects such as mathematics, English, social
                studies, etc.</li>
            </ul>


        </div>
        
    )
}


export default Experience;
