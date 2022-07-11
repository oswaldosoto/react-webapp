import React,{useState} from "react";

export default function Modal({showModal,setShowModal}) {

   return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                
                <div className="relative p-6 flex-auto">
                {/*header*/}
                    <h3 className=" text-4xl font-black">
                        Alerta
                    </h3>
                    {/*body*/}
                    <p className="mx-6 my-4 text-black text-md ">
                        Los campos con * son obligatorios
                    </p>
                </div>
                {/*footer*/}
                <div className="items-center justify-end p-6  rounded-b">
                    <div className='mt-10 flex '>
                        <button onClick={() => { setShowModal(false) } } type="button" className=" w-full h-12 text-white font-black mb-3 bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">OK</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}