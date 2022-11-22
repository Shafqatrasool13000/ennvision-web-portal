import React from 'react'
import { Helmet } from 'react-helmet'
import SocialFooter from '../../Components/SocialFooter/SocialFooter';
import Navbar from '../../Components/Navbar/AuthNavbar';


const Index = () => {

    return (
        <>
            <Helmet>
                <title>Resources</title>
            </Helmet>
            <Navbar/>
            <h4 className='mt-5'>
                Resources
            </h4>
            <SocialFooter/>

        </>
    )
}

export default Index