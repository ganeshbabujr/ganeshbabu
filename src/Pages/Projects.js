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
            <b>Project :</b> Enterprise Banking Workflow Automation and Data Integration - PNC Bank
            <br /><b>Role: </b> Software Engineer<br/>
            <b>Duration: </b> Jan 2021 to Present<br/>
            <b>Language used:</b>SQL, PL/SQL, Unix, ETL<b>
            Details: </b>
            The project aimed to streamline and optimize PNC Bank’s core financial workflows—Current Account (CA), Cash & Banking (CB), Accounts Payable (AP), and Accounts Receivable (AR)—by enhancing back-end database functionality.<br />

          </div>} />
        <Card pno='02'
          preview="This is Unilever Project, where they can simulate, compare, forecast the investment and
        market status of all their brands."
          details={<div>
            <b>Language used:</b> Angular, .NET CORE, MSSQL, PYTHON
            <br /><b>Org Name:</b> Kantar Analytics Practice
            <br />
            <b>Role: </b>My role was to build a simulation page ui where user can simulate between different
            brands and also implemented sso login using Msal react library.<br />
            <b>Details: </b>
            In this project, where they can simulate, compare, forecast the investment and
            market status of all their brands.<br />

          </div>} />

        <Card pno='01'
          preview="In this project, we develop a platform where all the internal project details/status are maintained."
          details={<div>
            <b>Language used:</b> REACT JS, .NET, MSSQL
            <br /><b>Org Name:</b> Kantar Analytics Practice
            <br />
            <b>Role: </b>My role was to develop user management with three types of user with different
            permissions and excel export of all modules with the use of EPPlus library.
            <br />
            <b>Details: </b>
            In this project, we develop a platform where all the internal project details/status are
            maintained.<br />

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
