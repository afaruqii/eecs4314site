import { about } from '../../portfolio'
import './WelcomeAbout.css'

const Team = () => {
  const { name } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
         EECS 4314 E
        </h1>
      )}

      <h2 className='about__role'>Fall 2022</h2>
      <p className='about__desc'>Welcome to our team website! 👋🏼 All assignments posted below 👇🏼 </p>

      
    </div>
  )
}

export default Team
