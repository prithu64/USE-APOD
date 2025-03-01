import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

function App() {
  
 const [showModal,setShowModal] = useState(false)
 const [data,setData] = useState();
 const [loading,setLoading] = useState(false);

 function handleToggleModal(){
  setShowModal(!showModal)
 }

 useEffect(()=>{
  async function fetchApiData() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const url = 'https://api.nasa.gov/planetary/apod'+`?api_key=${NASA_KEY}`
    
    const today = (new Date()).toDateString();
    const localKey = `NASA-${today}`
    if(localStorage.getItem(localKey)){
      const apiData = JSON.parse(localStorage.getItem(localKey))
      setData(apiData)
      console.log("fetch from cache today")
      return;
    } 
  
    localStorage.clear();
    
    try {
      console.log("api try")
     const res =await fetch(url)
     console.log("api hit")
    
     const apiData = await res.json()
     localStorage.setItem(localKey,JSON.stringify(apiData))
     setData(apiData);
     console.log('fetch from api today') 
    } catch (error) {
      console.log(error)
    }
  }
  fetchApiData(); 
 },[])

  return (
    <> 
     {data ? <Main data={data}/> :(<div className='flex items-center justify-center h-screen'> <i className="fa-solid fa-gear opacity-25 text-5xl animate-spin"></i> </div>)}
      {showModal && (<SideBar data={data} showModal={showModal} handleToggleModal={handleToggleModal}>asdadad</SideBar>
     )}
 {data && <Footer handleToggleModal={handleToggleModal} data={data} showModal={showModal}/>}
    </>
  )
}

export default App
