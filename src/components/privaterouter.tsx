import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

const Privaterouterr = ({ children }: Props) => {
  const user = sessionStorage.getItem('user')
  if (user) {
    return <>{children}</>
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Truy cập bị từ chối</h1>
          <p className="text-gray-700 mb-6">Bạn không có quyền truy cập vào trang này.</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            <Link to={'/'}>Quay lại trang chủ</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Privaterouterr
