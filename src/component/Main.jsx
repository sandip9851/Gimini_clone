import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { FaRegCopyright } from "react-icons/fa";
import { GlobalData } from "../store/context";
import { useContext } from "react";

function Main() {
  const {
    handelFetch,
    setInput,
    input,
    showResult,
    recentInput,
    result,
    loading,
  } = useContext(GlobalData);

  return (
    <div className="main">
      <div className="main-nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      {!showResult ? (
        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello, Buddy.</span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="main-cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip.</p>
              <img src={assets.compass_icon} alt="Compass Icon" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planning.</p>
              <img src={assets.bulb_icon} alt="Bulb Icon" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat.</p>
              <img src={assets.message_icon} alt="Message Icon" />
            </div>
            <div className="card">
              <p>Improve the readability of the following code.</p>
              <img src={assets.code_icon} alt="Code Icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentInput}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? (
              <div
                className="spinner-grow text-info"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              ></div>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: result }}></p>
            )}
          </div>
        </div>
      )}

      <div className="main-bottom">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter a prompt here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div>
            <img src={assets.gallery_icon} alt="Gallery Icon" />
            <img src={assets.mic_icon} alt="Mic Icon" />
            {input && <img src={assets.send_icon} alt="Send Icon" onClick={()=>handelFetch(input)} />}
            
          </div>
        </div>
        <footer>
          AI may display inaccurate info, including about people, so
          double-check its responses. Your privacy and AI App <FaRegCopyright />{" "}
          Sandip Pradhan
        </footer>
      </div>
    </div>
  );
}

export default Main;
