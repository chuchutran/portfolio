import React, { useState } from 'react';
import Modal from './Modal';

interface XPCardProps {
  logo: string;
  companyName: string;
  time: string;
  description?: string; // Add description for modal content
}

const XPCard: React.FC<XPCardProps> = ({ logo, companyName, time, description }) => {
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
        className="bg-book shadow-md rounded-lg p-6 w-64 text-center cursor-pointer hover:shadow-lg transition-shadow"
        onClick={handleCardClick}
      >
        <img src={logo} alt={companyName} className="w-30 h-50 mx-auto mb-4 object-contain" />
        <h3 className="text-xl font-semibold mb-2">{companyName}</h3>
        <p className="text-gray-500">{time}</p>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold mb-4">{companyName}</h2>
        <p>{description || 'No additional details available.'}</p>
      </Modal>
    </>
  );
};

export default XPCard;
