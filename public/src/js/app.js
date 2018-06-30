let deferredPrompt;

// Check if serviceWorker avaliable in Browser
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then( 
            () => {
            console.log('Service worker registered');    
        });
}

// Install Banner
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired')
    event.preventDefault();
    deferredPrompt = event;
    return false;
});