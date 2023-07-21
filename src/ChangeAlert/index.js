import { withStorageListener } from "./withStorageListener";
import './changeAlert.css'

function ChangeAlert ({ show, toggleShow }) {
  if (show) {
    return (
      <div className="changeAlert-bg">
        <div className="changeAlert">
          <p className="changeAlert-text">
            <span>Info: </span>
            Looks like changes were made in another window, please refresh
            </p>
          <button
            className="changeAlert-button"
            onClick={() => toggleShow(false)}
          >
            Refresh tasks
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }