import { experience } from '../../Portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience) return null

  return (
    <section className='section contact center' id='experience'>
      <h2 className='section__title'>Experience</h2>
      {
        experience.map((exp)=>{
            return<>
            <h4>{exp.company}</h4><span>{exp.joining}-{exp.left}</span>
            <p>{exp.description}</p>
            </>
        })
      }
    </section>
  )
}

export default Experience;
