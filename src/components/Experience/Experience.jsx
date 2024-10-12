import uniqid from 'uniqid'
import { experience } from '../../Portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience) return null

  return (
    <section className='section contact center' id='experience'>
      <h2 className='section__title'>Experience</h2>
      {
        experience.map((exp)=>{
            return<div key={uniqid}>
            <h3>{exp.company}</h3>started from: <span>{exp.joining} - to:{exp.left}</span>
            <p>{exp.description}</p>
            </div>
        })
      }
    </section>
  )
}

export default Experience;
