import React from 'react';
import '../Styles/Experience.css';
import ProgressBar from '../Component/ProgressBar';
import CurrentCompany from '../Component/CurrentCompany';
import { currentCompanyName, currentRole, currentLocation, oldCompanyHistory } from '../Shared/Constant';

function Experience() {
  return (
    <>
      <div className='experience-container'>
        <div className='current-company-section'>
          <CurrentCompany
            companyName={currentCompanyName}
            role={currentRole}
            location={currentLocation}
          />
        </div>

        <div className='progress-section'>
          <h3>Skills Progress</h3>
          <ProgressBar skill="SQL" level={90} />
          <ProgressBar skill="PL/SQL" level={85} />
          <ProgressBar skill="Unix Shell Scripting" level={75} />
          <ProgressBar skill="Python" level={70} />
        </div>

        <div className='history-section'>
          <h3>Previous Companies</h3>
          <ul>
            {oldCompanyHistory.map((company, index) => (
              <li key={index}>
                <strong>{company.name}</strong> – {company.role} ({company.duration})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;
