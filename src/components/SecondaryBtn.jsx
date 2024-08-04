import React from 'react';

function SecondaryButton({ children }) {
  return (
    <button className=" btn-secondary rounded-full text-white font-medium text-sm px-5 py-3 text-center">
      {children}
    </button>
  );
}

export default SecondaryButton;
