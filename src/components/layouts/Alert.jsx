import {useContext}from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {

    const {alert} = useContext(AlertContext);
    
    return alert != null && (
    <p className="flex items-start mb-4 space-x-2">
        { alert.type === 'error' && (
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" 
            viewBox="0 0 24 24" 
            fill="#FF6863" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="feather feather-alert-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
        </p>
    </p>
  )
}

export default Alert;