import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 className="page-title">Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - present"
            iconStyle={{ background: '#3b82f6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Matillion</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineering Intern</h4>
            <p>
              CI/CD Integration, GenAI/LLM, API Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2024 - May 2025"
            iconStyle={{ background: '#3b82f6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">MIT CSAIL</h3>
            <h4 className="vertical-timeline-element-subtitle">Undergraduate Researcher</h4>
            <p>
              Database Management, Frontend Development, Data Visualization
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024 - May 2025"
            iconStyle={{ background: '#3b82f6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Scharzman College of Computing</h3>
            <h4 className="vertical-timeline-element-subtitle">SERC Scholar</h4>
            <p>
              Full-stack Development, User Experience, AI Ethics
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2024 - February 2025"
            iconStyle={{ background: '#3b82f6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">MIT Media Lab, Center for Constructive Communication</h3>
            <h4 className="vertical-timeline-element-subtitle">Undergraduate Researcher</h4>
            <p> Data Pipeline Development, Statistical Analysis, LLMs/AI
            </p>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2023 - August 2024"
            iconStyle={{ background: '#3b82f6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">MIT Picower Institute for Learning and Memory</h3>
            <h4 className="vertical-timeline-element-subtitle">Undergraduate Researcher</h4>
            <p> Machine Learning, Experimental Design, Data Analysis
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;