import { TbBriefcase, TbSchool, TbStar } from 'react-icons/tb';
import SectionHeader from '../SectionHeader/SectionHeader';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    return (
        <div id="education">
            <SectionHeader header={"Background"} message={"My Education"} />
            <br />
            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                        date="2024"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<TbSchool />}
                    >
                        <h4 className="text-2xl font-bold vertical-timeline-element-title">BSc (Hons) in IT</h4>
                        <br />
                        <h3 className="text-lg font-medium vertical-timeline-element-subtitle">Azteca University - International Programs</h3>
                        <small>San Antonio, Chalco, Mexico</small>
                        <p>CGPA: 3.45 / 4</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'blueviolet', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid blueviolet' }}
                        date="2019"
                        iconStyle={{ background: 'blueviolet', color: '#fff' }}
                        icon={<TbSchool />}
                    >
                        <h4 className="text-2xl font-bold vertical-timeline-element-title">Diploma in Engineering</h4>
                        <br />
                        <h3 className="text-lg font-medium vertical-timeline-element-subtitle">Chittagong Polytechnic Institute</h3>
                        <small>Nasirabad, Chittagong, Bangladesh</small>
                        <p>CGPA: 3.13 / 4</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'teal', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid teal' }}
                        date="2014"
                        iconStyle={{ background: 'teal', color: '#fff' }}
                        icon={<TbSchool />}
                    >
                        <h4 className="text-2xl font-bold vertical-timeline-element-title">Dakhil / SSC</h4>
                        <br />
                        <h3 className="text-lg font-medium vertical-timeline-element-subtitle">Bharella Shah Israil Kamil Madrasah</h3>
                        <small>Bharella, Cumilla, Bangladesh</small>
                        <p>GPA: 5.00 / 5</p>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<TbStar />}
                    /> */}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Education;