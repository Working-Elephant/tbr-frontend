import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const BreadCrumb = () => {
  return (
    <nav className="bg-grey-light rounded-md w-full text-xs text-grey">
    <ol className="flex items-center mx-5">
      <li className="mr-2">
        <NavLink to="/" className="text-blue-600 hover:text-blue-700">
          Home
        </NavLink>
      </li>
      <li className="mr-2">
        <span class="text-gray-500 mx-2">
          <FiChevronRight />
        </span>
      </li>
      <li className="mr-2">
        <NavLink to="/pets" className="text-blue-600 hover:text-blue-700">
          Library
        </NavLink>
      </li>
      <li className="mr-2">
        <span className="text-gray-500 mx-2">
          <FiChevronRight />
        </span>
      </li>
      <li className="text-gray-500">Data</li>
    </ol>
  </nav>
  )
}

export default BreadCrumb