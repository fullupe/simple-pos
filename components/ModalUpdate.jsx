import React,{useState,useEffect} from 'react'

import { FiEdit } from "react-icons/fi";

import { useRouter } from "next/router";
import { useForm,  } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



import Localbase from 'localbase'



const schema = yup.object().shape({
  productName: yup.string().required('The product field is required!'),
  brandName: yup.string().required('The Brand is required!'),
  description: yup.string().required('The Description field is required!'),
  colour: yup.string().required('The Colour field is required!'),
  price: yup.number().positive().integer().required('The Price is required!'),
  stockQnty: yup.number().required('The Quantity field is required!'),
  
});


function Modal({targetId,productName,brandName,price,stockQnty,description,colour}) {
  
  
  let db = new Localbase('db')

  const [LreadyInStock, setLreadyInStock] = useState([])

  const [dataAdded, setDataAdded] = useState(false)

  
 
  const router = useRouter();



const preloadvalues={
  productName,
  brandName,
  price,
  stockQnty,
  description,
  colour,

}


  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues:preloadvalues,
    resolver: yupResolver(schema),
  });



    const [isOpen, setIsOpen]=useState(false)    

    const toggleModal = ()=>{

            setIsOpen(!isOpen)
    }

      useEffect(() => {
        db.collection('stock').get().then(stock => {
          // console.log(stock)
          setLreadyInStock(stock)
        })

      }, [dataAdded])
    

    const submitData =(data)=>{
      
      db.collection('stock').doc({ id: targetId }).update({
          productName:data.productName,
          brandName:data.brandName,
          description:data.description,
          colour:data.colour,
          price:data.price,
          stockQnty:data.stockQnty,
      })

      reset({
        productName:"",
        brandName:"",
        description:"",
        colour:"",
        price:"",
        stockQnty:""


      })

    setDataAdded(!dataAdded)

    }


  return (
    <div >


{/* <GiSettingsKnobs onClick={toggleModal}   className="w-8 h-8 text-red-500 bg-white rounded-lg p-1 cursor-pointer"/> */}
{/* <button onClick={toggleModal}   className=" bg-white border-emerald-300 p-2 rounded-lg hover:bg-blue-200 cursor-pointer">+ Add Items</button> */}
<FiEdit onClick={toggleModal}  className="text-red-600 cursor-pointer"/>    
        {/* <Head>
        <title>Create Next App</title>
      </Head> */}

 
{/* <!-- Modal --> */}
<div
  className={`
    ${isOpen ? "flex" : "hidden"}
    overflow-x-hidden overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    justify-center
    items-center
    flex
  `}
  //id="modal-example-small"
>
  <div className="relative w-autof my-6 mx-auto ">
    {/* <!--content--> */}
    <form onSubmit={handleSubmit(submitData)}
      className="
        border-0
        rounded-lg
        shadow-lg
        relative
        flex flex-col
        w-full
        bg-gray-900
        outline-none
        focus:outline-none
      "
    >
      {/* <!--header--> */}
      <div
        className="
          flex
          items-start
          justify-between
          p-5
          border-b border-solid border-gray-200
          rounded-t
        "
      >
        <h3 className="text-2xl font-semibold text-gray-500 italic">Update Stock</h3>
        
      </div>

      {/* <!--body--> */}
      <div className="relative p-6 flex-auto ">
       
      <div className="form-floating mb-3 md:w-96 space-y-2">
      <input {...register('productName')} name="productName"  type="text" className="form-control
      block
      w-full
      overflow-hidden
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Product Name"/>
      <p className="text-red-500 text-xs italic">
              {errors.productName?.message}
            </p>

      <input {...register('brandName')} name="brandName" type="text" className="form-control
      block
      w-full
      overflow-hidden
      
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Brand Name"/>
         <p className="text-red-500 text-xs italic">
              {errors.brandName?.message}
            </p>
      <input {...register('description')} name="description" type="text" className="form-control
      block
      w-full
      overflow-hidden
      
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Descriptions"/>
      <p className="text-red-500 text-xs italic">
              {errors.description?.message}
            </p>
      <input {...register('colour')} name="colour" type="text"  className="form-control
      block
      w-full
      overflow-hidden
      
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Colour"/>
         <p className="text-red-500 text-xs italic">
              {errors.colour?.message}
            </p>
      <input {...register('price')} name="price" type="text"  className="form-control
      block
      w-full
      overflow-hidden
      
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Price"/>
       <p className="text-red-500 text-xs italic">
              {errors.price?.message}
            </p>
      <input {...register('stockQnty')} name="stockQnty" type="text" className="form-control
      block
      w-full
      overflow-hidden
      
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Qnty"/>

            <p className="text-red-500 text-xs italic">
              {errors.stockQnty?.message}
            </p>
      
    </div>


      </div>
      {/* <!--footer--> */}
      <div
        className="
          flex
          items-center
          justify-end
          p-6
          border-t border-solid border-gray-200
          rounded-b
        "
      >
        <button
          className="
            text-orange-500
            background-transparent
            font-bold
            uppercase
            px-6
            py-2
            text-sm
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
          type="button"
          onClick={toggleModal}
        >
          Close
        </button>
        <input
          className="
            bg-orange-500
            text-white
            active:bg-purple-600
            font-bold
            uppercase
            text-xs
            px-4
            py-2
            rounded
            shadow
            hover:shadow-md
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
          type="submit"
          //onClick={handleSubmit(submitData)}
          //onClick={}
          //disabled={!password}
        
          //Add Item
        />
      </div>
    </form>
  </div>
</div>
<div
  className="hidden opacity-25 fixed inset-0 z-40 bg-black"
  //id="modal-example-small-backdrop"
></div>

    </div>
  )
}

export default Modal
