import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const BreadCrumb = () => {
  return (
    <nav className="bg-grey-light rounded-md w-full">
    <ol className="flex items-center mx-5">
      <li className="mr-2">
        <Link to="/" className="text-blue-600 hover:text-blue-700">
          Home
        </Link>
      </li>
      <li className="mr-2">
        <span class="text-gray-500 mx-2">
          <FiChevronRight />
        </span>
      </li>
      <li className="mr-2">
        <Link to="/pets" className="text-blue-600 hover:text-blue-700">
          Library
        </Link>
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