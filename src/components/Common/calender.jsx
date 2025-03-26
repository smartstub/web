
const Calendar = ({ onDateSelect }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="border rounded-md p-4 bg-white shadow-md">
      <div className="grid grid-cols-7 font-bold text-center mb-2">
        {days.map((day) => (
          <div key={day} className="p-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center">
        {dates.map((date) => (
          <div
            key={date}
            className="p-2 cursor-pointer hover:bg-[#033701] rounded-md"
            onClick={() => onDateSelect(date)}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};