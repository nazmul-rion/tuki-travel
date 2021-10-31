import React from 'react'
import { Spinner } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import PackagesApi from '../../hooks/PackagesApi';
import PackageCard from './PackageCard';

const PackageSection = () => {
    const [tourpackages] = PackagesApi();
    if (tourpackages.length === 0) {
        return <div className="d-flex justify-content-center">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={300}
                width={300}

            />
        </div>
    }
    return (
        <>

            <div className="row g-4">
                {
                    tourpackages.map(tourpackage => <PackageCard

                        key={tourpackage._id}
                        tourpackage={tourpackage}
                    >
                    </PackageCard>)
                }
            </div >

        </>

    )
}
export default PackageSection
