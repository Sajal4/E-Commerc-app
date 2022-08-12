import React, {  Createcontext } from './Createcontext'
import {useContext } from 'react'
import { useNavigate } from 'react-router-dom';

function Top() {
    const [list] = useContext(Createcontext);
    let store=useNavigate();

    return (
        <div className='box1' >
            {list.filter((value) => value.id===3).map(items =>
                <div key={items.id}  onClick={()=>store(`/Mobiles`)}>  
                    <img className='top' src={items.imageurl} alt=''/>
                    <h2 className='best'> " Best Seller "</h2>
                    <h2 className='best1'>Apple iPhone 13 Pro Max</h2>
                </div>
            )}
        </div>
    )
}
export default Top;