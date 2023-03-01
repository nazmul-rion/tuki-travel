import { useEffect } from "react";
import { useState } from "react"

const PackagesApi = () => {
    const [tourpackages, settourpackages] = useState([]);
    useEffect(() => {
        fetch('https://tuki-travel-nazmul-rion.onrender.com/allpackages')
            .then(res => res.json())
            .then(data => settourpackages(data));
    }, [tourpackages]);
    return [tourpackages, settourpackages];
}

export default PackagesApi;