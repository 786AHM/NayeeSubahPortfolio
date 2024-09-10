import React from 'react'
// import './skills.css'
import './services.css'
import { SiWeightsandbiases } from 'react-icons/si'


const Services = () => {

    const servicesData = [
        {
            icon: <SiWeightsandbiases />,
            title: "Web Designer",
            shortTitle: "View More"
        },
        {
            icon: <SiWeightsandbiases />,
            title: "UI/UX Designer",
            shortTitle: "View More"
        },
        {
            icon: <SiWeightsandbiases />,
            title: "Branding Designer",
            shortTitle: "View More"
        },
    ]


    return (
        <div className='about-section' id='services'>


            <div className='about-section-top'>
                <h1>Services</h1>
                <span>What I Offer</span>
            </div>



            <div className='services-section-bottom' style={{display: "flex"}}>

                {servicesData.map((items, index) => {
                    return (
                        <div> 
                            <h3>{items.icon}</h3>
                            <h1>{items.title}</h1>
                            <span>{items.shortTitle}</span>
                        </div>
                    )
                })}



            </div>


        </div>
    )
}

export default Services
