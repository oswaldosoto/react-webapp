import React,{useState} from "react";

export default function FileModal({input,setInput,showModal,setShowModal}) {

  const handleSubmit = (text) => {
    
  }


   return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto max-w-3xl">
              {/*content*/}
              <div class="flex justify-center mt-8">
                <div class="rounded-lg shadow-xl bg-gray-50 ">
                    <div class="m-4">
                    <div class="flex justify-center">
                      <div class="mb-3 xl:w-96">
                        <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
                          >Place your about description here</label
                        >
                        <input
                          class="
                            form-control
                            block
                            w-full
                            px-12
                            py-12
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                          "
                          type="text"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder={input}
                        ></input>
                      </div>
                    </div>
                    </div>
                    <div class="flex p-2 space-x-4 justify-center">
                        <button onClick={() => { setShowModal(false)}} class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cancel</button>
                        <button onClick={(e) => { handleSubmit(e.target.value)}} class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Create</button>
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