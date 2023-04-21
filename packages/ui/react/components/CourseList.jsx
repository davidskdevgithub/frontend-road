import { CourseCard } from './CourseCard'
import '../../styles/components/CourseList.css'

export function CourseList ({ courses }) {
  return (
    <div className='course-list'>
      {
        courses.map(course => {
          const { id, nombre, imgUrl, fechaInscrpcion, horasSemanales } = course
          const src = `/assets/img/${imgUrl}.png`
          return (
            <CourseCard
              key={id}
              title={nombre}
              src={src}
              fechaInscrpcion={fechaInscrpcion[0]}
              horasSemanales={horasSemanales}
            />
          )
        })
      }
    </div>
  )
}
