import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import FruitData from '../../FruitData'
import BackIcon from '../../assets/images/arrow.png'
import AddIcon from '../../assets/images/AddButton.svg'
import CheckIcon from '../../assets/images/CheckButton.svg'
// import Mango from '../../assets/images/register/Mango.png'

function Register() {
    const [checkFruit, setCheckFruit] = useState([FruitData]);
    const [item, setItem] = useState('');
    const [input,setInput] = useState('');
    const [showMore, setShowMore] = useState(false);
    const [filteredArray, setFilteredArray] = useState([]);
    const SplicedArray = [...FruitData].splice(0,12)
    const dataForDisplay = showMore ? FruitData : SplicedArray;
    const fruitSelected = FruitData.filter( data => data.isSelected )
    //used for moving throught routes
    let navigate = useNavigate();

    const handleToggleFruit = (index) => {
            const items = [...FruitData];
            items[index-1].isSelected = !items[index-1].isSelected ;
            setCheckFruit(items);
            console.log(items[index])
            // console.log(items)
    }

    const handleUntoggleFruit = (index) => {
        const items = [...fruitSelected];
        items[index].isSelected = !items[index].isSelected ;
        setCheckFruit(items);
        console.log(items[index])
    }

    const handleSubmit = () => {
        const inputFiltered = FruitData.filter( data => data.isSelected )
        //send checked data to global state and db
        console.log(inputFiltered)
        navigate("/login");
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
            <button onClick={() => navigate('../register/4')} className='p-0 m-0'>
                <img className='row-span-3 inline w-20 float-left' alt='BackIcon' src={BackIcon} />
            </button>            
            <div className='place-items-center '>
                <h3 className='col-span-2 mt-4 mx-0 text-4xl font-black' >Favorites</h3>
                <h1 className='row-span-2 mt-0 mb-5 lg:text-2xl text-sm'>Add your favorite products</h1>
            </div>
        </div>
        <div className='text-center text-xs place-items-center flex flex-col overflow-visible'>
            <div className={ !item.isSelected ? " mb-10 cursor-pointer w-80 border-solid border-2 border-gray-200 font-bold py-3 px-4 rounded-lg" : "mb-10 xl:w-60  cursor-pointer w-40 border-solid border-1 border-orange-400 font-bold py-2 px-4 rounded-lg" }>
                <input value={input} className='w-full' onChange={e => setInput(e.target.value)} placeholder="Name" name="item" onBlur={e => (e.target.value) } />
            </div>
            <div className='place-items-center grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 gap-2 grid-cols-3 overflow-auto'>
            {fruitSelected.map((item, current) => {
                return (
                    <div>
                        <div key={item.id} onClick={() => { handleUntoggleFruit(current) } } class=" relative cursor-pointer font-bold py-2 px-4 rounded-lg">
                            <img src={item.src} className={ !item.isSelected ? "h-16 w-16 border-solid border-2 rounded-full" : "h-16 w-16 border-solid border-tforange border-2 rounded-full"} alt="Fruit"/>
                            {item.isSelected ?
                                <img src={CheckIcon} alt="" className={ !item.isSelected ? "bg-tforange top-0 right-4 absolute w-5 h-5 border-2 rounded-full float-right ": "origin-center duration-300 float-right top-0 right-4 absolute w-5 h-5 duration-300 bg-tforange border-2 border-white dark:tforange rounded-full"}/>
                            :
                                <img src={AddIcon} alt="" className={ !item.isSelected ? "origin-center duration-300  float-right top-0 right-4 absolute  w-5 h-5 duration-300 bg-tforange top-0 right-4 absolute w-5 h-5 border-2 rounded-full float-right ": " bg-tforange border-2 border-white dark:tforange rounded-full"}/>
                            }
                        </div>          
                    </div>
                );
            })}
            </div>
            <div className='bg-gray-100 rounded-lg '>
                <div className=' place-items-center grid grid-rows-3 lg:grid-cols-4 md:grid-cols-3 gap-2 grid-cols-3 overflow-auto'>
                {dataForDisplay
                .filter(item => {
                    if (!input) return true
                    if (item.name.includes(input) || item.name.includes(input.charAt(0).toUpperCase() + input.slice(1))) {
                    return filteredArray
                    }
                })
                .map((item, index) => {
                    return (
                        <div>
                            <div key={item.id} onClick={() => { handleToggleFruit(item.id) } } class=" relative cursor-pointer font-bold py-2 px-4 rounded-lg">
                                <img src={item.src} className={ !item.isSelected ? "h-16 w-16 border-solid border-2 rounded-full" : "h-16 w-16 border-solid border-tforange border-2 rounded-full"} alt="Fruit"/>
                                {item.isSelected ?
                                    <img src={CheckIcon} alt="" className={ !item.isSelected ? "bg-tforange rotate-180 top-0 right-4 absolute w-5 h-5 border-2 rounded-full float-right ": "origin-center duration-300 rotate-0 float-right top-0 right-4 absolute w-5 h-5 duration-300 bg-tforange border-2 border-white dark:tforange rounded-full"}/>
                                :
                                    <img src={AddIcon} alt="" className={ !item.isSelected ? "origin-center rotate-180  duration-300  float-right top-0 right-4 absolute  w-5 h-5 duration-300 bg-tforange top-0 right-4 absolute w-5 h-5 border-2 rounded-full float-right ": " bg-tforange border-2 border-white dark:tforange rounded-full"}/>
                                }
                            </div>          
                        </div>
                    );
                })}
                </div>
                <button className='p-0 m-0 ' type="button" onClick={() => setShowMore(!showMore)}>
                    {input.length === 0 ? 
                        FruitData.length > 12 ?
                        <h1 className='font-bold mx-0 text-sm'>{showMore ? 'Show Less' : 'Show More'}</h1> 
                        :
                        <h1 className='hidden font-bold mx-0 text-sm'>{showMore ? 'Show Less' : 'Show More'}</h1> 
                        
                    :
                    <h1 className='font-bold mx-0 text-sm'>{filteredArray.length} coincidencias</h1>
                    }
                </button>
            </div>
            <div class="md:hidden mt-5 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
        </div>
        </div>
        <div className='mt-10 flex items-center justify-center'>
            <button onClick={() => { handleSubmit() } } type="button" className=" bottom-0 w-full h-12 text-white font-black mb-5 xl:mt-5 lg:w-1/5 sm:w-full md:w-full bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Finish</button>
        </div>
        <div class="hidden md:flex  mb-5 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
        </div>
    </div>

  )
}

export default Register