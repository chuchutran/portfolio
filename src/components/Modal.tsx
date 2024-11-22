import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal when clicking on the backdrop
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick} // Detect clicks on the backdrop
    >
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        {children}
      </div>
    </div>
  );
};

export default Modal;
