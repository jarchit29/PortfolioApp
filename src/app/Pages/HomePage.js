"use client";

import React, { useState } from 'react'
import Button from '../Components/Button'
import NavBar from '../Components/NavBar'
import moment from 'moment/moment'
import Footer from '../Components/Footer';
import SocialHandels from '../Components/SocialHandels';
import BlogCard from '../Components/BlogCard';


const HomePage = () => {


    const currentDate = moment();


    // Create a start date (arbitrary, since we're only interested in the duration)
    const startDate = moment("2021-05-01");

    const totalDays = currentDate.diff(startDate, 'days')

    // Add the total number of days to the start date to get the target date
    const targetDate = startDate.clone().add(totalDays, 'days');

    // Calculate the difference in years, months, and days
    const years = targetDate.diff(startDate, 'years');
    startDate.add(years, 'years');

    const months = targetDate.diff(startDate, 'months');
    startDate.add(months, 'months');

    const days = targetDate.diff(startDate, 'days');

    // Create the difference string
    const difference = `${years} years, ${months} months, ${days} days`;

    // Data of What sets me apart section
    const capsuleData = [{ title: "Technical Expertise ", description: "Proficient in developing web and mobile applications using the MERN stack and Ionic, ensuring scalable and user-friendly solutions." },
    { title: "Business Analysis Skills", description: "Adept at gathering requirements, stakeholder communication, and bridging the gap between business needs and technical teams." },
    { title: "Holistic Problem- Solving ", description: "Combines technical and business acumen to identify, analyze, and resolve complex challenges effectively." },
    { title: "Adaptability to Emerging Trends ", description: "Currently pursuing an MBA in Data Analysis to enhance data-driven decision-making capabilities." },
    { title: "Project Ownership", description: " Experienced in end-to-end project management, from requirement analysis to delivery and post-deployment support." },
    { title: "Strong Communication", description: "Skilled in articulating technical concepts to non-technical stakeholders, fostering seamless collaboration." },
    { title: "Focus on Impact ", description: "Committed to delivering innovative solutions that drive business growth and operational efficiency." },


    ]



    return (
        <div>

            <div>
                <img src='/suited.png' className='imgH object-center' />

            </div>

            <div class="relative h-3 w-3 ...">
                <div class="absolute inset-y-0 left-0 w-16 ...">
                    <SocialHandels />
                </div>
            </div>



            <div className='text-center'>

                <span className='heading-primary text-highlighter'>

                    Hi, I am

                </span>

                <span className='heading-primary text-highlighters mx-3'>
                    Archit Jain
                </span>

            </div>

            <div className='flex justify-center'>


                <div className='w-3/4 p-primary text-tertiory text-justify'>

                    <div>
                        <span className='mx-3'>

                            A tech-savvy professional with
                        </span>

                        <span className='text-highlighter font-bold'>
                            {difference}
                        </span>

                        <span className='mx-3'>

                            of industry experience. I specialize in bridging the gap between business and technology as an Expert Tech and Functional Business Analyst, Full Stack Developer, and Hybrid Mobile App Innovator.
                        </span>

                    </div>

                </div>

            </div>


            <div>

                <div className='mt-5 text-center'>
                    <span className='heading-primary-semi text-highlighter colorGradient'>

                        What Sets me 

                    </span>

                    <span className='heading-primary-semi text-highlighters mx-3'>
                        Apart ? 
                    </span>
                </div>


                <div className="mt-8 flexBox mb-8 justify-center">



                    {capsuleData.map((data) => {

                        return (
                            <BlogCard
                                title={data.title}
                                description={data.description}
                            />
                        )

                    })}

                </div>
            </div>


            <div className='text-center'>

                <div className='m-12'>
                    <Button buttonLabel='Know About Me' />
                </div>
            </div>

        </div>


    )
}

export default HomePage