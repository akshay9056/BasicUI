import React,{useState,useEffect} from 'react'
import Dropdown from './components/Dropdown';
import "./index.css";
import AudioPlayer from "./components/Audio2";
function importAll(r) {
  let files = {};
  r.keys().forEach((item, index) => { files[item.replace('./', '')] = r(item); });
  return files;
}


function App() {
   const [audioList, setAudioList] = useState(false);

  



  return (
    <div className="pb-1">
      <div className="sample text-center p-3 bg-success text-white mb-3
      fs-3

" style={{height:"10vh"}}>
        Avangrid Recordings
      </div>


      <div className='container text-center d-flex flex-column mb-3 mt-2 gap-4' style={{height:"80vh"}}>
        
        <div className='row '>
          <div className="sub-container col">
            <Dropdown/>

          </div>
          <div className="sub-container col">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='value..'/>


          </div>
          <div className="sub-container col">
        
          <input type="date" class="form-control "
 name="trip-start"
          
          id="startDate" 
          aria-describedby="startDateHelp"/>

          </div>
          <div className="sub-container col">
          <input type="date" class="form-control"/>


          </div>
          <div className="sub-container col">
         <button
         className='btn btn-success' onClick={()=>setAudioList((prev)=>!prev)}>
          Search
          </button>


          </div>
        </div>

        <div className='text-center' style={{height:"80%"}}>
          <h1 style={{height:"100%"}} className=' d-flex align-items-center justify-content-center'>
          {(audioList)?<AudioPlayer />:<h1 className='text-success'>
            There are no recording files available :)</h1>}

          </h1>

        </div>


      </div>
      


    </div>
  )
}

export default App