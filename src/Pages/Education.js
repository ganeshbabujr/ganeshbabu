import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faLink, faBook, faSoccerBall, faGraduationCap } from '@fortawesome/free-solid-svg-icons'


function Education() {
    return (
        <div className='dp education'>

            <VerticalTimeline lineColor='#d2e3d2'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2008 - 2009"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Secondary Education</h3>
                    <h4 className="vertical-timeline-element-subtitle">Islamiah Higher Secondary School, Vellore</h4>
                    <p>
                       Board: SSLC, Tamil Nadu<br/>
                       Percentage: 69%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2009 - 2011"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Higher Secondary Education</h3>
                    <h4 className="vertical-timeline-element-subtitle">Islamiah Higher Secondary School, Vellore</h4>
                    <p>
                       Board: HSC, Tamil Nadu<br/>
                       Percentage: 55%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1.1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2011 - 2015"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Engineering (Computer Science &  Enginnering)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Priyadarshini Engineering College, Vellore</h4>
                    <p>
                    Board: Anna University, Chennai<br/>
                       CGPA: 6.09
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education
