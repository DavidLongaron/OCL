const BASE_URL='http://localhost:3001';
function fetchRequest(path,options){
    return fetch(BASE_URL+path,options).then(res=>res.status<400?res:Promise.reject())
    .then(res=> res.status!==204?res.json() : res)
    .catch(err=>{
        console.log("Error:",err)
    })
}

function getCharas(){
    return fetchRequest('/chara');
};

function postChara(body){
    return fetchRequest('/chara',{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    });
}


const ApiService= {
    getCharas,postChara,
}

export default ApiService;