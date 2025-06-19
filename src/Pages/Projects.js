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
            <b>Project :</b> Retail Management System - Woolworths<br />
            <b>Role: </b> PL/SQL Developer<br/>
            <b>Duration: </b> Jan 2022 to Present<br/>
            <b>Language used:</b> SQL, PL/SQL, Unix<b>
            <br/>Details: </b>
            The project aimed to Managed inventory of all products, including purchase orders, sales orders, and product location tracking. Contributed to improving Woolworths' business operations through effective data management.<br />

          </div>} />
         <Card pno='02'
          preview="This is Unilever Project, where they can optimize the future expenses in different ways."
          details={<div>
            <b>Project :</b> Financial Management System Upgrade - Westpac<br />
            <b>Role: </b> PL/SQL Developer<br/>
            <b>Duration: </b> Nov 2020 to Dec 2021<br/>
            <b>Language used:</b> SQL, PL/SQL, Unix<b>
            <br/>Details: </b>
             The project aimed to handled monitoring, troubleshooting, and resolving critical issues in the backend database systems to minimize downtime and ensure seamless business continuity.
             <br />


          </div>} />

         <Card pno='01'
          preview="This is Unilever Project, where they can optimize the future expenses in different ways."
          details={<div>
            <b>Project :</b> B2B Wholesale Marketplace with Vendor Managed Inventory (VMI)<br />
            <b>Role: </b> Wordpress Engineer<br/>
            <b>Duration: </b> Jul 2019 to Sep 2020<br/>
            <b>Language used:</b> PHP, MYSQL, CMS<b>
            <br/>Details: </b>
            Development of robust e-commerce platforms using WordPress and WooCommerce, covering product catalog management, payment gateway integration, shipping solutions, and order processing.
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
