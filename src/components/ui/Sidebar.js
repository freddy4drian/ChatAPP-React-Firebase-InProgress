import React from 'react'
import { ContactRow } from './contact/ContactRow'
import { SearchContact } from './contact/SearchContact';
import { ContactSelfCard } from './contact/ContactSelfCard';

export const Sidebar = () => {

  const rows = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="relative columns-2xl bg-white b-right-light">
      <SearchContact />
      <div className="container-contact overflow-auto">
        {
          rows.map(r => (r === 1 || r === 2 || r === 3) ? <ContactRow newMessage="true" /> : <ContactRow/>
          )
        }
      </div>
      <div className="container-ownuser">
        <ContactSelfCard />
      </div>
      <div className="container-dev">
        <div className="text-center">
          <small>2023 &copy; Developed with &hearts;</small>
        </div>
      </div>
    </div>
  )
}
