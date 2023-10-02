import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function WorkTL() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="May 2022 - Present"
        icon={
          <div className="bg-white rounded-full w-full h-full flex items-center justify-center absolute">
            <img src="/images/krieger.webp" alt="Krieger Digital" />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">Krieger Digital</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Senior Front End Engineer
        </h4>
        <p>
          Frontend Development, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="February 2021 - April 2022"
        icon={
          <div className="bg-white rounded-full w-full h-full flex items-center justify-center absolute">
            <img src="/images/perficient.webp" alt="Perficient Latin America" />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">
          Perficient Latin America
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Web IU Software Designer
        </h4>
        <p>
          Frontend Development, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="February 2018 - January 2021"
        icon={
          <div className="bg-white rounded-full w-full h-full flex items-center justify-center absolute">
            <img src="/images/globant.webp" alt="Globant" />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">Globant</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Web IU Software Designer
        </h4>
        <p>
          Frontend Development, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="March 2015 - January 2018"
        icon={
          <div className="bg-white rounded-full w-full h-full flex items-center justify-center absolute">
            <img src="/images/prodigious.webp" alt="Prodigious Latam" />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">Prodigious Latam</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Web IU Software Designer
        </h4>
        <p>
          Frontend Development, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
