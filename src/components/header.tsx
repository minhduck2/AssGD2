import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user) {
        setIsLoggedIn(true)
      }
    }
  }, [])
  const handleLogout = () => {
    sessionStorage.removeItem('user')
    setIsLoggedIn(false)
    navigate('/login')
  }

  const onSubmit = (data:any) => {
    const { keywords } = data
    navigate(`/search?keyword=${keywords}`)
  }

  
  return (
    <>
      <div className="bg-gradient-to-r from-[#4E7C32] from-40% h-[130px] p-4">
        <div className="flex justify-around items-center mt-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center ml-[100px]">
              <input
                {...register('keywords')}
                type="text"
                placeholder="Nhập tìm kiếm tại đây"
                className="w-[525px] h-[42.96px] bg-white p-2 rounded-l-lg border-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-white rounded-l-sm p-2 h-[42.96px]">
                <img aria-hidden="true" alt="search-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔍" />
              </button>
            </div>
          </form>
          <div className="flex justify-start items-center space-x-4 pr-16">
            <div>
              <select className="bg-transparent focus:outline-none text-foreground border border-border rounded-lg p-2">
                <option className='bg-slate-400'>En</option>
                <option className='bg-slate-400'>De</option>
              </select>
            </div>
            <div>
              {isLoggedIn ? (
                <button onClick={handleLogout} className="flex items-center bg-secondary text-secondary-foreground p-2 rounded-lg">
                  <img hidden alt="logout-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👤" />
                  <span className="ml-1">Log Out</span>
                </button>
              ) : (
                <Link to="/login" className="flex items-center bg-secondary text-secondary-foreground p-2 rounded-lg">
                  <img hidden alt="account-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👤" />
                  <span className="ml-1">Account</span>
                </Link>
              )}
            </div>
            <div>
              <a className="flex items-center bg-secondary text-secondary-foreground p-2 rounded-lg">
                <img hidden alt="cart-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🛒" />
                <span className="ml-1">Cart</span>
              </a>
            </div>
          </div>
        </div>
        <nav className="mt-6">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="bg-transparent focus:outline-none text-foreground rounded-lg">Home</Link>
            </li>
            <li>
              <Link to="/category" className="bg-transparent focus:outline-none text-foreground rounded-lg">Category</Link>
            </li>
            <li>
              <Link to="/dashboard" className="bg-transparent focus:outline-none text-foreground rounded-lg">Admin</Link>
            </li>
            <li>
              <select className="bg-transparent focus:outline-none text-foreground rounded-lg">
                <option className='bg-slate-400'>Erde & Chất nền</option>
                <option className='bg-slate-400'>Growbox</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent focus:outline-none text-foreground rounded-lg">
                <option className='bg-slate-400'>Chậu và hộp đựng</option>
                <option className='bg-slate-400'>Growbox</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent focus:outline-none text-foreground rounded-lg">
                <option className='bg-slate-400'>Thủy lợi</option>
                <option className='bg-slate-400'>Growbox</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent focus:outline-none text-foreground rounded-lg">
                <option className='bg-slate-400'>Trồng và làm vườn</option>
                <option className='bg-slate-400'>Growbox</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent focus:outline-none text-foreground rounded-lg">
                <option className='bg-slate-400'>Thông gió và điều hòa không khí</option>
                <option className='bg-slate-400'>Growbox</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
