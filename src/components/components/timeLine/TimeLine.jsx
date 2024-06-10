import React from 'react'
import CodeIcon from '@mui/icons-material/Code';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = () => {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2021 - May 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CodeIcon />}
                >
                    <div className='salesianos-text'>
                        <h3><b>CFGS Desarrollo de Aplicaciones Multiplataforma</b></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae numquam, hic distinctio itaque quis doloribus animi non aspernatur illum, nulla, dolores dolorem delectus voluptatibus est fuga. Mollitia, aut cum?
                        </p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2021 - May 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CodeIcon />}
                >
                    <div className='salesianos-text'>
                        <h3><b>CFGS Desarrollo de Aplicaciones Multiplataforma</b></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae numquam, hic distinctio itaque quis doloribus animi non aspernatur illum, nulla, dolores dolorem delectus voluptatibus est fuga. Mollitia, aut cum?
                        </p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2021 - May 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CodeIcon />}
                >
                    <div className='salesianos-text'>
                        <h3><b>CFGS Desarrollo de Aplicaciones Multiplataforma</b></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae numquam, hic distinctio itaque quis doloribus animi non aspernatur illum, nulla, dolores dolorem delectus voluptatibus est fuga. Mollitia, aut cum?
                        </p>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default TimeLine