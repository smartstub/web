import { Pencil } from "lucide-react"; // Correct Edit Icon

export default function UserEditForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Input Fields */}
          {[
            { label: "Name", id: "name" },
            { label: "Address", id: "address" },
            { label: "Country", id: "country" },
            { label: "Total Working Hours", id: "workingHours" },
            { label: "DOB", id: "dob" },
            { label: "Email", id: "email" },
            { label: "Password", id: "password" },
            { label: "Phone", id: "phone" },
          ].map((field) => (
            <div key={field.id} className="relative">
              <label className="text-gray-700 font-medium">{field.label}:</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  id={field.id}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <Pencil className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-700 cursor-pointer w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex justify-start mt-6">
          <button className="bg-green-700 text-[#fefefe] font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-800 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
