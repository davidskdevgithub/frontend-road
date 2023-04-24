import { CourseCard } from './CourseCard'
import '../../styles/components/CourseList.css'

export function CourseList ({ courses }) {
  return (
    <div className='course-list'>
      {
        courses.map(course => {
          const { id, collectionId, nombre, image, fechaInscrpcionDesde, fechaInscrpcionHasta, horasSemanales } = course
          const src = `http://127.0.0.1:8090/api/files/${collectionId}/${id}/${image}`
          const fechaInscrpcion = {
            empieza: fechaInscrpcionDesde,
            termina: fechaInscrpcionHasta
          }
          return (
            <CourseCard
              key={id}
              title={nombre}
              src={src}
              fechaInscrpcion={fechaInscrpcion}
              horasSemanales={horasSemanales}
            />
          )
        })
      }
    </div>
  )
}
