import { ProfilePicture } from "../UIElements/ProfilePicture"

export const ContactSelfCard = () => {
  return (
   <div className="contact-self w-full h-full p-5">
      <div className=" w-full h-full flex items-center justify-between">
      <div className="flex">
         <ProfilePicture picture=""/>
         <div className="contact-info">
            <div className="flex items-center">
            <h2 className="contact-name text-lg font-normal">Freddy Adrián</h2>
            </div>
            <small className="contact-custom-status">
            ¡La vida es un crimen!
            </small>
         </div>
      </div>
         <div className="self-buttons mr-4">
         </div>   
      </div>
   </div>
  )
}
