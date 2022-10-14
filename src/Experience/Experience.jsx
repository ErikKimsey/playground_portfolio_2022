import React, { useEffect, useState, useRef } from 'react';
import "./experience.scss";
import { EXPERIENCE_DATA } from "./experience_data";
import ExperienceItem from './ExperienceItem';

export default function Experience() {

    const containerRef = useRef();
    const [data, setData] = useState();

    useEffect(() => {
        if (EXPERIENCE_DATA && EXPERIENCE_DATA.length > 0) {
            setData(EXPERIENCE_DATA);
        }
    }, []);

    /***
     * TODO:
     * -- Initialize Experience as collapsed,
     * -- text "Experience" is not initially displayed,
     * -- display graphic, if hovered-on, will display "Experience",
     * -- if graphic or text is clicked on, then Experience list will expand/be displayed.
     */

    return (
        <div className="experienceContainer" ref={containerRef}>

            <div className='experienceHeader'>
                <div className='label'>Experience In Brief</div>
            </div>
            <div className='experienceContent'>
                {
                    data && data.map((e, i) => {
                        return <ExperienceItem name={e.name} stack={e.stack} about={e.about} dates={e.dates} role={e.role} url={e.url} github={e.github} key={e.stack} />
                    })
                }
            </div>
        </div>
    );
}
