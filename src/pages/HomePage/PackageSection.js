import React from 'react'
import PackagesApi from '../../hooks/PackagesApi';
import PackageCard from './PackageCard';

const PackageSection = () => {
    const [tourpackages] = PackagesApi();

    return (
        <>

            <div className="row g-4">
                {
                    tourpackages.map(tourpackage => <PackageCard

                        key={tourpackage.img}
                        tourpackage={tourpackage}
                    >
                    </PackageCard>)
                }
            </div >

        </>

    )
}
export default PackageSection
