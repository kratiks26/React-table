import React, {useEffect, useState} from "react";
import "./Pagination.css";


function Pagination({ data = [], pageSize = 5, onChange=()=>{ }, pageOptions=5}){
    const[currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / pageSize);

    const pages = new Array(pageOptions).fill(0,0, pageOptions);

    const handelOnChange =(pageNo) =>{
        onChange(data.slice((pageNo -1 ) * pageSize, pageNo * pageSize));
        setCurrentPage(pageNo);
    }

    const onPreviousClick =()=>{
        onChange(data.slice((currentPage -2) * pageSize,(currentPage -1) * pageSize));
        setCurrentPage(currentPage -1)
    }

    const onNextClick =()=>{
        onChange(data.slice(currentPage * pageSize, (currentPage + 1) * pageSize));
        setCurrentPage(currentPage +1);
    };

    useEffect(()=>{
        onChange(data.slice(0,pageSize));
    },[data])
    return(
        <div className="pagination-container">
            <button disabled={currentPage === 1} onClick={onPreviousClick}>Prev</button>
            {
                pages.map((e, index)=>{
                    const pageNo = (Math.floor(currentPage/(pageOptions +1))*
                    pageOptions) + index + 1;
                     
                    if(pageNo <= totalPages){
                        return <div key={index} onClick ={()=> handelOnChange(pageNo)}
                        className={`pagination-circle ${pageNo === currentPage && 'pagination-active-page'}`}> {pageNo} </div>
                    }
                    else{
                        return <></>
                    }
                })
            }
            <button disabled={currentPage === totalPages}
            onClick={onNextClick}>
                Next</button>
        </div>

    )
}

export default Pagination;