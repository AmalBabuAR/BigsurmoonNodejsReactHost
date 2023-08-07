import React,{useState} from 'react';


const TableMenu = () => {
   
    return (
       
        <div className="dropdown">
            <button className='three-dots'>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="dropdown-content">
                <ul className='dropdown-list'>
                    <li>View</li>
                    <li>Edit</li>
                    <li>API lINK</li>
                    <li>3D Download</li>
                    <li>Delete</li>
                </ul>
            </div>
        </div>
    )
}
export default TableMenu;