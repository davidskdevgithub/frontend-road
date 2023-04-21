import '../../styles/components/CourseCard.css'

export function CourseCard ({ title, src, fechaInscrpcion, horasSemanales }) {
  const { empieza, termina } = fechaInscrpcion
  return (
    <div className='course-card'>
      <div className='course-card__figure'>
        <img
          src={src}
          alt={title}
          className='course-card__img'
        />
      </div>
      <div className='course-card__data'>
        <h3 className='course-card__title'>
          {title}
        </h3>
        <div className='course-card__inscription'>
          <div className='course-card__inscription-from'>
            Desde: {empieza}
          </div>
          <div className='course-card__inscription-until'>
            Hasta: {termina}
          </div>
        </div>
        <div className='course-card__week-time'>
          Horas Semanales: {horasSemanales}
        </div>
      </div>
    </div>
  )
}
