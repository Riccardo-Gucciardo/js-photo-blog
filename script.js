const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const metodFetch = {method: 'GET'}
const lista = document.querySelector('.row')

fetch(endpoint, metodFetch)  
.then(res => res.json())
.then(data=> {
    console.log(data);

    data.forEach(element => {
        const {date,id,title,url} = element
        lista.innerHTML +=
        `
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card  position-relative">
                    <img src="./img/pin.svg" alt="" class="position-absolute top-0 start-50 translate-middle">
                    <img class="card-img" src=${url} alt=${title}>
                <div class="card-body">
                    <span class="card-text">${date}</span>
                    <h3 class="card-title">${title}</h3>        
                </div>
            </div>
        </div>
        `
        
    });

})
.catch(error=>{
    console.log(error);
    

});