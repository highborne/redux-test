import React from 'react';

import { ShoppingCartIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <div className="flex items-center w-full h-16 text-white bg-blue-600 p-2">
      <>
        <p className="leading-none text-4xl font-bold px-4">Loja redux</p>
        <div className="flex flex-1 justify-end items-center w-full space-x-8 px-8">
          <form className="flex items-center w-128">
            <label className="sr-only">Procurar o seu produto</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                autoComplete="off"
              />
            </div>
          </form>
          <div>
            <ShoppingCartIcon className="h-8 w-8 text-white" />
          </div>
        </div>
      </>
    </div>
  );
}

export default Header;
