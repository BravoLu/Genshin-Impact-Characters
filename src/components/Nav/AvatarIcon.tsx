const AvatarIcon = ({name}: {name: string}) => {
    return (
      <img
        src={`/${name}/Iconside.png`} // Replace with the actual path to your image
        alt={name}
        width="24px" // Set the width and height as needed
        height="24px"
      />
    );
  };
  
  export default AvatarIcon;