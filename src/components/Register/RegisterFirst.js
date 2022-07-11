import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Modal from '../Modal'
import IndustryData from '../../IndustryData'
import BackIcon from '../../assets/images/arrow.png'
import axios from '../../api/axios';

function Register() {

    const [check, setCheck] = useState([IndustryData]);
    const [item, setItem] = useState('');
    const [input,setInput] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    //Global state
    const register = useSelector((state) => state.user.value)
    //used for moving throught routes
    let navigate = useNavigate();
    let access_token = localStorage.getItem('token');

    const getInfo = async () => {
        const info = await axios.get('/category', {
            headers: {
                'Authorization': access_token
              }
        });
        setData(info.data.data)
        console.log(info.data.data[1]);
       };
       

  useEffect(() => {
    getInfo();
    //Runs only on the first render
  }, []);

    const handleToggle = (index) => {
            const items = [...data];
            items[index].status = !items[index].status ;
            setCheck(items);
            console.log(items[index])
            // console.log(items)
    }

    const handleSubmit = (e) => {

        const inputFiltered = data.filter( data => !data.status )
        //send checked data to global state and db
        // console.log(inputFiltered)
        if(inputFiltered.length !== 0){
            navigate("/register/2");
        }else{
            console.log('popup error of empty selection');
            setShowModal(true);
        }
        // getData();
        // console.log(axios)
    }

    const handleInputChange = (text) => {

        setInput(text);
        if(text !== ''){
            IndustryData.push({name:text,isSelected:true})
            setCheck([...IndustryData])
            console.log(text)
            setInput('');
        }
        
        // console.log(check)
        console.log(IndustryData)
    }

  return (
    
    <div className='switch ease-in-out duration-700 lg:m-20 m-10 border-blue-500 border-opacity-100 overflow-visible'>
        <div className='grid m-0 p-0 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <button onClick={() => navigate('../preregister')} className='object-left-top m-0 p-0'>
                <img className='row-span-3 inline w-20 float-left' alt='BackIcon' src={BackIcon} />
            </button>
            <div className='place-items-center '>
                <h3 className='col-span-2 mt-4 mx-0 text-4xl font-black ' >Qué Produces?</h3>
                <h1 className='row-span-2 mt-0 mb-5 lg:text-2xl text-sm'>Selecciona al menos una</h1>
            </div>
        </div>
        <div className='place-items-center grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-2 overflow-visible'>
        {data.map((item, index) => {
            return (
                <div>
                    <div key={index} onClick={() => { handleToggle(index) } } className={ item.status ? "xl:w-80 cursor-pointer w-40 border-solid border-2 border-gray-200 font-bold py-2 lg:px-6 px-4 rounded-lg" : "xl:w-80 cursor-pointer w-40 border-solid border-2 border-yellow-200 text-[#fcb11b] font-bold py-2 px-4 rounded-lg" }>
                        <h1 className={ item.status ? "text-sm lg:text-base  " : "text-sm lg:text-base text-[#fcb11b] " } > {item.name} </h1>
                    </div>                
                </div>
            );
        })}
        </div>
        <div class=" md:hidden mt-5 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
        </div>
        <div className='mt-10 flex items-center justify-center'>
            <button onClick={() => { handleSubmit() } } type="button" className=" bottom-0 w-full h-12 text-white font-black mb-5 xl:mt-5 lg:w-1/5 sm:w-full md:w-full bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Next</button>
        </div>
        <div class=" hidden md:flex  mb-5 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
        </div>
         <Modal showModal={showModal} setShowModal={setShowModal}/>
    </div>

  )
}

export default Register