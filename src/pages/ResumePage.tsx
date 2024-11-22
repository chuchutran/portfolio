import React from 'react';
import Resume from '/resume_wip.pdf?url';

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="flex justify-center">
        <iframe
          src={Resume}
          className="w-full max-w-5xl h-[90vh] border-2 border-gray-300 rounded-lg shadow-md"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumePage;
