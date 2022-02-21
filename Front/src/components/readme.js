import { FaServer, FaReact, FaSass, FaDocker, FaPython} from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { SiFlask, SiMicrosoftazure } from 'react-icons/si';


export default function Read_Me() {

    return (
        <div className="read-me">
            
            <h2><MdDesignServices className='icon' />Front End</h2>
            <p>The front-end part is pretty simple and created just to visualize how this app works. I used React JS and simple SASS to manage that. Page is hosted on Netlify - Free and Simple.</p>
            <FaReact className='technology-icon'/>
            <FaSass className='technology-icon'/>
            <h2><FaServer className='icon'/>Back End</h2>
            <p>The main functionality of this app is based on Python Face Recognition Library. Due to developers, the model has an accuracy of 99.38%. I created Flask App to build REST API connection and store data. The user's image provided during registration is compared to a new image taken during the "authorization" process. If there will be a "Match" app returning the name of the user. Of course, this cant be implemented as fully functional authentication but as one more step in that process? Why not?</p>
            <br />
            <p>The app is run with a docker container, mainly because I found some problem with deploying pure Flask applications on servers. I deployed the app on Microsoft Azure. Currently, I am working on fixing problems with performance with a connection between Front End and Back End.</p>
            <FaPython className='technology-icon'/>
            <SiFlask className='technology-icon'/>
            <FaDocker className='technology-icon'/>
            <SiMicrosoftazure className='technology-icon'/>
        </div>
    )

}