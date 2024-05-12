import React from 'react'
import Button from '../Components/Button'
import NavBar from '../Components/NavBar'

const HomePage = () => {
    return (
        <div>

            <div>
                <img src='/suited.png' className='imgH object-center' />

            </div>

            <div className='text-center'>


                HI I am archit jain

                <div className='m-12'>
                    <Button buttonLabel='Know About Me' />
                </div>

            </div>


        </div>


    )
}

export default HomePage