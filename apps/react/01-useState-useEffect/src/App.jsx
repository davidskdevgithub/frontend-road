import { useState, useEffect } from 'react'
import { getCourses } from './services/courses'

import { CourseList } from 'ui-react'
import './App.css'

export default function App () {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    getCourses().then(coursesAPI => setCourses(coursesAPI))
  }, [])
  return (
    <div className='app-container'>
      <h1>useState + useEffect</h1>
      {
        courses.length && <CourseList courses={courses} />
      }
    </div>
  )
}
