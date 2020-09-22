import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import Course from './Course'

const CourseList = ({courses}) => (
    <ScrollView>
        <View style={styles.courseList}>
        {courses.map(course=><Course key={course.id} course={course}/>)}
        </View>
    </ScrollView>
);

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