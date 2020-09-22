import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import Course from './Course'
import TermSelector from './TermSelector'

const termMap = {F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
    termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Spring');

    const termCourses = courses.filter(course=>selectedTerm === getCourseTerm(course));

    return (
    <ScrollView style={styles.courseList}>
        <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
        {termCourses.map(course => <Course key={course.id} course={course} />)}
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    courseButton: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 60,
        padding: 10,
        minWidth: 90,
        maxWidth: 90,
        backgroundColor: '#66b0ff',
    },
    courseText:{
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default CourseList;