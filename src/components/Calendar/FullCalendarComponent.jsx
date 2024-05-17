import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "bootstrap/dist/css/bootstrap.min.css";

const localizer = momentLocalizer(moment);

export default function FullCalendarComponent() {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventTitle, setEventTitle] = useState('');

    const handleSelectSlot = (slotInfo) => {
        setShowModal(true);
        setSelectedDate(slotInfo.start);
    };

    const saveEvent = () => {
        if (eventTitle && selectedDate) {
            const newEvent = {
                title: eventTitle,
                start: selectedDate,
                end: moment(selectedDate).add(1, 'hours').toDate(),
            };
            setEvents([...events, newEvent]);
            setShowModal(false);
            setEventTitle('');
        }
    };

    return (
        <div style={{ height: '90vh', width: '100vw' }}>
            <Calendar
                localizer={localizer} 
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: '50px' }}
                selectable={true}
                onSelectSlot={handleSelectSlot}
            />
            {showModal && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <label>Event Title:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='eventTitle'
                                    value={eventTitle}
                                    onChange={(e) => setEventTitle(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={saveEvent} className='btn btn-primary'>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}