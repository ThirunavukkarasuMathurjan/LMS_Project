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
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

  const handlePrevMonth = () => {
    setSelectedMonth(prev => (prev === 0 ? 11 : prev - 1));
    if (selectedMonth === 0) setSelectedYear(prev => prev - 1);
  };

  const handleNextMonth = () => {
    setSelectedMonth(prev => (prev === 11 ? 0 : prev + 1));
    if (selectedMonth === 11) setSelectedYear(prev => prev + 1);
  };

  const addReminder = (date) => {
    setShowEventForm(true);
    setEventDate(date);
  };

  const saveReminder = () => {
    if (eventText) {
      setReminders(prev => {
        const key = `${selectedYear}-${selectedMonth}-${eventDate}`;
        const updatedReminders = { ...prev, [key]: [...(prev[key] || []), eventText] };
        return updatedReminders;
      });
    }
    setShowEventForm(false);
    setEventText("");
  };

  const sortedReminders = Object.keys(reminders).sort((a, b) => new Date(a) - new Date(b));

  return (
    <div className="flex w-full p-5 bg-white shadow-lg rounded-lg">
      {/* Calendar Section */}
      <div className="w-3/4 p-5">
        <div className="flex justify-between items-center mb-4">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={handlePrevMonth}>
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-semibold">{months[selectedMonth]} {selectedYear}</h2>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={handleNextMonth}>
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center font-semibold border-y py-3">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day} className="p-2 text-gray-700">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array(firstDayOfMonth).fill(null).map((_, i) => (
            <div key={i} className="p-2"></div>
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(date => (
            <div 
              key={date} 
              className="p-4 border rounded-lg cursor-pointer h-24 flex flex-col items-start justify-start hover:bg-gray-100" 
              onClick={() => addReminder(date)}
            >
              <span className="text-sm font-semibold">{date}</span>
              {reminders[`${selectedYear}-${selectedMonth}-${date}`]?.map((event, idx) => (
                <span key={idx} className="text-xs text-blue-600 mt-1">{event}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Upcoming Events Section */}
      <div className="w-1/4 p-5 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Upcoming Events</h3>
        <div className="border-t pt-3">
          {sortedReminders.length > 0 ? (
            sortedReminders.map((key, index) => {
              const [year, month, day] = key.split("-");
              return (
                <div key={index} className="p-3 border-b flex flex-col bg-white rounded-lg mb-2">
                  <span className="font-semibold">{months[month]} {day}, {year}</span>
                  {reminders[key].map((event, i) => (
                    <span key={i} className="text-gray-800">{event}</span>
                  ))}
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No upcoming events</p>
          )}
        </div>
      </div>
      
      {/* Event Form Modal */}
      {showEventForm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <h3 className="text-lg font-semibold mb-4">Add Event</h3>
            <input 
              type="text" 
              className="w-full p-3 border rounded mb-3" 
              placeholder="Enter event" 
              value={eventText} 
              onChange={(e) => setEventText(e.target.value)}
            />
            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500" onClick={() => setShowEventForm(false)}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={saveReminder}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;