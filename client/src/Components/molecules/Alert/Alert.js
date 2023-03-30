import React from "react";
const Alert = ({ type, message }) => {
  return (
    <>
      {type === 401 ? (
        <div
          class="p-4 w-full flex justify-center items-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 select-none"
          role="alert"
        >
          <span class="font-medium">{`Erreur de type ${type}! `}</span>{" "}
          <span className="ml-2">{message}</span>
        </div>
      ) : (
        <div
          class="p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 select-none"
          role="alert"
        >
          <span class="font-medium">Success alert!</span> Change a few things up
          and try submitting again.
        </div>
      )}
    </>
  );
};

export default Alert;
