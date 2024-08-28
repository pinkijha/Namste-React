import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const heart = <FontAwesomeIcon icon={faHeart} />;
    const copyWrite = <FontAwesomeIcon icon={faCopyright} />;
    
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center text-center p-4 bg-gray-100">
            <p className="px-1">Created By</p> 
            <p className="text-red-700 pl-1">{heart}</p>            
            <a 
                className="px-1 text-blue-600 hover:text-blue-800" 
                href="https://www.linkedin.com/in/pinkijha/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Pinki Jha
            </a>
            <span className="px-1 text-gray-700">{copyWrite}</span>
            <p className="px-1">2024</p>
            <p className="px-1">KhaoKhilao</p>
        </div>
    );
};

export default Footer;
