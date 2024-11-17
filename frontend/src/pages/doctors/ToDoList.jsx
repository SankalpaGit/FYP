import React from 'react'
import DoctorLayout from '../../layouts/DoctorLayout'
import { BiTask } from "react-icons/bi";

const ToDoList = () => {
    return (
        <DoctorLayout>
            <BiTask  className='text-10x text-orange-600 m-auto'/>
        </DoctorLayout>
    )
}

export default ToDoList
