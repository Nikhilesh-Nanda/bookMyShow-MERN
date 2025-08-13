  import { useEffect, useState } from 'react';
  import './Home.css';
  import axios from 'axios';
  const movies = ["Tenet","Shutter Island","OppenHeimer","Interstellar","M.S.Dhoni:The Untold Story"]
  const time = ["8:00-10:00","11:00-1:00","2:00-4:00","3:00-5:00","7:00-9:00","6:00-8:00","9:00-11:00"];
  const foodList = ["PopCorn","Choco Lava Cake","Diet Coke","Chips","Brownie","Burger","South Indian"]
  const imageLinks = ['TenetPic.jpg','ShutterIslandPic.jpg','OppenheimerPic.jpg','InterstellarPic.jpg','MSDMovie.jpg']
  const allSeats = ["A1","A2","A3","A4","B1","B2","B3","D1","D2","D3"]
  function App() {
    const[count1,setCount1] = useState(null);
    const[count2,setCount2] = useState(null);
    const[count3,setCount3] = useState(null);
    const[count4,setCount4] = useState(null);
    const[count5,setCount5] = useState(null);
    const[count6,setCount6] = useState(null);
    const[count7,setCount7] = useState(null);
    const[count8,setCount8] = useState(null);
    const[count9,setCount9] = useState(null);
    const[count10,setCount10] = useState(null);
    const[selectedIdx,setselectedIdx] = useState(null);
    const[timeSlot,setTimeSlot] = useState(null)
    const[food,setFood] = useState(null);
    
    async function sendData(movie,timeOFmovie,addOn){  
      try{
        await axios.post("http://localhost:3001/data",{movieName:movie,timeMovie:timeOFmovie,food:addOn,state:"BookingDone"});
        }
      catch(err){
        console.log("Error occured while posting",)
        }   
    }
    return (
      <div className='parent'>
        {
          imageLinks.map((item,idx)=>{
            if(idx == selectedIdx){
              return(
                <img src={imageLinks[idx]}></img>
              )
            }
          })
        }
        <title>BookMyShow|Backend Project</title>
        <div className="main-comp">
          <table className='select'>
            <tr>
              <td>
                <h1>Movies</h1>
                <hr></hr>
                <button onClick={() =>{setselectedIdx(0)}}><b>{movies[0]}</b></button>
                <button onClick={() =>{setselectedIdx(1)
                }}><b>{movies[1]}</b></button>
                <button onClick={() =>{setselectedIdx(2)}}><b>{movies[2]}</b></button>
                <button onClick={() =>{setselectedIdx(3)}}><b>{movies[3]}</b></button>
                <button onClick={() =>{setselectedIdx(4)}}><b>{movies[4]}</b></button>
              </td>
            </tr>
            <tr>
              <td>
                <br></br>
              <h1>Select Your Seats</h1>
              <hr></hr>
                <button value={count1} onClick={() =>{setCount1(count1+1)}}><b>A1</b><p>{count1}</p></button>
                <button value={count2} onClick={()=>{setCount2(count2+1)}}><b>A2</b><p>{count2}</p></button>
                <button value={count3} onClick={()=>{setCount3(count3+1)}}><b>A3</b><p>{count3}</p></button>
                <button value={count4} onClick={()=>{setCount4(count4+1)}}><b>A4</b><p>{count4}</p></button>
                
                <button value={count8} onClick={()=>{setCount8(count8+1)}}><b>B1</b><p>{count8}</p></button>
                <button value={count9} onClick={()=>{setCount9(count9+1)}}><b>B2</b><p>{count9}</p></button>
                <button value={count10} onClick={()=>{setCount10(count10+1)}}><b>B3</b><p>{count10}</p></button>
                <button value={count5} onClick={()=>{setCount5(count5+1)}}><b>D1</b><p>{count5}</p></button>
                <button value={count6} onClick={()=>{setCount6(count6+1)}}><b>D2</b><p>{count6}</p></button>
                <button value={count7} onClick={()=>{setCount7(count7+1)}}><b>D3</b><p>{count7}</p></button>
              </td>
            </tr>
            <tr>
              <h2>Select a time slot</h2>
              <hr></hr>
              
              <button onClick={()=>{setTimeSlot(0)}}><b>8:00-10:00</b></button>
              <button onClick={()=>{setTimeSlot(1)}}><b>11:00-1:00</b></button>
              <button onClick={()=>{setTimeSlot(2)}}><b>2:00-4:00</b></button>
              <button onClick={()=>{setTimeSlot(3)}}><b>3:00-5:00</b></button>
              <button onClick={()=>{setTimeSlot(4)}}><b>7:00-9:00</b></button>
              <button onClick={()=>{setTimeSlot(5)}}><b>6:00-8:00</b></button>
              <button onClick={()=>{setTimeSlot(6)}}><b>9:00-11:00</b></button>
              
              
              <h2>Select Add Ons</h2>
              <hr></hr>
              <button onClick={()=>{setFood(0)}}>PopCorn</button>
              <button onClick={()=>{setFood(1)}}>Choco Lava Cake</button>
              <button onClick={()=>{setFood(2)}}>Diet Coke</button>
              <button onClick={()=>{setFood(3)}}>Chips</button>
              <button onClick={()=>{setFood(4)}}>Brownie</button>
              <button onClick={()=>{setFood(5)}}>Burger</button>
              <button onClick={()=>{setFood(6)}}>South Indian</button>
              <h4><u>Movie Selected:</u>  {selectedIdx!=null && movies[selectedIdx]}</h4>
              <h4><u>Time Selected:</u> {timeSlot!=null && time[timeSlot]}</h4>
              <h4><u>AddOn Selected:</u> {food!=null && foodList[food]}</h4>
              
          
            </tr>
            
          </table>
          <br></br><br></br>
          <button onClick={()=>sendData(movies[selectedIdx],time[timeSlot],foodList[food])} className="bookButton">Book Now</button>
      </div>
      </div>
    );
  }
  export default App;
