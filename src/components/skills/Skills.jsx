import React from 'react'
import './skills.css'
import { FiFile } from 'react-icons/fi'
import aboutSectionImage from '../../websitedesignimages/heropicture.jpg'
import { BiBadge, BiHeadphone } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import Buttons from '../Buttons'
import { GoVerified } from 'react-icons/go'

const Skills = () => {

    const skillsData = [
        {
            mainTitle: "Frontend Developer",
            skillSetLeft: [
                {
                    language: "HTML",
                    experience: "Basic"
                },
                {
                    language: "CSS",
                    experience: "Advanced"
                },
                {
                    language: "JavaSript",
                    experience: "Basic"
                },
            ],
            skillSetRight: [
                {
                    language: "Bootstarap",
                    experience: "Basic"
                },
                {
                    language: "React",
                    experience: "Advanced"
                },
                {
                    language: "Redux",
                    experience: "Basic"
                },
            ]

        },
        {
            mainTitle: "Backend Developer",
            skillSetLeft: [
                {
                    language: " Node.js",
                    experience: "Basic"
                },
                {
                    language: "Express",
                    experience: "Advanced"
                },
                {
                    language: "MongoDB",
                    experience: "Basic"
                },
            ],
            skillSetRight: [
                {
                    language: "HTML",
                    experience: "Basic"
                },
                {
                    language: "CSS",
                    experience: "Advanced"
                },
                {
                    language: "JavaSript",
                    experience: "Basic"
                },
            ]

        }
    ]

    return (
        <div className='about-section' id='about'>


            <div className='about-section-top'>
                <h1>Skills</h1>
                <span>My technical level</span>
            </div>



            <div className='skills-section-bottom'>
                {skillsData.map((data, index) => {
                    return (
                        <div className='skills-section-bottom-main'>
                            <h1 className='skills-section-bottom-main-top'>{data.mainTitle}</h1>

                            <div className='skills-section-bottom-main-bottom'>

                                {data.skillSetLeft.map((leftData, index) => {
                                    return (
                                        <div className='skills-section-bottom-main-bottom-leftColumn'>
                                            <div className='inner-data'>
                                                <h3><GoVerified /></h3>

                                                <div>
                                                    <h2>{leftData.language}</h2>
                                                    <span>{leftData.experience}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}



                                <div className='skills-section-bottom-main-bottom-rightColumn'></div>
                            </div>
                        </div>
                    )
                })}

            </div>


        </div>
    )
}

export default Skills
