import './index.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  console.log('')
  return (
    <div className="FooterCont">
      <a href="https://github.com/Chandrasekharrebba99">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/rebba-chandrasekhar-ba-9493a4208/">
        <AiFillLinkedin />
      </a>
    </div>
  )
}

export default Footer
