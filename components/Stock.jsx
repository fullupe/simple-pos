import React,{useState,useEffect} from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Modal from './Modal';
import ModalUpdate from "./ModalUpdate"
import Localbase from 'localbase'

function Stock() {

const [stockList, setStockList] = useState([])
const [doneDeleted, setdoneDeleted] = useState(false)
const [targetId, settargetId] = useState()


    let db = new Localbase('db')
    useEffect(() => {
        db.collection('stock').get().then(stock => {
            setStockList(stock) 
          })
    }, [doneDeleted])

 

    const deleteItem=(id)=>{
       console.log(id)
       db.collection('stock').doc({id:id }).delete().then(

           setdoneDeleted(!doneDeleted)
       )
    }

    const submit=(e)=>{
        e.preventDefault()
    }
    const targetIdFunction = (id)=>{
        //settargetId(id)

        console.log(id)
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

            <table className="w-full text-sm text-left text-gray-500 ">

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
                    stock-Qnt
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className=" overflow-y-scroll scrollbar-y-hide">
            {stockList?.map(({id,productName,brandName,price,stockQnty,description,colour}) =>(

        <tr key={id} className="bg-white border-b transition-all duration-200 ease-in-out ">
               
                <td className="py-4 px-6">
                {productName}
                </td>

                <td className="py-4 px-6">
                    {brandName}
                </td>
                <td className="py-4 px-6">
                    {description}
                </td>
                <td className="py-4 px-6">
                    {colour}
                </td>
                <td className="py-4 px-6">
                    ${price}
                </td>
                <td className="py-4 px-6">
                    {stockQnty}
                </td>
                <td className="py-4 px-4 flex space-x-3 justify-center items-center ">
                   {/* <FiEdit className="text-red-900"/> */}
                   <div onClick={()=>targetIdFunction(id)} className="bg-orange-200 p-2 rounded-full items-center flex justify-center ">
                   <ModalUpdate targetId={id} productName={productName} brandName={brandName} price={price} stockQnty={stockQnty} description={description} colour={colour}  />
                    </div> 
                    <div className="bg-orange-200 p-2 rounded-full items-center flex justify-center">
                   <AiOutlineDelete onClick={()=>deleteItem(id)} className="text-red-600 cursor-pointer"/>
                   </div>
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