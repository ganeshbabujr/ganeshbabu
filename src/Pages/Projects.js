import React from 'react'
import Card from '../Component/Card'
import '../Styles/Projects.css'

function Projects() {
  return (
    <div className='dp project df'>

      <div className='ofc-project'>
        <div className='f3 text-shadow dfc' style={{ margin: '2vh 0 2vh 0' }}>Projects</div>

        
        <Card pno='03'
          preview="This is Unilever Project, where they can optimize the future expenses in different ways."
          details={<div>
            <b>Project :</b> Enterprise Banking Workflow Automation and Data Integration - PNC Bank<br />
            <b>Role: </b> Software Engineer<br/>
            <b>Duration: </b> Jan 2021 to Present<br/>
            <b>Language used:</b>SQL, PL/SQL, Unix, ETL<b>
            <br/>Details: </b>
            The project aimed to streamline and optimize PNC Bank’s core financial workflows—Current Account (CA), Cash & Banking (CB), Accounts Payable (AP), and Accounts Receivable (AR)—by enhancing back-end database functionality.<br />

          </div>} />
         <Card pno='02'
          preview="This is Unilever Project, where they can optimize the future expenses in different ways."
          details={<div>
            <b>Project :</b> Retail Management System - Woolworths<br />
            <b>Role: </b> PL/SQL Developer<br/>
            <b>Duration: </b> Nov 2020 to Dec 2021<br/>
            <b>Language used:</b>SQL, PL/SQL, Unix, ETL<b>
            <br/>Details: </b>
             As a PL/SQL Developer, developed and maintained a web application called "Stuffs" used by Woolworths Group Limited, a retail company based in Sydney, Australia. Managed inventory of all products, including purchase orders, sales orders, and product location tracking. 
             <br />


          </div>} />

         <Card pno='01'
          preview="This is Unilever Project, where they can optimize the future expenses in different ways."
          details={<div>
            <b>Project :</b> Enterprise Banking Workflow Automation and Data Integration - PNC Bank<br />
            <b>Role: </b> Software Engineer<br/>
            <b>Duration: </b> Jan 2021 to Present<br/>
            <b>Language used:</b>SQL, PL/SQL, Unix, ETL<b>
            <br/>Details: </b>
            The project aimed to streamline and optimize PNC Bank’s core financial workflows—Current Account (CA), Cash & Banking (CB), Accounts Payable (AP), and Accounts Receivable (AR)—by enhancing back-end database functionality.<br />


          </div>} />








      </div>

      {/* <div className='per-project'>
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
