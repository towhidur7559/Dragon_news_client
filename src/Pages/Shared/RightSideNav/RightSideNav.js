import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';




const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);


    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn =()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
     
    return (
        <div>
            <ButtonGroup className='mb-2' vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> LogIn With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> LogIn With Github</Button>
            </ButtonGroup>
            <div className="mt-4">
                <h4>
                    Find Us On
                </h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="">
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;