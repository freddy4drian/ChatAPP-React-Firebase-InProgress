import React from 'react'
import { Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar h-auto bg-grey'>
      <div className='nav-ui py-1'>
        <div className='u-img mx-1'>
          {/* <img src="" alt="img-profile"/> */}
        </div>
        <div className='u-detail'>
          <div className='name'>
            <h2 className='text-lg font-normal'>Freddy Adrián</h2>
          </div>
          <div className='status'>
            <span className='text-xs'>Online </span>
          </div>
        </div>
        <div className='u-actions mx-2 px-1 svg-grey'>
          <div className="icons-div">
            <div className='search'>
              <input type="text" className="search_input" placeholder="Escriba una palabra..." />
              <Link to="#" className="search_button">
                <svg className="w-6 h-6 search-mark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </Link>
            </div>
            <div className='menu'>
              <Link to="#">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
