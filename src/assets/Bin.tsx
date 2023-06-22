import React from 'react';

const Bin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // style='width: 100%;height: 100%;'
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <g fill="#505050" fillRule="evenodd">
        <path
          d="M8 7v12h8V7H8zM7 6h10v14H7V6z"
          fillRule="nonzero"
          fill="#4D4D4D"
        ></path>
        <path
          d="M10 5v1h4V5h-4zM9 4h6v3H9V4z"
          fillRule="nonzero"
          fill="#4D4D4D"
        ></path>
        <path d="M10 9h1v7h-1zM13 9h1v7h-1zM6 6h12v1H6z" fill="#4D4D4D"></path>
      </g>
    </svg>
  );
};

export default Bin;
