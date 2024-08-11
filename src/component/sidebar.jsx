import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { GlobalData } from '../store/context'
import { useContext } from 'react'

function Sidebar() {

  const [expand, setExpand] = useState(false)
  const {preInput,handelFetch,newChat} = useContext(GlobalData)

  return (
    <div className='sidebar'>
    <div className="side-top">
      <img  className = "menu" src={assets.menu_icon} alt="" onClick={()=>setExpand(!expand)}/>
      <div className="new-chat" onClick={newChat}>
        <img src={assets.plus_icon} alt=""  />
        {expand && <p >New Chat</p>}
      </div>
      {expand && <div className="recent">
        <p className="recent-titel">Recent</p>
        {preInput.map((item,i)=>{
          return (
            <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p onClick={() => handelFetch(item)}>{item.slice(0,18)} ...</p>
          </div>

          )
        })}
       
      </div>}
      
    </div>
    <div className="side-buttom">
      <div className="buttom-item recent-entry">
        <img src={assets.question_icon} alt="" />
        {expand && <p>Help</p>}
      </div>
      <div className="buttom-item recent-entry">
        <img src={assets.history_icon} alt="" />
        {expand && <p>Activity</p>}
      </div>
      <div className="buttom-item recent-entry">
        <img src={assets.setting_icon} alt="" />
        {expand && <p>Settings</p>}
      </div>
    </div>
    
    </div>
  )
}

export default Sidebar