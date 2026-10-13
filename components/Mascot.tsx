'use client'
import React,{useState} from 'react'
export default function Mascot({alt='Moune — mascotte',className='',size='auto'}:{alt?:string,className?:string,size?:string}){const[failed,setFailed]=useState(false);const style:React.CSSProperties={width:size==='auto'?undefined:size,height:size==='auto'?undefined:size,maxWidth:'100%'};return <img src={failed?'/mascot-placeholder.svg':'/mascot.png'} alt={alt} onError={()=>setFailed(true)} className={`rounded-xl shadow-xl ${className}`} style={style}/>}
