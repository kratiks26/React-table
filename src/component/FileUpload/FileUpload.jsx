import React from 'react';
import { DrageAndDrop } from '../DragandDrop/dragAndDrop';
import { Carousel } from '../Carousel/Carousel';
import { useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { uploadToCloudinary } from '../../utils/cloudinary';

const FileUpload = () => {

  const [imageList, setImageList] = useState([]);

  const onFileDrop = (files) => {
    setImageList([...imageList, ...files])
  };


  const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"

  const cld = new Cloudinary({ cloud: { cloudName: 'dpfzo9f1j' } });
  const onDelete = (files) => {
    setImageList([...files])
    console.log('file dropped')
  }

  const onSave = async (file) => {

    try {
      await uploadToCloudinary(file.data);
      alert("Image Upload Successfilly");
    } catch (err) {
      alert("Unable to Upload image");
    }

  }

  return (
    <div>

      <Carousel imageList={imageList} onDelete={onDelete} defaultImage={defaultImage} onSave={onSave} />
      <DrageAndDrop onFileDrop={onFileDrop} title="Drop a File" />
    </div>
  )
};

export default FileUpload;

