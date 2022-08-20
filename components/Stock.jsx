import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Modal from './Modal';



function Stock() {

    let list =[
        {
        id:1,
        productName:"Lenovo",
        brand:"Lenovo 2016",
        description:"butter and cocoa",
        color:"brown",
        price:100,
        qnt:1000
    },
        {
        id:2,
        productName:"Apple Laptop",
        brand:"Mac",
        description:"Apple MacBook Pro 17",
        color:"silver",
        price:100,
        qnt:1000
    },
        {
        id:3,
        productName:"Hp Laptop",
        brand:"Hp 2018 pro",
        description:"butter and cocoa",
        color:"brown",
        price:100,
        qnt:1000
    },
        {
        id:4,
        productName:"Dell",
        brand:"Dell slim Pro 17",
        description:"butter and cocoa",
        color:"brown",
        price:100,
        qnt:1000
    },
        {
        id:5,
        productName:"Toshiba",
        brand:"satelite",
        description:"butter and cocoa",
        color:"black",
        price:100,
        qnt:1000
    },
        {
        id:6,
        productName:"Toshiba",
        brand:"satelite",
        description:"butter and cocoa",
        color:"black",
        price:100,
        qnt:1000
    },
        {
        id:7,
        productName:"Toshiba",
        brand:"satelite",
        description:"butter and cocoa",
        color:"black",
        price:100,
        qnt:1000
    },
        {
        id:8,
        productName:"Toshiba",
        brand:"satelite",
        description:"butter and cocoa",
        color:"black",
        price:100,
        qnt:1000
    },
        {
        id:9,
        productName:"Toshiba",
        brand:"satelite",
        description:"butter and cocoa",
        color:"black",
        price:100,
        qnt:1000
    },
        {
        id:10,
        productName:"Toshiba",
        brand:"satelite",
        description:"butter and cocoa",
        color:"black",
        price:100,
        qnt:1000
    },
        {
        id:11,
        productName:"Toshiba",
        brand:"satelite",
        description:"butter and cocoa",
        color:"black",
        price:100,
        qnt:1000
    },
]

    const deleteItem=(id)=>{
       console.log(id)
    }
    const submit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="w-[80%] h-[60%] bg-gray-200 shadow-lg rounded-lg p-4 space-y-2">
        <div onSubmit={(e)=>submit(e)} className="flex justify-between items-center">
            <div className="w-[50%] flex space-x-2">
                <input type="text" placeholder="Search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
                <button className="">Search</button>
            </div>
            <div className="w-[50%] flex space-x-2 justify-end ">
                <Modal/>
                
            </div>
        </div>

        <div className="w-full h-[90%] bg-gray-100 rounded-sm overflow-x-auto relative">

            <table className="w-full text-sm text-left text-gray-500 overflow-y-scroll scrollbar-hide ">

            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6">
                    Brand name
                </th>
                <th scope="col" className="py-3 px-6">
                    Description
                </th>

                <th scope="col" className="py-3 px-6">
                    Color
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
                </th>
                <th scope="col" className="py-3 px-6">
                    stock-Qnty
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className=" overflow-y-scrolls scrollbar-hided">
            {list.map(({id,productName, qnt,brand,description,price,color,})=>(

        <tr key={id} className="bg-white border-b ">
               
                <td className="py-4 px-6">
                {productName}
                </td>

                <td className="py-4 px-6">
                    {brand}
                </td>
                <td className="py-4 px-6">
                    {description}
                </td>
                <td className="py-4 px-6">
                    {color}
                </td>
                <td className="py-4 px-6">
                    ${price}
                </td>
                <td className="py-4 px-6">
                    {qnt}
                </td>
                <td className="py-4 px-4 flex space-x-2 justify-center items-center ">
                   <FiEdit className="text-red-900"/>
                   <AiOutlineDelete onClick={()=>deleteItem(id)} className="text-red-900"/>
                   
                </td>
                
            </tr>
            ))}

        </tbody>
                
            </table>




            <div className="w-full ">

            </div>

        </div>

    </div>
  )
}

export default Stock