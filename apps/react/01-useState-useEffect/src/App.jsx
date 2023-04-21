import { useState } from 'react'
import cursesWithResults from './mocks/courses-with-results.json'
import { CourseList } from 'ui-react'
import './App.css'

export default function App () {
  const [courses, setCourses] = useState(cursesWithResults)
  return (
    <div className='app-container'>
      <h1>useState + useEffect</h1>
      <CourseList courses={courses} />
    </div>
  )
}
