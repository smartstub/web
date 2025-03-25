import { FaUser, FaMapMarkerAlt, FaVenusMars, FaPhone, FaEnvelope, FaCalendar, FaIdCard, FaFileInvoice } from "react-icons/fa";

const UserForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm">Full Name</label>
          <div className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
            <FaUser className="text-gray-500 mr-2 text-xs" />
            <input type="text" placeholder="Name" className="w-full border-none bg-transparent outline-none text-gray-700 text-xs h-8" />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm">Address</label>
          <div className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
            <FaMapMarkerAlt className="text-gray-500 mr-2 text-xs" />
            <input type="text" placeholder="Type Address" className="w-full bg-transparent border-none outline-none text-gray-700 text-xs h-8" />
          </div>
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm">Gender</label>
          <div className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
            <FaVenusMars className="text-gray-500 mr-2 text-xs" />
            <select className="w-full bg-transparent outline-none border-none text-gray-700 text-xs h-8">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm">Phone Number</label>
          <div className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
            <FaPhone className="text-gray-500 mr-2 text-xs" />
            <input type="tel" placeholder="Type Number" className="w-full bg-transparent border-none outline-none text-gray-700 text-xs h-8" />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm">Email</label>
          <div className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
            <FaEnvelope className="text-gray-500 mr-2 text-xs" />
            <input type="email" placeholder="Email" className="w-full bg-transparent border-none outline-none text-gray-700 text-xs h-8" />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm">DOB</label>
          <div className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
            <FaCalendar className="text-gray-500 mr-2 text-xs" />
            <input type="date" className="w-full bg-transparent outline-none border-none text-gray-700 text-xs h-8" />
          </div>
        </div>

        {/* National ID */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm">National Identification Number</label>
          <div className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
            <FaIdCard className="text-gray-500 mr-2 text-xs" />
            <input type="text" placeholder="ID Number" className="w-full bg-transparent outline-none border-none text-gray-700 text-xs h-8" />
          </div>
        </div>

        {/* Tax Holding Number */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-sm">Tax Holding Number</label>
          <div className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
            <FaFileInvoice className="text-gray-500 mr-2 text-xs" />
            <input type="text" placeholder="Type Number" className="w-full bg-transparent outline-none border-none text-gray-700 text-xs h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
