import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

const ProfileImagePicker = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="relative w-32 h-32">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full border-4 border-[#b4e930] overflow-hidden">
        <img
          src={image || "https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg"} // Default placeholder
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Edit Icon */}
      <label htmlFor="fileInput" className="absolute top-2 right-2 bg-green-600 p-2 rounded-full cursor-pointer">
        <FiEdit className="text-[#fefefe]" size={16} />
      </label>

      {/* Hidden File Input */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImagePicker;
