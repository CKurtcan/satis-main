import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props1){
    

    function addSeped (props) {
        if(props === props1.src){
          
        function1  
          
          ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8aO9DICkoSH5aZ77TM6UjdsLwPSQuoIzUA&s");
          ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8aO9DICkoSH5aZ77TM6UjdsLwPSQuoIzUA&s");
        }
    }
    

    return(
        <div className="col border ml-1 mt-2">
            <img  className="mt-3" style={{width: 100 , height:100}} src={props1.src} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props1.name}</h5>
                <p className="card-text">{props1.exp}.</p>
                <a onClick={()=>addSeped(props1.src)} className='btn btn-primary mt-5'>Sepete Ekle</a>
            </div>
        </div>
    )
    
}
export default Card;