import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CalendarPage = () => {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [reminders, setReminders] = useState({});
  const [showEventForm, setShowEventForm] = useState(false);
  const [eventDate, setEventDate] = useState(null);
  const [eventText, setEventText] = useState("");

  const months = [
    "January", "February", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

  const handlePrevMonth = () => {
    setSelectedMonth(prev => (prev === 0 ? 10 : prev - 1));
    if (selectedMonth === 0) setSelectedYear(prev => prev - 1);
  };

  const handleNextMonth = () => {
    setSelectedMonth(prev => (prev === 10 ? 0 : prev + 1));
    if (selectedMonth === 10) setSelectedYear(prev => prev + 1);
  };

  const addReminder = (date) => {
    setShowEventForm(true);
    setEventDate(date);
  };

  const saveReminder = () => {
    if (eventText) {
      setReminders(prev => ({
        ...prev,
        [`${selectedYear}-${selectedMonth}-${eventDate}`]: eventText
      }));
    }
    setShowEventForm(false);
    setEventText("");
  };

  return (
    <div className="p-5 w-full mx-auto bg-white shadow-md rounded-md flex flex-col items-center relative">
      <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={() => window.location.href = '/'}>
        <XMarkIcon className="w-6 h-6" />
      </button>
      <div className="flex justify-center items-center mb-4 w-full">
        <button className="p-2 bg-gray-200 rounded-full" onClick={handlePrevMonth}><ChevronLeftIcon className="w-5 h-5" /></button>
        <h2 className="text-2xl font-semibold mx-4">{months[selectedMonth]} {selectedYear}</h2>
        <button className="p-2 bg-gray-200 rounded-full" onClick={handleNextMonth}><ChevronRightIcon className="w-5 h-5" /></button>
      </div>
      <select className="w-full p-2 border rounded mb-3" value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
        {Array.from({ length: 10 }, (_, i) => currentDate.getFullYear() - 5 + i).map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <div className="grid grid-cols-7 gap-1 text-center font-semibold border-t border-b py-2 w-full">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className="p-2 text-gray-600">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center w-full">
        {Array(firstDayOfMonth).fill(null).map((_, i) => (
          <div key={i} className="p-2"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(date => (
          <div key={date} className={`p-4 border rounded-md cursor-pointer h-24 flex flex-col items-start justify-start ${reminders[`${selectedYear}-${selectedMonth}-${date}`] ? 'bg-blue-100' : 'bg-gray-50'}`} onClick={() => addReminder(date)}>
            <span className="text-sm font-semibold">{date}</span>
            {reminders[`${selectedYear}-${selectedMonth}-${date}`] && <span className="text-xs text-blue-600 mt-1">{reminders[`${selectedYear}-${selectedMonth}-${date}`]}</span>}
          </div>
        ))}
      </div>
      {showEventForm && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-md shadow-lg w-1/3">
          <h3 className="text-lg font-semibold mb-2">Add Event</h3>
          <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Enter event" value={eventText} onChange={(e) => setEventText(e.target.value)} />
          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setShowEventForm(false)}>Cancel</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={saveReminder}>Save</button>
          </div>
        </div>
      )}
      <div className="mt-6 w-full">
        <h3 className="text-xl font-bold mb-2">Upcoming Due</h3>
        <div className="border-t pt-2">
          {Object.keys(reminders).length > 0 ? (
            Object.keys(reminders).map((key, index) => {
              const [year, month, day] = key.split("-");
              return (
                <div key={index} className="p-2 border-b flex justify-between">
                  <span className="font-semibold">{months[month]} {day}, {year}</span>
                  <span className="text-gray-700">{reminders[key]}</span>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No upcoming dues</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
