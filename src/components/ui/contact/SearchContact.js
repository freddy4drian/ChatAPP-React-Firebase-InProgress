
import { Link } from "react-router-dom"

export const SearchContact = () => {
  return (
    <div className="container-search-contact navbar h-full w-full">
      <div className="p-1 w-full text-center">
         <h1 className='title color-gray d-block'>CHAT<span className="color-gray border-gray">APP</span></h1>
      </div>
      <div className="flex relative justify-center">
         <input type="text" className="contact-search-input" placeholder="Buscar" />
         <Link to="#" className="contact-search-button absolute">
            <svg className="w-6 h-6 search-mark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
         </Link>
      </div>
    </div>
  )
}
