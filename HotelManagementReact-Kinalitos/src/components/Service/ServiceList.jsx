import { useState, useEffect } from "react";
import { getServiceRequest } from "../../services/api";

export const ServiceList = ({ setSelectService }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const servicesResponse = await getServiceRequest();
                if (servicesResponse.data && Array.isArray(servicesResponse.data.services)) {
                    setServices(servicesResponse.data.services);
                } else {
                    console.error("Error al obtener los servicios", servicesResponse);
                }
            } catch (error) {
                console.error("Error al obtener los servicios", error);
            }
        };
        fetchData();
    }, []);

    const handleRowClick = (service) => {
        setSelectService(service);
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#64B494', height: "28em", marginLeft: "1px"}}>
            <div className="card" style={{ width: "30em", height:"400px"}}>
                <table className="table">
                    <thead>
                        <tr className="text-center" style={{}}>
                            <th>Nombre</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(service => (
                            <tr key={service.id} onClick={() => handleRowClick(service)}>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
