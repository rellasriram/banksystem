import React, {useState} from 'react'

import CreateCustomerRole from './CreateCustomerRole'
import CreateEmployeeRole from './CreateEmployeeRole'
import StopEmployeeRole from './StopEmployeeRole'
import StopCustomerRole from './StopCustomerRole'


const ViewStatMenu = (props) => {
    const [active,setActive] = useState(1)

    const handleActive = (item) => {
        console.log(item)
        setActive(item)
    }

    const Tab = (props) => {
        return (
            <div className={active==props.num?"bg-yellow-500 text-black mx-2 px-4 rounded-md p-2 text-sm font-bold":"text-sm cursor-pointer transition ease-out mx-2 px-4 rounded-md p-2 hover:bg-yellow-500 hover:text-black"} onClick={()=>{setActive(props.num)}}>{props.name} </div>
        )
    }

    const Feature = (props) => {
        return(
            <div className={active==props.num?"":"hidden"}>
                {props.name}
            </div>
            
        )
    }

    return (
        <div>
            
            <div className="w-full ">
                <div className="text-left w-full bg-gray-100 text-black px-5 py-2 rounded-t-md mt-10 font-bold text-xl">{props.title}</div>
                <div className="flex w-full bg-gray-200 px-2 py-2 rounded-b-md">
                <Tab num={1} name="Create Employee Role"/>
                <Tab num={2} name="Create Customer Role"/>
                <Tab num={3} name="Stop Employee Roles"/>
                <Tab num={4} name="Stop Customer Role"/>
                
                </div>
            </div>
            <div className="w-full">
                {
                    active==1?
                    <CreateEmployeeRole />
                    :null
                }
                
                {
                    active==2?
                    <CreateCustomerRole />
                    :null
                }

                {
                    active==3?
                    <StopEmployeeRole />
                    :null
                }

                {
                    active==4?
                    <StopCustomerRole />
                    :null
                }

            </div>
        </div>
    )
}

export default ViewStatMenu