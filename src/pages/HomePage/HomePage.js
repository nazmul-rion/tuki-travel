import React from 'react'
import Banner from './Banner'
import PackageSection from './PackageSection'

const HomePage = () => {
    return (
        <div >

            <div>
                <Banner></Banner>
            </div>

            <div className="container my-5">
                <h1 className="text-center fw-bold text-highlighted mb-5">Select Our Best Popular Destinations</h1>
                <PackageSection></PackageSection>
            </div>



        </div>
    )
}

export default HomePage
