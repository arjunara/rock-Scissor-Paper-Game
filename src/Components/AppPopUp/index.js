import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'
import './index.css'

const AppPopUp = () => (
  <Popup
    trigger={
      <button type="button" className="rules-btn">
        Rules
      </button>
    }
    modal
    className="popup-content"
  >
    {close => (
      <div className="popup-content-container">
        <div className="button-container">
          <button type="button" onClick={() => close()}>
            <RiCloseLine size={30} />
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="rule-image"
        />
      </div>
    )}
  </Popup>
)

export default AppPopUp
