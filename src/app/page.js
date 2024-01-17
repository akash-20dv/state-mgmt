'use client';
import  {addCount ,decCount} from '../redux/CountSlice'
import {useSelector ,useDispatch} from 'react-redux'
export default function Home() {
  const dispatch = useDispatch()
  const counting = useSelector((state)=>state.counter.count)
  const handleInc = ()=>{
    dispatch(addCount())
  }
  return (
    <main className='my-10 p-6 m-auto min-w-[230px] w-[500px] shadow-lg  shadow-amber-100 text-center'>
        counter app
        <h1 className='text-3xl mb-6'>Count:{counting}</h1>
        <button className='mx-3 border-1 border border-white bg-white text-black px-6 py-2' onClick={handleInc}>inc</button> 
        <button className='mx-3 border-1 border border-white bg-white text-black px-6 py-2'  onClick={()=>dispatch(decCount())}>dec</button>
    </main>
  )
}
