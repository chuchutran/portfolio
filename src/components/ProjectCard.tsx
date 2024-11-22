import React, { useState } from 'react';
import Modal from './Modal';

interface ProjectCardProps {
  title: string;
  techStack: string[];
  description: string;
  thumbnail: string; // URL to the thumbnail or demo GIF
  details?: string; // Additional details for the modal
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  techStack,
  description,
  thumbnail,
  details,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true); // Open the modal when card is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      {/* Card */}
      <div
        className="flex flex-col md:flex-row bg-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
        onClick={handleCardClick}
      >
        {/* Thumbnail */}
        <div className="w-full md:w-1/2">
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <img
            src={thumbnail}
            alt={`${title} demo`}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="mb-4">{details || 'No additional details available.'}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
