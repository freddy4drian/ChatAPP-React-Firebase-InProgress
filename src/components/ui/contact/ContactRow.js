import { ProfilePicture } from "../UIElements/ProfilePicture"

export const ContactRow = (param) => {
  const { newMessage = false } = param

  return (
    <div className="contact-row border-bottom w-full p-5">
      <div className=" w-full h-full flex items-center justify-between">
        <div className="flex">
          <ProfilePicture picture=""/>
          <div className="contact-info">
            <div className="flex items-center">
              <h2 className="contact-name text-lg font-normal">Freddy Adrián</h2>
              <span className="ml-2 dot-status"></span>
            </div>
            <small className="contact-custom-status">
              ¡La vida es un crimen!
            </small>
          </div>
        </div>
        {
          (newMessage) && (
            <div className="messages-count mr-4">
              <span>3</span>
            </div>
          )
        }
        
      </div>
    </div>
  )
}
