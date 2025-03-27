import React from "react";

const documents = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply dummy text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/300x200",
  },
];

const DocumentGrid = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={doc.image} alt={doc.title} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="mt-4 text-lg font-bold text-green-800">{doc.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{doc.description}</p>
            <button className="mt-4 bg-green-600 text-[#fefefe] py-2 px-4 rounded-full hover:bg-green-700">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentGrid;
