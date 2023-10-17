import React from 'react';
import { DrageAndDrop } from '../DragandDrop/dragAndDrop';
import {Carousel} from '../Carousel/Carousel';

import { useState } from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import { uploadToCloudinary } from '../../utils/cloudinary';

const FileUpload = () => {

  const[imageList, setImageList] = useState([]);
  const onFileDrop =(files) =>{
    setImageList([...imageList, ...files])
    // console.log(".....")
  };


  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1NAR6n_KiHe3KHEz1pagnxQk39TvEYJ1Jxp4NsXRJQ&s"

  const cld = new Cloudinary({cloud: {cloudName: 'dpfzo9f1j'}});
  const onDelete = (files)=>{
    setImageList([...files])
    console.log('file dropped')
  }

  const onSave = async(file) =>{
    
    try{
      await uploadToCloudinary(file.data);
      alert("Image Upload Successfilly");
    } catch(err){
      alert("Unable to Upload image");
    }

  }

  return (
    <div>

      <Carousel imageList={imageList} onDelete={onDelete} defaultImage={defaultImage} onSave={onSave}/>
      <DrageAndDrop onFileDrop = {onFileDrop} title="Drop a File"/> 
    </div>
  )
};

export default FileUpload;

