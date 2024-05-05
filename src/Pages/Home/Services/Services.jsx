import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-5">
            <div className="text-center space-y-5 ">
                <h2 className="text-orange-500 font-semibold text-2xl">services</h2>
                <h2 className="text-4xl md:text-5xl font-bold">Our Services Area</h2>
                <p className="w-full md:w-10/12 lg:w-8/12 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;