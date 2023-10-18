import './Skill.css';
import boy from '../images/boy.png'
import React from 'react'

const Skill = () => {
  return (
    <div className="skill">
      <div >
        <div className="head">
          <h1 >Skills</h1>
        </div>
        <div className="text">
          <p >As a ReactJS front-end web developer, I possess a versatile skill set that enables me to craft engaging and user-friendly digital experiences. My proficiency in HTML, CSS, and JavaScript empowers me to build responsive and interactive user interfaces. </p>

        </div>
        <div className="p-img">
          <img className="imgg" src={boy} alt="boy" />
        </div>
      </div>

      


    </div>
  )
}

export default Skill
