import { useState, useEffect } from 'react'
import { getCourses } from '../services/courses'

export const useCourses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses().then(coursesAPI => setCourses(coursesAPI))
  }, [])

  return { courses }
}
