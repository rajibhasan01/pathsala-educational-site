import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Career from '../Career/Career';
import Courses from '../Courses/Courses';

const Skills = () => {
    useDocumentTitle('Skill')
    return (
        <div>
            <Career />
            <Courses></Courses>
        </div>
    );
};

export default Skills;