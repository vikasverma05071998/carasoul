import React, { useEffect, useState } from 'react'
import data from './Data/data'
import './slider.css'
export default function App() {
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    const slider = setInterval(()=>{
      index === data.length-1 ? setIndex(0) : setIndex(index + 1)
    },3000);
    return ()=> clearInterval(slider)
  },[index])
  return (
    <>
    
     <div>
      <h1 style={{textAlign:'center',textTransform:'capitalize',color:'red'}}>make slider without using any dependencies </h1>      
      </div>
    <section className='section'>
     
    <div className='sections'>
   {
    data.map((item, itemindex)=>{
    const {id,image,name,Description} = item; 
    let position = 'nextSlide'
    if(itemindex === index){
      position = 'activeSlide'
    }
    if(itemindex === index - 1 || (index === 0 && itemindex === data.length-1)){
      position = 'lastindex'
    }
    return(
      <article key={id} className={position}>
       <img src={image} alt={image} className='image'  style={{height:'250px'}}/>
        <h3>{name}</h3>
        <p>{Description}</p>
      </article>
    )
 })};
 <button className='prev'
    onClick={()=>{
      index === 0 ? setIndex(data.length - 1):
      setIndex(index- 1)
    }}>
  prev
 </button>
    <button className='next' onClick={()=>{
      index === data.length-1 ? setIndex(0) : setIndex(index + 1 )
    }}>next</button>
    </div>   
    </section>
    
    </>
  )
}
