import { dateTime } from "../../utils/dateTime";
export default function Toast({children, onClose }) {
    return (
        <div className='toast-overlay'>
            <div className='toast'>
                <div className='toast-title'>
                    <h2><span>Explore U. </span> {dateTime}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <div className='toast-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}
