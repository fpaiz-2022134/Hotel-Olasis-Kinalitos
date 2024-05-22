import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSaveReservation } from "../../shared/hooks/Reservation/useSaveReservation";
import { getRoomRequest } from '../../services/api';

export const ReservationForm = ({ selectedReservation }) => {
    const { isLoading, saveReservation } = useSaveReservation();
    const [formData, setFormData] = useState({
        _id: null,
        entryDate: '',
        departureDate: '',
        price: '',
        roomId: ''
    });
    const [rooms, setRooms] = useState([]);

    // Fetch rooms data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const roomsResponse = await getRoomRequest();
                if (roomsResponse.data && Array.isArray(roomsResponse.data.rooms)) {
                    setRooms(roomsResponse.data.rooms);
                } else {
                    console.error("Error al obtener habitaciones:", roomsResponse);
                }
            } catch (error) {
                console.error("Error al obtener habitaciones:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedReservation) {
            setFormData({
                _id: selectedReservation._id,
                entryDate: selectedReservation.entryDate ? new Date(selectedReservation.entryDate) : null,
                departureDate: selectedReservation.departureDate ? new Date(selectedReservation.departureDate) : null,
                price: selectedReservation.price || '',
                roomId: selectedReservation.roomId || ''
            });
        }
    }, [selectedReservation]);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleDateChange = (date, name) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: date
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        saveReservation(formData);
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#4ba9df', width: '100%', height: '65vh', marginLeft: '20px' }}>
            <div style={{ marginBottom: '60px' }}>
                <h2>Reservation</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3" style={{ width: '45em' }}>
                    <div className="col-md-6">
                        <label htmlFor="entryDate" className="form-label">Entry Date</label>
                        <DatePicker
                            selected={formData.entryDate}
                            onChange={(date) => handleDateChange(date, 'entryDate')}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                            id="entryDate"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="departureDate" className="form-label">Departure Date</label>
                        <DatePicker
                            selected={formData.departureDate}
                            onChange={(date) => handleDateChange(date, 'departureDate')}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                            id="departureDate"
                        />
                    </div>
                </div>
                <div className="row mb-3" style={{ width: '45em' }}>
                    <div className="col-md-6">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input value={formData.price} onChange={handleChange} name="price" type="number" className="form-control" id="price" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="roomId" className="form-label">Room</label>
                        <select value={formData.roomId} onChange={handleChange} name="roomId" className="form-control" id="roomId">
                            <option value="">Seleccione una habitación</option>
                            {rooms.map(roomId => (
                                <option key={roomId._id} value={roomId._id}>{roomId.number}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>Agregar</button>
                </div>
            </form>
        </div>
    );
};
