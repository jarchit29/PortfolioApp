"use client";

import React, { useState } from 'react'
import Button from '../Components/Button'
import NavBar from '../Components/NavBar'
import moment from 'moment/moment'
import Footer from '../Components/Footer';
import SocialHandels from '../Components/SocialHandels';



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

                    Hi, I'm

                </span>

                <span className='heading-primary text-highlighters mx-3'>
                    Archit Jain
                </span>

            </div>

            <div className='flex justify-center'>


                <div className='w-3/4 p-primary text-tertiory'>

                    <div>
                        <span className='mx-3'>

                            A tech-savvy professional with
                        </span>

                        <span className='text-highlighter font-bold'>
                            {difference}
                        </span>

                        <span className='mx-3'>

                            of industry experience. I specialize in bridging the gap between business and technology as an Expert Tech and Functional Business Analyst, Full Stack Developer, and Hybrid Mobile App Innovator
                        </span>

                    </div>

                </div>


            </div>

            <div className='text-center'>

                <div className='m-12'>
                    <Button buttonLabel='Know About Me' />
                </div>
            </div>

            <Footer />

        </div>


    )
}

export default HomePage