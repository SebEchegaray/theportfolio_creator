import React from 'react'
import { Component } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { Button } from '@material-ui/core';

const { useRef } = React

const ProfilePicture = props => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <div>
      <Button onClick={handleClick}>
        Upload a file
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </div>
  )
}
export default ProfilePicture