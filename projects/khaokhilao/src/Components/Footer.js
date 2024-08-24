import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopyright} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const heart = <FontAwesomeIcon icon={faHeart} />
    const copyWrite = <FontAwesomeIcon icon={faCopyright} />
    return(
        <div className='flex'>
            <p className='px-1'> Created By</p> 
            <p className='text-red-700 pl-1'> {heart}</p>            
            <a className='px-1' href='https://www.linkedin.com/in/pinkijha/' target='_blank'> Pinki Jha </a>
            <span className="px-1 text-gray-700"> {copyWrite} </span>
            <p className='px-1'>2024</p>
            <p className='px-1'> KhaoKhilao</p>
        </div>
    )
}
export default Footer;