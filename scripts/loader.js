window.addEventListener('DOMContentLoaded',()=>{
    fetch('navbar.html')
    .then(response=>response.text())
    .then(html=>{
        document.getElementById('navbar').innerHTML=html
    })
    .catch(error=>{
        console.error('failed to load navbar',error);
    });
});