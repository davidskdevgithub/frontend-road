import { useCourses } from './hooks/useCourses'

import { CourseList } from 'ui-react'
import './App.css'

export default function App () {
  const { courses } = useCourses()

  return (
    <div className='app-container'>
      <h1>useState + useEffect</h1>
      {
        courses.length && <CourseList courses={courses} />
      }
    </div>
  )
}
