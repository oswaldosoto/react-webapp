import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import IntercomData from '../../IntercomData'
import PracticeData from '../../PracticeData'
import ProducePreference from '../../ProducePreference'
import BackIcon from '../../assets/images/arrow.png'
import axios from '../../api/axios';
import FoodData from '../../FoodData'
import Modal from '../Modal'

function Register() {

    const [checkIntercom, setCheckIntercom] = useState([IntercomData]);
    const [checkProducePreference, setCheckProducePreference] = useState([ProducePreference]);
    const [checkFreq, setCheckFreq] = useState("Weekly");
    const [checkStores, setCheckStores] = useState("1-5");
    const [check, setCheck] = useState([FoodData]);
    const [dataCultivation, setDataCultivation] = useState([]);
    const [dataPractice, setDataPractice] = useState([]);
    const [dataIntercoms, setDataIntercoms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState('');
    const [input,setInput] = useState('');
    //used for moving throught routes
    let navigate = useNavigate();
    let access_token = localStorage.getItem('token');

    const getInfoCultivation = async () => {
        const info = await axios.get('/category/types-cultivation', {
            headers: {
                'Authorization': access_token
              }
        });
        setDataCultivation(info.data.data)
        console.log(info.data.name);
       };

    const getInfoPractice = async () => {
    const info = await axios.get('/category/types-cultivation', {
        headers: {
            'Authorization': access_token
            }
    });

    setDataPractice(info.data.data)
    console.log(info.data.data.name);
    };

    const getInfoIntercoms = async () => {
        const info = await axios.get('/category/intercoms', {
            headers: {
                'Authorization': access_token
              }
        });
        setDataIntercoms(info.data.data)
        
        console.log(info.data.name);
       };
       

  useEffect(() => {
    getInfoIntercoms();
    getInfoPractice();
    getInfoCultivation();
    //Runs only on the first render
  }, []);

    const handleTogglePreference = (index) => {
            const items = [...ProducePreference];
            items[index].isSelected = !items[index].isSelected ;
            setCheckProducePreference(items);
            console.log(items[index])
            // console.log(items)
    }

    
    const handleTogglePractice = (index) => {
        const items = [...PracticeData];
        items[index].isSelected = !items[index].isSelected ;
        setCheckProducePreference(items);
        console.log(items[index])
        // console.log(items)
}

    const handleToggleIntercom = (index) => {
        const items = [...IntercomData];
        items[index].isSelected = !items[index].isSelected ;
        setCheckIntercom(items);
        console.log(items[index])
        // console.log(items)
    }

    const handleSubmit = () => {

            navigate("/register/5");

    }

    const handleInputChange = (text) => {

        setInput(text);
        if(text !== ''){
            FoodData.push({name:text,isSelected:true})
            setCheck([...FoodData])
            console.log(text)
            setInput('');
        }
        
        // console.log(check)
        console.log(FoodData)
    }

    
    const clearInput = (e) => {
        e.currentTarget = "";
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
                <img className='row-span-3 inline w-20 gap-4 float-left' alt='BackIcon' src={BackIcon} />
            </button>            
            <div className='place-items-center '>
                <h3 className='col-span-2 mt-4 mx-0 text-4xl font-black' >Sobre tu Comunidad</h3>
                <h1 className='row-span-2 mt-0 lg:text-2xl text-sm'>Información General</h1>
            </div>
        </div>
        <div className=' text-xs place-items-center grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-2 overflow-visible'>
            <div>
                <h3 className='ml-0 text-black text-lg xl:text-center text-left md:text-2xl'>Tamaño de mi comunidad</h3>
                <div className='place-items-center grid lg:grid-cols-3 md:grid-cols-3 gap-2 grid-cols-3 overflow-visible'>
                <div className={ !item.isSelected ? " cursor-pointer xl:w-40 w-20 border-solid border-2 border-gray-200 font-bold py-2 px-4 rounded-lg" : "xl:w-60  cursor-pointer w-40 border-solid border-1 border-orange-400 font-bold py-2 px-4 rounded-lg" }>
                <input className='w-full' onClick={e => clearInput(e.currentTarget)} placeholder="Trabajadores" name="item" onFocus={e=> e.target.value = ""}  onBlur={e => handleInputChange(e.target.value) } />
            </div>
            <div className={ !item.isSelected ? " cursor-pointer xl:w-40 w-20 border-solid border-2 border-gray-200 font-bold py-2 px-4 rounded-lg" : "xl:w-60  cursor-pointer w-40 border-solid border-1 border-orange-400 font-bold py-2 px-4 rounded-lg" }>
                <input className='w-full' onClick={e => clearInput(e.currentTarget)} placeholder="Cónyugues" name="item" onFocus={e=> e.target.value = ""}  onBlur={e => handleInputChange(e.target.value) } />
            </div>
            <div className={ !item.isSelected ? " cursor-pointer xl:w-40 w-20 border-solid border-2 border-gray-200 font-bold py-2 px-4 rounded-lg" : "xl:w-60  cursor-pointer w-40 border-solid border-1 border-orange-400 font-bold py-2 px-4 rounded-lg" }>
                <input className='w-full' onClick={e => clearInput(e.currentTarget)} placeholder="Hijos" name="item" onFocus={e=> e.target.value = ""}  onBlur={e => handleInputChange(e.target.value) } />
            </div>
                </div>
            </div>
            <div>
                <h3 className='ml-0 text-black text-lg xl:text-center text-left md:text-2xl'>Me interesan aportes en</h3>
                <div className='place-items-center grid lg:grid-cols-2 md:grid-cols-2 gap-6 grid-cols-2 overflow-visible'>
                {PracticeData.map((item, index) => {
                return (
                    <div>
                        <div key={index} onClick={() => { handleTogglePractice(index) } } className={ !item.isSelected ? " cursor-pointer w-40 border-solid border-2 border-gray-200 font-bold py-2 px-4 rounded-lg" : " cursor-pointer w-40 border-solid border-2 border-yellow-200 text-[#fcb11b] font-bold py-2 px-4 rounded-lg" }>
                            <h1 className={ !item.isSelected ? "text-sm " : "text-sm text-[#fcb11b] " } > {item.name} </h1>
                        </div>                
                    </div>
                );
                })}
                <div className={ !item.isSelected ? " cursor-pointer xl:w-60 w-40 border-solid border-2 border-gray-200 font-bold py-2 px-4 rounded-lg" : "xl:w-60  cursor-pointer w-40 border-solid border-1 border-orange-400 font-bold py-2 px-4 rounded-lg" }>
                <input className='w-full' onClick={e => clearInput(e.currentTarget)} placeholder="Otro (opcional)" name="item" onFocus={e=> e.target.value = ""}  onBlur={e => handleInputChange(e.target.value) } />
            </div>
                </div>
            </div>
            
            <div class=" md:hidden mt-5 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            </div>
        </div>
        <div className='mt-10 flex items-center justify-center'>
            <button onClick={() => { handleSubmit() } } type="button" className=" bottom-0 w-full h-12 text-white font-black mb-5 xl:mt-5 lg:w-1/5 sm:w-full md:w-full bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Next</button>
        </div>
        <div class=" hidden md:flex  mb-5 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
    </div>

  )
}

export default Register