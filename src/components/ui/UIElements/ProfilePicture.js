

export const ProfilePicture = (props) => {

  const { picture } = props;
  console.log(picture);

  return (
    <div className="container-picture">
      <div className='u-img mx-1'>
        {/* <img src="{picture}" alt="img-profile"/> */}
      </div>
    </div>
  )
}
