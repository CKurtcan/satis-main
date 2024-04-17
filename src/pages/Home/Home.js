import { useNavigate } from 'react-router-dom';
import React,{ useState } from 'react';
import Card from '../../components/atom/Card';

/**https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1TMbNsBR_8kcWxztXrW-gBLCMsECXrd0kGJ31KP6wEadEeyCH3gZFYb_KHWqr3a0hoI&usqp=CAU
*/
function Home() {

  const navigate = useNavigate();
  const [umit,setUmit] = useState('');
  const [deniz,setDeniz] = useState('');
  const [can,setCan] = useState('');

  return (
    <div className='container' style={{width: 800, height: 800,}}>
      <div style={{width: 800, height: 600, textAlign: 'center', backgroundColor: '#3c6382'}} class="card">
      <div className="container text-center">
        <div className="row">
            {/* <div className="col border ml-1 mt-2">
              <img  className="mt-3" style={{width: 100 , height:100}} src={umit} class="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Ümit GECEKUŞ</h5>
              <p className="card-text">Kızların Sevgilisi Kaslı Back-End Developer.</p>
              <a onClick={()=>addSeped(umit)} className='btn btn-primary mt-5'>Sepete Ekle</a>
            </div>
            </div>
            <div className="col border ml-1 mt-2">
              <img className="mt-3" style={{width: 100 , height:100}} src={deniz} class="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Deniz BEKTAŞ</h5>
              <p className="card-text">Çilekli Link Kralı Lord of the Full-Stack Developer.</p>
              <a onClick={addSeped} className='btn btn-primary mt-5' href="#">Sepete Ekle</a>
            </div>
            </div>
            <div className="col border ml-1 mt-2">
                <img className="mt-3" style={{width: 100 , height:100}} src={can} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Can KURTCAN</h5>
              <p className="card-text">Gamer and Gamer Full Stack Developer</p>
              <a onClick={addSeped} className='btn btn-primary mt-5' href="#">Sepete Ekle</a>
            </div>
            </div>*/}
            <Card src={'https://media.licdn.com/dms/image/D4D35AQGDVmtT2Mu3vQ/profile-framedphoto-shrink_100_100/0/1712759705298?e=1713967200&v=beta&t=FllCDRN3eEPoA3piUpxGt1Ai4Y758BEmlevc_VFpqLA'} exp={'Kızların Sevgilisi Kaslı Back-End Developer.'} name={'Ümit GECEKUŞ'}/>
            <Card src={'https://media.licdn.com/dms/image/D5635AQGQX2VLD9_Jlw/profile-framedphoto-shrink_400_400/0/1712572900865?e=1713967200&v=beta&t=fb_Vh-La2POyL96OZEQgtON8g8A7Rpf13lVYqfBs3M0'} exp={'Kızların Sevgilisi Kaslı Back-End Developer.'} name={'Deniz BEKTAŞ'}/>
            <Card src={'https://media.licdn.com/dms/image/C5603AQEfeJXGruw_Rw/profile-displayphoto-shrink_400_400/0/1582896916330?e=1718841600&v=beta&t=YEuhVpKb80FJ-2NrQLI5kY-1sAm9206kYHZ3SWBD5jw'} exp={'Kızların Sevgilisi Kaslı Back-End Developer.'} name={'cAN kURTCAN'}/>
              </div>
          </div>
      </div>
    </div>
    
  );
}

export default Home;
