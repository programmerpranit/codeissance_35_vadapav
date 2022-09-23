import React from "react";

const Notice = () => {
  return (
    <>
      <div className="flex flex-col m-3 p-2">
        <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <h5 class="mb-2 text-2xl border-b tracking-tight text-gray-900 dark:text-white">
            ~Teacher name
          </h5>
        </a>
      </div>
    </>
  );
};

export default Notice;
