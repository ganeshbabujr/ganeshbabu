import React from 'react'
import Card from '../Component/Card'
import '../Styles/Projects.css'
function Projects() {
  return (
    <div className='dp project df'>

      <div className='ofc-project'>
        <div className='f3 text-shadow dfc' style={{ margin: '2vh 0 2vh 0' }}>Projects</div>

        
        <Card pno='02'
          preview="This is Woolworths Project, Managed inventory of all products, including purchase orders, sales orders."
          details={<div>
            <b>Project :</b> Retail Management System for a Supermarket Chain - Woolworths<br />
            <b>Role: </b> PL/SQL Developer<br/>
            <b>Duration: </b> Jan 2022 to Mar 2025<br/>
            <b>Language used:</b> SQL, PL/SQL, Unix<b>
            <br/>Details: </b>
            The project aimed to Managed inventory of all products, including purchase orders, sales orders, and product location tracking. Contributed to improving Woolworths' business operations through effective data management.<br />

          </div>} />
         <Card pno='01'
          preview="This is MLB Project, where they can optimize the future expenses in different ways."
          details={<div>
            <b>Project :</b> Financial Management System Upgrade – Westpac<br />
            <b>Role: </b> PL/SQL Developer | Support L1<br/>
            <b>Duration: </b> Nov 2020 to Dec 2021<br/>
            <b>Language used:</b> SQL, PL/SQL, Unix<b>
            <br/>Details: </b>
             The project aimed to handled monitoring, troubleshooting, and resolving critical issues in the backend database systems to minimize downtime and ensure seamless business continuity.
             <br />


               
          </div>} />
  
            
  
      </div>




{/*  <div className='per-project'>
        <div className='f3 text-shadow dfc' style={{ margin: '2vh 0 2vh 0' }}>Personal Projects</div>

        <Card pno='01' isPersonal='true'
          details={<div>
            <a href='https://royalfoodcourtmess.web.app/' target='blank' style={{color:'blue', textDecoration:'underline'}}>Go to Website</a><br />

            <b>Details: </b> Developed a website for learn animated website that also helps someone for their mess service business, it is hosted on firebase<br />
            <b>Language Used: </b> Javascript, Bootstrap, Firebase<br /><br />


          </div>} />
      

      </div> */}
    </div>
  )
}

export default Projects
