import { useStorageListener } from "./useStorageListener";
import './changeAlert.css'

function ChangeAlert ({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize)

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

export { ChangeAlert }
