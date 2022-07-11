import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import RoleData from '../../RoleData'
import SizeData from '../../SizeData'
import StatusData from '../../StatusData'
import BackIcon from '../../assets/images/arrow.png'
import Modal from '../Modal'

function Register() {

    const [checkRole, setCheckRole] = useState([RoleData]);
    const [checkStatus, setCheckStatus] = useState([RoleData]);
    const [checkSize, setCheckSize] = useState([RoleData]);
    const [item, setItem] = useState('');
    const [inputName,setInputName] = useState('');
    const [showModal, setShowModal] = useState(false);
    //used for moving throught routes
    let navigate = useNavigate();

    const handleToggleStatus = (index) => {
            const items = [...StatusData];
            items[index].isSelected = !items[index].isSelected ;
            setCheckStatus(items);
            console.log(items[index])
            // console.log(items)
    }

    const handleToggleSize = (index) => {
        const items = [...RoleData];
        items[index].isSelected = !items[index].isSelected ;
        setCheckSize(items);
        console.log(items[index])
        // console.log(items)
}

const handleToggleRole = (index) => {
    const items = [...RoleData];
    items[index].isSelected = !items[index].isSelected ;
    setCheckRole(items);
    console.log(items[index])
    // console.log(items)
}

    const handleSubmit = () => {
        const inputFiltered = RoleData.filter( data => data.isSelected )
        //send checked data to global state and db
        if(inputName.length !== 0){
            navigate("/register/5");
        }else{
            console.log('empty input');
            setShowModal(true);
        }
    }

    // const handleInputChange = (text) => {

    //     setInput(text);
    //     if(text !== ''){
    //         IntercomData.push({name:text,isSelected:true})
    //         setCheck([...IntercomData])
    //         console.log(text)
    //         setInput('');
    //     }
        
    //     // console.log(check)
    //     console.log(IntercomData)
    // }


  return (
    
    <div className='lg:m-20 m-10 border-blue-500 border-opacity-100 overflow-visible'>
        <div className='grid m-0 p-0 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <button onClick={() => navigate('../register/3')} className='p-0 m-0'>
                <img className='row-span-3  inline w-20 float-left' alt='BackIcon' src={BackIcon} />
            </button>            
            <div className='place-items-center '>
                <h3 className='col-span-2 mt-4 mx-0 text-4xl font-black ' >About your business</h3>
                <h1 className='row-span-2 mt-0 mb-5 lg:text-2xl text-sm'>Required *</h1>
            </div>
        </div>
        <div className=' text-xs place-items-center grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-2 overflow-visible'>
            <div>
                <h3 className='ml-0 text-black text-lg xl:text-center text-left md:text-2xl mb-4'>What's your business name? *</h3>
                <div className={ !item.isSelected ? " cursor-pointer border-solid border-2 border-gray-200 font-bold py-3 px-4 rounded-lg" : "  cursor-pointer  border-solid border-1 border-orange-400 font-bold py-2 px-4 rounded-lg" }>
                    <input onChange={e => setInputName(e.target.value)} className='w-full' placeholder="Name" name="item" onBlur={e => (e.target.value) } />
                </div>
            </div>
            <div>
                <h3 className='ml-0 text-black text-lg xl:text-center text-left md:text-2xl mb-4'>What's your role?</h3>
                <div className='place-items-center grid lg:grid-cols-2 md:grid-cols-2 gap-4 grid-cols-2 overflow-visible'>
                {RoleData.map((item, index) => {
                return (
                    <div>
                        <div key={index} onClick={() => { handleToggleRole(index) } } className={ !item.isSelected ? " cursor-pointer w-40 border-solid border-2 border-gray-200 font-bold py-2 px-4 rounded-lg" : " cursor-pointer w-40 border-solid border-2 border-yellow-200 text-[#fcb11b] font-bold py-2 px-4 rounded-lg" }>
                            <h1 className={ !item.isSelected ? "text-sm " : "text-sm text-[#fcb11b] " } > {item.name} </h1>
                        </div>                
                    </div>
                );
                })}
                </div>
            </div>
            <div>
                <h3 className='ml-0 text-black text-lg xl:text-center text-left md:text-2xl mb-4'>Where is your business located?</h3>
                <div class="grid grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-4">
                    {/*Dropdown*/}
                    <div>
                        <div class="dropdown relative">
                        <button
                            class="
                            dropdown-toggle
                            px-8
                            w-full
                            lg:px-10
                            py-2.5
                            border-solid border-2 border-gray-200
                            text-black
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded-lg
                            shadow-md
                            flex
                            items-center
                            whitespace-nowrap
                            "
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Country
                            <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            class="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            >
                            <path
                                fill="currentColor"
                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                            </svg>
                        </button>
                        <ul
                            class="
                            dropdown-menu
                            min-w-max
                            absolute
                            hidden
                            bg-white
                            text-base
                            z-50
                            float-left
                            py-2
                            list-none
                            text-left
                            rounded-lg
                            shadow-lg
                            mt-1
                            hidden
                            m-0
                            bg-clip-padding
                            border-none
                            "
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                            <a
                                class="
                                dropdown-item
                                text-sm
                                py-2
                                px-4
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-700
                                hover:bg-gray-100
                                "
                                href="#"
                                >Weekly</a
                            >
                            </li>
                            <li>
                            <a
                                class="
                                dropdown-item
                                text-sm
                                py-2
                                px-4
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-700
                                hover:bg-gray-100
                                "
                                href="#"
                                >Monthly</a
                            >
                            </li>
                            <li>
                            <a
                                class="
                                dropdown-item
                                text-sm
                                py-2
                                px-4
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-700
                                hover:bg-gray-100
                                "
                                href="#"
                                >Daily</a
                            >
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown relative">
                        <button
                            class="
                            dropdown-toggle
                            px-8
                            w-full
                            lg:px-10
                            py-2.5
                            border-solid border-2 border-gray-200
                            text-black
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded-lg
                            shadow-md
                            flex
                            items-center
                            whitespace-nowrap
                            "
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            City
                            <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            class="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            >
                            <path
                                fill="currentColor"
                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                            </svg>
                        </button>
                        <ul
                            class="
                            dropdown-menu
                            min-w-max
                            absolute
                            hidden
                            bg-white
                            text-base
                            z-50
                            float-left
                            py-2
                            list-none
                            text-left
                            rounded-lg
                            shadow-lg
                            mt-1
                            hidden
                            m-0
                            bg-clip-padding
                            border-none
                            "
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                            <a
                                class="
                                dropdown-item
                                text-sm
                                py-2
                                px-4
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-700
                                hover:bg-gray-100
                                "
                                href="#"
                                >Weekly</a
                            >
                            </li>
                            <li>
                            <a
                                class="
                                dropdown-item
                                text-sm
                                py-2
                                px-4
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-700
                                hover:bg-gray-100
                                "
                                href="#"
                                >Monthly</a
                            >
                            </li>
                            <li>
                            <a
                                class="
                                dropdown-item
                                text-sm
                                py-2
                                px-4
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-700
                                hover:bg-gray-100
                                "
                                href="#"
                                >Daily</a
                            >
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className={ !item.isSelected ? " cursor-pointer xl:w-40 w-full border-solid border-2 border-gray-200 font-bold py-3 px-4 rounded-lg" : "xl:w-60  cursor-pointer w-40 border-solid border-1 border-orange-400 font-bold py-2 px-4 rounded-lg" }>
                        <input className='w-full' placeholder="Zip " name="item" onFocus={e=> e.target.value = ""}   />
                    </div>
                </div>
            </div>
            <div class=" md:hidden mt-5 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
        </div>
        </div>
        <div className='mt-10 flex items-center justify-center'>
            <button onClick={() => { handleSubmit() } } type="button" className=" bottom-0 w-full h-12 text-white font-black mb-5 xl:mt-5 lg:w-1/5 sm:w-full md:w-full bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Next</button>
        </div>
        <div class=" hidden md:flex  mb-5 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
    </div>

  )
}

export default Register