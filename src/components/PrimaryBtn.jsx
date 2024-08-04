import React from 'react';

function PrimaryButton({ children }) {
  return (
    <button className="btn-primary rounded-full text-white font-medium text-sm px-3 py-3 text-center">
      {children}
    </button>
  );
}

export default PrimaryButton;
