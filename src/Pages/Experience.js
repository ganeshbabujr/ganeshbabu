import React from 'react'
import ProgressBar from '../Component/ProgressBar'
import '../Styles/Experience.css'
import CurrentCompany from '../Component/CurrentCompany'
import { currentCompanyName, currentRole, currentLocation, oldCompanyHistory } from '../Shared/Constant'
import BodyCard from '../Component/BodyCard'


function Experience() {
  return (
    <div className='dp experience' style={{ flexDirection: 'column' }}>
      <div className='f4 df text-shadow'>EXPERIENCE</div>
      <div className='mob-exp'>
        <div className='exp-top df'>
          <div className='left-exp' >
            <div className='frame f1 df c-details' style={{ marginTop: '5vh' }}>
              <div className='no-block'>01</div>
              <div className='ex-c-detils'>
                Org Name: {oldCompanyHistory[0].name}<br />
                Designation: {oldCompanyHistory[0].designation} <br />
                Start Date : {oldCompanyHistory[0].startDate} <br />
                Last Date : {oldCompanyHistory[0].endDate}<br />
                Location : {oldCompanyHistory[0].location}
              </div>
            </div>
            <div className='frame f1 df c-details' style={{ marginTop: '3vh' }}>
              <div className='no-block'>02</div>
              <div className='ex-c-detils'>
                Org Name: {oldCompanyHistory[1].name}<br />
                Designation: {oldCompanyHistory[1].designation} <br />
                Start Date : {oldCompanyHistory[1].startDate} <br />
                Location : {oldCompanyHistory[1].location}
              </div>
            </div>

            <div className='small-blocks'>
              <div className='frame neu-btn-2 df small-block-child'>
                <div className='f3 text-shadow' style={{ height: '40%' }}>4 +</div>
                <div className='f1 df center-container'><span>Years of experience</span></div>


              </div>

              <div className='frame neu-btn-2 df small-block-child block-details'>
                <div className='f3 text-shadow'>3 +</div>
                <div className='f1 df center-container'>Projects Completed</div>

              </div>

              <div className='frame neu-btn-2 df small-block-child block-details'>
                <div className='f3 text-shadow'>2 </div>
                <div className='f1 df center-container'>Domains</div>

              </div>
            </div>
          </div>
        </div>
        <div className='exp-bottom df'>
          <div className='exp-bottom-left df'>

            <BodyCard header={'Languages'} skills={['SQL', 'PL/SQL', 'Unix', 'Python']}/>
            <BodyCard header={'Client-Side Tool'} skills={['SQL Developer', 'PL/SQL Developer','Toad', 'SQL Plus']}/>
            <BodyCard header={'Database'} skills={['Oracle 12c','Oracle 11g','MySQL','PostgreSQL']}/>
             <BodyCard header={'Tool'} skills={['Autosys', 'Control-M', 'SVN','Putty']}/>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Experience
