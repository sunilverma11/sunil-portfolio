import { contact } from '../../Portfolio'
import './Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedIN from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact-container'>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn'>
          <EmailIcon/>
        </span>
      </a>
      <a href={contact.github}>
        <span type='button' className='btn'>
          <GitHubIcon/>
        </span>
      </a>
      <a href={contact.linkedin}>
        <span type='button' className='btn'>
          <LinkedIN/>
        </span>
      </a>
      </div>
      </section>
  )
}

export default Contact;
