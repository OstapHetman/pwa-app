let deferredPrompt;

// Check if browser support Promise
if (!window.Promise) {
    window.Promise = Promise;
}

// Check if serviceWorker avaliable in Browser
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then( () => {
            console.log('Service worker registered');    
        }).catch( (err) => {
            console.log(err)
        });
}

// Install Banner
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired')
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

// Understanding fetch method (GET request)
fetch('http://httpbin.org/ip')
// fetch('http://httpbin.org/ips') // Wrong URL
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });

// Understanding fetch method (POST request)
fetch('http://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify({
       message: 'Does this work?'
    })
}) // POST URL
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });