import { HotelForm } from "../../components/Hotel/HotelForm"
import { HotelList } from "../../components/Hotel/HotelList"
import { useState } from "react";

export const Hotel = () => {
    const [selectedHotel, setSelectedHotel] = useState(null); // Estado para almacenar el hotel seleccionado

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                <HotelForm selectedHotel={selectedHotel} />
            </div>
            <div>
                <HotelList setSelectedHotel={setSelectedHotel} /> {/* Pasar setSelectedHotel como prop */}
            </div>
        </div>
    )
}