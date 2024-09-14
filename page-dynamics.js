export function renderPopErrorMessage(id, message, duration){
    const e = document.getElementById(id) || id/*Encaso de que sea un elemento */;

    e.textContent = message;
    //e.style.display="flex";
    setTimeout(()=>{e.textContent=""}, duration);
}