function getConfig(name, defaultValue=null) {
    
    if( window.ENV !== undefined ) {
        return window.ENV[name] || defaultValue;
    }

    return process.env[name] || defaultValue;
}

export function getBackendUrl() {
    return getConfig(localStorage.getItem('REACT_APP_BACKEND_URL') || 'REACT_APP_BACKEND_URL', 'http://localhost:8080');
}

export function getHoursCloseTicketsAuto() {
    return getConfig('REACT_APP_HOURS_CLOSE_TICKETS_AUTO', 0);  
}