import { useState } from "react";

import "./drageAndDrop.css";


export const DrageAndDrop= ({title ="Select File", onFileDrop})=>{
    const [isDragActive, setIsDragActive] = useState(false)

    const onDrop = (files)=>{
        // e.preventDefault();
        // setIsDragActive(true)

        // const files = e.dataTransfer.files;
        const fileList = Object.values(files).map((file)=>{
        return (
            {
             url: URL.createObjectURL(file),
             data: file
            }
        )
    });       
    
    onFileDrop(fileList);
    }

    return(
        <div onDrop={(e)=>{
            e.preventDefault();
            onDrop(e.dataTransfer.files)

        }}
        className={`DragAndDrop ${isDragActive && `DragAndDropColor`}`}
        onDragOver={(e)=> {e.preventDefault(); setIsDragActive(true)}}
        onDragLeave ={(e)=>{e.preventDefault(); setIsDragActive(false)}}
        >
        <input type="file" id="drag-file-input" className="drag-n-drop-input" 
        onChange = {(e)=> onDrop(e.target.files)}/>
        <label className="drag-input-label" for="drag-file-input"        
        >{title}</label>
        </div>
    )

};


