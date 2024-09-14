export const appSettings = {
    UserGeneratedContent: {
        Files:{
            SizeLimit: 5 * (1024 * 1024),
        },
    },
    App:{
        Name: "Dynamic Catalogue",
        Developer: "Corporación Dinámica",
        Version: {
            Type: "Not-out",
            Num: "0.0"
        },

    },

};

export const redirects = {
    ["workflow"]: "http://localhost:3007",
};

export const keybindsCodeName = {
    LeftAlt: "AltLeft",
    RightAlt: "AltRight",
    LeftShift: "ShiftLeft",
};

export const soundsList = { //Identificadores de los sonidos.
    winBgSound: "windowsBackgroundSound",
}

const soundstList = { //Identificadores de los sonidos. //Variable local
    winBgSound: "windowsBackgroundSound",
}

/**
 * Data based on this Wikipedia Page:
 *      https://en.wikipedia.org/wiki/List_of_countries_by_tax_rates
 * 
 *      https://oecd.org/tax/tax-policy/estadisticas-tributarias-america-latina-caribe-honduras.pdf
 *      https://www.oecd.org/tax/tax-policy/estadisticas-tributarias-america-latina-caribe-nicaragua.pdf
 * Some of the INFO may be innacurate.
 */

export function parseDate(str) {
    let [day, month, year] = str.split('-');
    return new Date(year, month - 1, day);
}

export function formatNumberWithSuffix(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(4) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(3) + 'K';
    } else {
        return number.toFixed(2).toString();
    };
};

export function hasReachedTheLimit(min, max){
    if(min >= max){
        return true;
    }else{
        return false;
    };
};

export const uploadImage = async (formData) => {
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            return result.filename;
        } else {
            throw new Error('Error al subir la imagen');
        };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    };
};
export function appendClassList(list, element){
    list.forEach(classToAppend=>{
        if(typeof(classToAppend) !== "string"){
            return;
            //throw Error("No es un string.");
            
        };
        element.classList.add(classToAppend);
    });
};

export function onArrayChange(action, value){
    console.log(`Array changed: ${action} ${value}`);
};

function removefea(toRemove){
    document.onclick = null;
    toRemove.remove();
};


export class newModalWindow {
    constructor (){
        
    };
    
    throwWarningPanel(title, message){

        const bgsound = document.getElementById(soundstList.winBgSound) || null;

        bgsound.play();
        
        const divError = document.createElement("div");
        divError.classList.add("modal");

        divError.innerHTML = `
            <div class="modal-header">
                <span class="material-symbols-rounded " style="font-size: 30px;" translate="no">
                    warning
                </span>
                <button class="button-whitegray-icon" onclick="this.parentElement.parentElement.remove()">                
                    <span class="material-symbols-rounded" style="font-size: 25px;">
                     
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <h2>Error: ${title}</h2>
                <p id="message-error-modal">${message}</p>
            </div>
            <div class="modal-footer">
                <button class="modal-button accept-button" onclick="this.parentElement.parentElement.remove()">OK</button>
                
            </div>
        `;

       /* document.onclick = function(event) {
            var isClickInsideContainer = divError.contains(event.target);
            if (!isClickInsideContainer) {
                bgsound.play(); 
            };
        };*/

        document.body.appendChild(divError);
    };

    throwErrorPanel(title, message){
   
        const bgsound = document.getElementById(soundstList.winBgSound) || null;

        bgsound.play();

        const divError = document.createElement("div");
        divError.classList.add("modal");
        /*document.onclick = function(event) {
            var isClickInsideContainer = divError.contains(event.target);
            if (!isClickInsideContainer) {
                bgsound.play(); 
            };
        };*/

        divError.innerHTML = `
            <div class="modal-header">
                <span class="material-symbols-rounded error-round-modal" style="font-size: 30px;" translate="no">
                    error
                </span>
                <button class="button-whitegray-icon" onclick="this.parentElement.parentElement.remove()">                
                    <span class="material-symbols-rounded" style="font-size: 25px;">
                     
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <h2>Error: ${title}</h2>
                <p id="message-error-modal">${message}</p>
            </div>
            <div class="modal-footer">
                <button class="modal-button delete-button" onclick="this.parentElement.parentElement.remove()">OK</button>
                
            </div>
        `;

       /* const deleteButton = divError.querySelector(".delete-button");
        deleteButton.addEventListener("click", ()=>{
            document.onclick = null;
        });*/

        document.body.appendChild(divError);
    };

    throwNormalPanel(title, message){
        const bgsound = document.getElementById(soundstList.winBgSound) || null;

        bgsound.play();
        const divError = document.createElement("div");
        divError.classList.add("modal");

        divError.innerHTML = `
            <div class="modal-header">
                <span class="material-symbols-rounded" style="font-size: 30px;" translate="no">
                    notification_important
                </span>
                <button class="button-whitegray-icon" onclick="this.parentElement.parentElement.remove()">                
                    <span class="material-symbols-rounded" style="font-size: 25px;">
                     
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <h2>${title}</h2>
                <p>${message}</p>
                
            </div>
            <div class="modal-footer">
                
                <button class="modal-button accept-button" onclick="this.parentElement.parentElement.remove()">Aceptar</button>
            </div>
        `;
        document.body.appendChild(divError);
    };

    throwConfirmPanel(title, message, callback){
        const bgsound = document.getElementById(soundstList.winBgSound) || null;

        bgsound.play();
        const divError = document.createElement("div");
        divError.classList.add("modal");

        divError.innerHTML = `
            <div class="modal-header">
                <span class="material-symbols-rounded" style="font-size: 30px;" translate="no">
                    notification_important
                </span>
                <button class="button-whitegray-icon" onclick="this.parentElement.parentElement.remove()">                
                    <span class="material-symbols-rounded" style="font-size: 25px;">
                     
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <h2>${title}</h2>
                <p>${message}</p>
                
            </div>
            <div class="modal-footer">
                <button class="modal-button" onclick="this.parentElement.parentElement.remove()">Cancelar</button>
                <button class="modal-button accept-button">Aceptar</button>
            </div>
        `;

        const modalBtnEdit =  divError.querySelector(".accept-button");

        modalBtnEdit.onclick = ()=>{
            
            //console.log(callback);
            if (typeof callback === "function"){
                callback({
                    pressed: true
                }, divError);
                //setTimeout(()=>divError.remove(), 1000);
                
            }else{
                this.throwErrorPanel("ERROR", `¡${callback} no es una función!`);
                return;
            };
            
        };
        
        document.body.appendChild(divError);
    };

    throwInputModal(title, message, input_settings, callback){
        
        const bgsound = document.getElementById(soundstList.winBgSound) || null;

        bgsound.play();
        const divError = document.createElement("div");
        divError.classList.add("modal");

        divError.innerHTML = `
            <div class="modal-header">
                <span class="material-symbols-rounded" style="font-size: 30px;" translate="no">
                    edit
                </span>
                <button class="button-whitegray-icon" onclick="this.parentElement.parentElement.remove()">                
                    <span class="material-symbols-rounded" style="font-size: 25px;">
                     
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <h2>${title}</h2>
                <p>${message}</p>
                <input  type="${input_settings.type}" value="${input_settings.value || ''}" class="square-input input-value" style="width: 100%;" placeholder="${input_settings.placeholder || "Introduce un valor válido."}">
            </div>
            <div class="modal-footer">
                <button class="modal-button" onclick="this.parentElement.parentElement.remove()">Cancelar</button>
                <button class="modal-button accept-button" >Aceptar</button>
            </div>
        `;

        const modalBtnEdit =  divError.querySelector(".accept-button");

        modalBtnEdit.onclick = ()=>{
            document.onclick = null;
            const inputValue = divError.querySelector(".input-value").value;
            //console.log(callback);
            if (typeof callback === "function"){
                callback(inputValue, divError);
                //setTimeout(()=>divError.remove(), 1000);
                
            }else{
                this.throwErrorPanel("ERROR", `¡${callback} no es una función!`);
                return;
            };
            
        };
       
        document.body.appendChild(divError);
    };
};

export function generateUniqueId(text) {
    // Crear un hash simple a partir del texto
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = ((hash << 5) - hash) + text.charCodeAt(i);
      hash |= 0; // Convertir a un entero de 32 bits
    }
    return `id-${hash.toString(36)}`;
}

export function windowHistoryGoBack() {
    window.history.back();
}

export function copyHTMLElement(elementId) {
    // Obtener el elemento original por su ID
    const originalElement = document.getElementById(elementId);
    
    // Clonar el elemento
    const clonedElement = originalElement.cloneNode(true);
    
    // Opcional: cambiar el ID del elemento clonado para evitar duplicados en el DOM
    clonedElement.id = elementId + '_copy';
    
    // Agregar el elemento clonado al contenedor de copias
    const copyContainer = document.getElementById('copyContainer');
    copyContainer.appendChild(clonedElement);
}

export function downloadImageViaURL(url, name, opts) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      saveAs(xhr.response, name, opts)
    }
    xhr.onerror = function () {
      console.error('could not download file')
    }
    xhr.send()
  }
  

export function descargarImagen(url, nombreArchivo) {
    // Realiza una solicitud para obtener la imagen
    fetch(url)
    .then(response => response.blob())
    .then(blob => {
        // Crea un enlace para descargar la imagen
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = URL.createObjectURL(blob);
        enlaceDescarga.download = nombreArchivo;

        // Agrega el enlace al cuerpo del documento y simula el clic
        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();

        // Limpia el enlace después de la descarga
        setTimeout(() => {
            document.body.removeChild(enlaceDescarga);
            URL.revokeObjectURL(enlaceDescarga.href);
        }, 0);
    });
}

export function exportArrayAsJsonFile(dataToExport, firestoreDoc, fileName){
    //dateData = getDateAndTime();
    
    const array_data = [];
    dataToExport.forEach((dataToExport)=>{
        let data;
        if(firestoreDoc){
            data = dataToExport.data();
            array_data.push(data);
        }else{
            array_data.push(dataToExport);
        };
        
        

    });
    console.log(array_data);
    const jsonString = JSON.stringify(array_data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.style.display = "none";
    a.download = fileName; // Nombre del archivo descargado
    document.body.appendChild(a);
    a.click(); 
};

export function setCookie(cookieName, cookieValue) { 
    var d = new Date(); 
    d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000); 
    var expires = "expires=" + d.toGMTString(); 
    document.cookie = cookieName + "="  
    + cookieValue + ";" + expires + ";path=/"; 
};

export function getCookie(cookieName) { 
    var name = cookieName + "="; 
    var decodedCookie = decodeURIComponent(document.cookie); 
    var cookieArray = decodedCookie.split(";"); 
    for (var i = 0; i < cookieArray.length; i++) { 
        var cookie = cookieArray[i]; 
        while (cookie.charAt(0) == " ") { 
            cookie = cookie.substring(1); 
        } 
        if (cookie.indexOf(name) == 0) { 
            return cookie.substring(name.length, cookie.length); 
        } 
    } 
    return ""; 
} 

export function parseDateTime(fecha, hora) {
    console.log(fecha.split("/"));
    let [day, month, year] = fecha.split('/');
    console.log([day, month, year])
    let [hours, minutes, seconds] = hora.split(':');
    let isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    console.log(`${isoString}`); // Mensaje de depuración
    return new Date(isoString);
}

export const avalaibleCountryTaxOptions = {
    'Afganistan': 0.0,
    'Albania': 0.2,
    'Algeria': 0.19,
    'Andorra': 0.045,
    'Armenia': 0.20,
    'Azerbaijan': 0.18,
    'Mexico': 0.16,
    'Canada': 0.05,
    'China': 0.13,
    'Colombia': 0.19,
    'USA': 0.115,
    'Russia': 0.2,
    'Georgia': 0.18,
    'Ghana': 0.03,
    'Rwanda': 0.18,
    'Gibraltar': 0.00,
    'Grenada': 0.00,
    'Guatemala': 0.12,
    'Germany': 0.19,
    'South Korea': 0.1,
    'Argentina' : 0.21,
    'Sri Lanka': 0.12,
    'Mozambique': 0.00,
    'San Marino': 0.00,
    'Brazil': 0.19,
    'France': 0.2,
    'Eritrea': 0.00,
    'North Macedonia': 0.18,
    'Norway': 0.25,
    'Oman': 0.05,
    'Palau': 0.00,
    'Palestine': 0.145,
    'Philippines': 0.12,
    'Panama': 0.07,
    'Gabon': 0.18,
    'Niger': 0.07,
    'Nigeria': 0.075,
    'Niue': 0.125,
    'Gambia': 0.00,
    'Australia': 0.25,
    'Japan': 0.1,
    'Belarus': 0.2,
    'Poland': 0.23,
    'United Kingdom': 0.2,
    'Belgium': 0.21,
    'Bulgaria':0.2,
    'Burkina Faso': 0.18,
    'Cambodia': 0.18,
    'Ireland': 0.23,
    'Belize': 0.125,
    'Benin':0.18,
    'Bolivia': 0.13,
    'Türkiye': 0.20,
    'Spain': 0.21,
    'Portugal': 0.23,
    'Ukraine': 0.2,
    'Tunisia': 0.18,
    'Qatar': 0.00,
    'Romania': 0.19,
    'Sweden': 0.25,
    'Austria':0.2,
    'Netherlands': 0.21, //Holand
    'Finland': 0.24,
    'Bahamas': 0.12,
    'Bahrein':0.10,
    'Bangladesh':0.15,
    'Costa Rica': 0.13,
    'Croatia': 0.25,
    'Cyprus': 0.19,
    'Czechia': 0.21,
    'Denmark': 0.25,
    'Cuba': 0.20,
    'Guernsey': 0.00,
    'New Zealand': 0.15,
    'Guinea': 0.00,
    'Guinea-Bissau': 0.00,
    'Guyana': 0.14,
    'Honduras': 0.34,
    'Dominican Republic': 0.18,
    'Haiti':0.10,
    'Hong Kong':0.00,
    'Hungary': 0.27,
    'Ecuador':0.12,
    'Equatorial Guinea':0.15,
    'Estonia':0.2,
    'Ethiopia': 0.00,
    'Nicaragua': 0.271,
    'Iceland': 0.27,
    'Bharat': 0.28,
    'Indonesia': 0.11,  
    'Micronesia': 0.00,
    'Fiji': 0.09,
    'El Salvador': 0.13,
    'Italy': 0.22,
    'Ivory Coast': 0.00,
    'Lituania': 0.21,
    'Luxembourg': 0.17,
    'Madagascar': 0.00,
    'Madeira': 0.22,
    'Malaysia': 0.1,
    'Maldives':0.06,
    'Mali': 0.00,
    'Malta': 0.18,
    'Mauritania': 0.00,
    'Monaco': 0.195,
    'Mongolia': 0.1,
    'Montenegro': 0.21,
    'Montserrat': 0.00,
    'Morocco':0.2,
    'Chile': 0.19,
    'Liechtenstein': 0.077,
    'Switzerland': 0.081,
    'Jamaica': 0.2,
    'Serbia': 0.2,
    'Greece': 0.24,
    'Iran': 0.9,
    'Iraq': 3.0,
    'Saudi Arabia': 0.15,
    'Egypt': 0.14,
    'Senegal': 0.2,
    'Jordan': 0.16,
    'Kazakhstan': 0.13,
    'Uruguay': 0.22,
    'Latvia': 0.21,
    'Syria': 0.00,
    'Lebanon': 0.11,
    'Lesotho': 0.00,
    'Liberia': 0.00,
    'Paraguay': 0.1,
    'Singapore': 0.08,
    'Slovakia': 0.2,
    'Slovenia': 0.22,
    'Peru': 0.16,
    'Libya': 0.00,
    'Tajikistan': 0.18,
    'Uzbekistan': 0.15,
    'Trinidad and Tobago': 0.125,
    'Tanzania': 0.18,
    'Thailand': 0.07,
    'Ethiopia': 0.00,
    'Kenya': 0.16,
    'Kuwait': 0.00,
    'North Korea': 0.04,
    'Kyrgyzstan': 0.12,
    'Laos': 0.00,
    'South Africa': 0.15,
    'Vietnam': 0.1,
    'Venezuela': 0.16,
    'Zambia': 0.16,
    'Zimbabwe':0.15,
    'Myanmar': 0.00,
    'Namibia': 0.15,
    'Nauuru': 0.00,
    'Nepal':0.13,


};
export const countries = Object.keys(avalaibleCountryTaxOptions);

export const dynamic_apps=[
    {
        Name: 'Inventario',
        Src: 'https://firebasestorage.googleapis.com/v0/b/dynamic-resources.appspot.com/o/Logotypes%2FDYNAMIC%20INVENTORY.svg?alt=media&token=2af8f9ab-bb2a-4b54-a1e3-64373ef88214',
        Href: 'https://dynamic-inventory.app',
        Aria: 'Inventario Dinámico'

    },
    /*{
        Name: 'QuotePilot',
        Src: 'https://firebasestorage.googleapis.com/v0/b/dynamic-resources.appspot.com/o/Logotypes%2FQuotePilot.svg?alt=media&token=796a88f0-d788-422e-8192-6d59683000e4',
        Href: 'https://quote-pilot.com',
        Aria: 'Dynamic QuotePilot'
    }*/
]

export const metricSystemValues = [
    {
        'Code': '',
        'Name': 'Meters'
    },
];

export const regimenesFiscales = [
    {
        Code: 601,
        Name: "General de Ley Personas Morales"
    },
    {
        "Code": 603,
        "Name": "Personas Morales con Fines no Lucrativos"
    },
    {
        "Code": 605,
        "Name": "Sueldos y Salarios e Ingresos Asimilados a Salarios"
    },
    {
        "Code": 606,
        "Name": "Arrendamiento"
    },
    {
        "Code": 607,
        "Name": "Régimen de Enajenación o Adquisición de Bienes"            
    },
    {
        "Code": 608,
        "Name": "Demás ingresos"            
    },
    {
        "Code": 609,
        "Name": "Consolidación"            
    },
    {
        "Code": 610,
        "Name": "Residentes en el Extranjero sin Establecimiento Permanente en México"       
             
    },
    {
        "Code": 611,
        "Name": "Ingresos por Dividendos (socios y accionistas)"            
    },
    {
        "Code": 612,
        "Name": "Personas Físicas con Actividades Empresariales y Profesionales"            
    },
    {
        "Code": 614,
        "Name": "Ingresos por intereses"            
    },
    {
        "Code": 615,
        "Name": "Régimen de los ingresos por obtención de premios"            
    },
    {
        "Code": 616,
        "Name": "Sin obligaciones fiscales"            
    },
    {
        "Code": 620,
        "Name": "Sociedades Cooperativas de Producción que optan por diferir sus ingresos"            
    },
    {
        "Code": 621,
        "Name": "Incorporación Fiscal"            
    },
    {
        "Code": 622,
        "Name": "Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras"            
    },
    {
        "Code": 623,
        "Name": "Opcional para Grupos de Sociedades"            
    },
    {
        "Code": 624,
        "Name": "Coordinados"            
    },
    {
        "Code": 625,
        "Name": "Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas"            
    },
    {
        "Code": 626,
        "Name": "Régimen Simplificado de Confianza"            
    },
    {
        "Code": 628,
        "Name": "Hidrocarburos"            
    },
    {
        "Code": 629,
        "Name": "De los Regímenes Fiscales Preferentes y de las Empresas Multinacionales"            
    },
    {
        "Code": 630,
        "Name": "Enajenación de acciones en bolsa de valores"            
    }
];

export async function updateFirestoreDocumentAsync(ref, value, fieldName){

};

export function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function rgbToHex(rgb) {
    // Separa los valores RGB
    var rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    
    // Convierte los valores a hexadecimal
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
  
    var r = parseInt(rgbArray[1]);
    var g = parseInt(rgbArray[2]);
    var b = parseInt(rgbArray[3]);
  
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export function nextIndexIfUndefined(array, indexToStart = 0){
    if(indexToStart > array.length){
        console.error("Excede la longitud del arreglo.");
        return null;
    };
    const selection = array[indexToStart];
    if(!selection || selection === null || selection === undefined){
        const nextIndex = indexToStart + 1;
        indexToStart = nextIndexIfUndefined(array, nextIndex);
    }
    else{
        return selection;
    };
};

export async function getMachineName() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const machineName = data.ip;
      return machineName;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
};
  
export async function retrieveAndLogMachineName() {
    try {
      const machineName = await getMachineName();
      console.log(`User has an active subscription in Dynamic Inventory.`);
      console.log(`MACHINE: ${machineName}`);
    } catch (error) {
      console.error('Error:', error);
    }
};

export function esColorOscuro(color) {
    // Extrae la parte de luminosidad del color
    var rgb = color.substring(4, color.length-1).replace(/ /g, '').split(',');
    var r = parseInt(rgb[0]);
    var g = parseInt(rgb[1]);
    var b = parseInt(rgb[2]);
    
    // Convierte el color a luminosidad
    var luminosidad = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
    // Determina si el color es oscuro o claro
    return luminosidad < 128; // Se puede ajustar este valor según tus preferencias
};

export const wayBillValues = [
    {
        Code: 'G-675',
        Name: 'Nombre del Valor de la Carta Porte'
    },
    {
        Code: 'G-565',
        Name: 'HGERGrsd',
    }
];

export const metricSystemKey = [
    { Key: "P41", Name: "Década (logarítmica)", Type: "Acústica" },
    { Key: "A60", Name: "Densidad de energía sonora, Volumétrica, energía de sonido", Type: "Acústica" },
    { Key: "A50", Name: "Densidad superficial de la impedancia mecánica", Type: "Acústica" },
    { Key: "P42", Name: "Exposición al sonido", Type: "Acústica" },
    { Key: "A52", Name: "Impedancia acústica", Type: "Acústica" },
    { Key: "M32", Name: "Impedancia acústica", Type: "Acústica" },
    { Key: "C66", Name: "Impedancia acústica", Type: "Acústica" },
    { Key: "C67", Name: "Impedancia característica de un medio", Type: "Acústica" },
    { Key: "A51", Name: "Impedancia mecánica", Type: "Acústica" },
    { Key: "C58", Name: "Impedancia mecánica", Type: "Acústica" },
    { Key: "A64", Name: "Intensidad de sonido", Type: "Acústica" },
    { Key: "D85", Name: "Intensidad de sonido", Type: "Acústica" },
    { Key: "C32", Name: "Intensidad de sonido", Type: "Acústica" },
    { Key: "C76", Name: "Intensidad de sonido", Type: "Acústica" },
    { Key: "C59", Name: "Intervalo de frecuencia", Type: "Acústica" },
    { Key: "P43", Name: "Nivel de presión acústica, Nivel de potencia acústica", Type: "Acústica" },
    { Key: "H51", Name: "Nivel de presión acústica, Nivel de potencia acústica", Type: "Acústica" },
    { Key: "H52", Name: "Nivel de presión acústica, Nivel de potencia acústica", Type: "Acústica" },
    { Key: "C69", Name: "Nivel de volumen", Type: "Acústica" },
    { Key: "D9", Name: "Presión estática, Presión de sonido (instantánea)", Type: "Acústica" },
    { Key: "D15", Name: "Volumen (Audio)", Type: "Acústica" },
    { Key: "J83", Name: "Aislamiento térmico, Coeficiente de aislamiento térmico", Type: "Calor" },
  { Key: "J22", Name: "Grado fahrenheit hora pie cuadrado por unidad térmica británica (tabla internacional)", Type: "Calor" },
  { Key: "J19", Name: "Grado fahrenheit hora pie cuadrado por unidad térmica británica (termoquímico)", Type: "Calor" },
  { Key: "L14", Name: "Metro cuadrado hora grado celsius por kilocaloría (tabla internacional)", Type: "Calor" },
  { Key: "D19", Name: "Metro cuadrado kelvin por watt", Type: "Calor" },
  { Key: "A1", Name: "15 ° C calorías", Type: "Calor" },
  { Key: "J75", Name: "Caloría", Type: "Calor" },
  { Key: "N69", Name: "Caloría (20 °c)", Type: "Calor" },
  { Key: "D70", Name: "Calorías (tabla internacional)", Type: "Calor" },
  { Key: "K51", Name: "Kilocaloría (significado)", Type: "Calor" },
  { Key: "E14", Name: "Kilocaloría (tabla internacional)", Type: "Calor" },
  { Key: "K53", Name: "Kilocaloría (termoquímico)", Type: "Calor" },
  { Key: "N70", Name: "Quad", Type: "Calor" },
  { Key: "N71", Name: "Termia (energía comercial)", Type: "Calor" },
  { Key: "N72", Name: "Termia (UEA)", Type: "Calor" },
  { Key: "N66", Name: "Unidad térmica británica (39 °f)", Type: "Calor" },
  { Key: "N67", Name: "Unidad térmica británica (59 °f)", Type: "Calor" },
  { Key: "N68", Name: "Unidad térmica británica (60 °f)", Type: "Calor" },
  { Key: "J39", Name: "Unidad térmica británica (significado)", Type: "Calor" },
  { Key: "BTU", Name: "Unidad térmica británica (tabla internacional)", Type: "Calor" },
  { Key: "J55", Name: "Watt segundo", Type: "Calor" },
  { Key: "J76", Name: "Caloría (tabla internacional) por gramo gadro celsius", Type: "Calor" },
  { Key: "J79", Name: "Caloría (termoquímico) por gramo gadro celsius", Type: "Calor" },
  { Key: "JE", Name: "Joule por kelvin", Type: "Calor" },
  { Key: "N65", Name: "Kilocaloría (tabla internacional) por gramo kelvin", Type: "Calor" },
  { Key: "B41", Name: "Kilojoule por kelvin", Type: "Calor" },
  { Key: "N60", Name: "Unidad térmica británica (tabla internacional) por grado fahrenheit", Type: "Calor" },
  { Key: "N62", Name: "Unidad térmica británica (tabla internacional) por grado rankine", Type: "Calor" },
  { Key: "J43", Name: "Unidad térmica británica (tabla internacional) por libra grado fahrenheit", Type: "Calor" },
  { Key: "N61", Name: "Unidad térmica británica (termoquímico) por grado fahrenheit", Type: "Calor" },
  { Key: "N63", Name: "Unidad térmica británica (termoquímico) por grado rankine", Type: "Calor" },
  { Key: "J50", Name: "Unidad térmica británica (termoquímico) por libra grado fahrenheit", Type: "Calor" },
  { Key: "N64", Name: "Unidad térmica británica (termoquímico) por libra grado rankine", Type: "Calor" },
  { Key: "D76", Name: "Calorías (tabla internacional) por gramo de kelvin", Type: "Calor" },
  { Key: "D37", Name: "Calorías (termoquímicas) por gramo de kelvin", Type: "Calor" },
  { Key: "B11", Name: "Joule por kilogramo kelvin", Type: "Calor" },
  { Key: "B43", Name: "Kilojoule por kilogramo kelvin", Type: "Calor" },
  { Key: "A21", Name: "Unidad térmica británica (tabla internacional) por libra grado rankine", Type: "Calor" },
  { Key: "C91", Name: "Recíprocidad de kelvin ó kelvin a la potencia menos 1", Type: "Calor" },
  { Key: "M20", Name: "Recíproco de megakelvin ó megakelvin a la potencia menos 1", Type: "Calor" },
  { Key: "F81", Name: "Bar por kelvin", Type: "Calor" },
  { Key: "C64", Name: "Pascal por kelvin", Type: "Calor" },
  { Key: "D72", Name: "Calorías (tabla internacional) por segundo centímetro cuadrado kelvin", Type: "Calor" },
  { Key: "D39", Name: "Calorías (termoquímicas) por segundo centímetro cuadrado kelvin", Type: "Calor" },
  { Key: "N78", Name: "Kilowatt por metro cuadrado kelvin", Type: "Calor" },
  { Key: "N74", Name: "Unidad térmica británica (tabla internacional) por hora pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "A23", Name: "Unidad térmica británica (tabla internacional) por hora pie cuadrado grado rankine", Type: "Calor" },
  { Key: "N76", Name: "Unidad térmica británica (tabla internacional) por segundo pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "A20", Name: "Unidad térmica británica (tabla internacional) por segundo pie cuadrado grado rankine", Type: "Calor" },
  { Key: "N75", Name: "Unidad térmica británica (termoquímico) por hora pie cuadrado grado farenheit", Type: "Calor" },
  { Key: "N77", Name: "Unidad térmica británica (termoquímico) por segundo pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "D55", Name: "Watt por metro cuadrado kelvin", Type: "Calor" },
  { Key: "D52", Name: "Watt por kelvin", Type: "Calor" },
  { Key: "J78", Name: "Caloría (termoquímica) por centímetro segundo grado celsius", Type: "Calor" },
  { Key: "D71", Name: "Calorías (tabla internacional) por segundo centímetro kelvin", Type: "Calor" },
  { Key: "D38", Name: "Calorías (termoquímicas) por segundo centímetro kelvin", Type: "Calor" },
  { Key: "K52", Name: "Kilocaloría (tabla internacional) por hora metro grado celsius", Type: "Calor" },
  { Key: "N82", Name: "Kilowatt por metro grado celsius", Type: "Calor" },
  { Key: "N81", Name: "Kilowatt por metro kelvin", Type: "Calor" },
  { Key: "J40", Name: "Unidad térmica británica (tabla internacional) pie por hora pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "A22", Name: "Unidad térmica británica (tabla internacional) por segundo pie grado rankine", Type: "Calor" },
  { Key: "J41", Name: "Unidad térmica británica (tabla internacional) pulgada por hora pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "J42", Name: "Unidad térmica británica (tabla internacional) pulgada por segundo pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "J46", Name: "Unidad térmica británica (termoquímico) pie por hora pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "J48", Name: "Unidad térmica británica (termoquímico) pulgada por hora pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "J49", Name: "Unidad térmica británica (termoquímico) pulgada por segundo pie cuadrado grado fahrenheit", Type: "Calor" },
  { Key: "D53", Name: "Watt por metro kelvin", Type: "Calor" },
  { Key: "D54", Name: "Watt por centímetro kelvin", Type: "Calor" },
  { Key: "K54", Name: "Kilocaloría (termoquímico) por hora metro grado celsius", Type: "Calor" },
  { Key: "P83", Name: "Atmosfera estándar por metro", Type: "Diversos" },
  { Key: "P84", Name: "Atmosfera técnica por metro", Type: "Diversos" },
  { Key: "P82", Name: "Hectopascal por metro", Type: "Diversos" },
  { Key: "P81", Name: "Kilopascal por metro", Type: "Diversos" },
  { Key: "34", Name: "Kilopascal por milímetro", Type: "Diversos" },
  { Key: "P80", Name: "Milipascal por metro", Type: "Diversos" },
  { Key: "H42", Name: "Pascal por metro", Type: "Diversos" },
  { Key: "H69", Name: "Picopascal por kilómetro", Type: "Diversos" },
  { Key: "P86", Name: "Psi por pulgada", Type: "Diversos" },
  { Key: "P85", Name: "Torr por metro", Type: "Diversos" },
  { Key: "33", Name: "Kilopascal por grtr", Type: "Diversos" },
  { Key: "P79", Name: "Pascal metro cuadrado por kilogramo", Type: "Diversos" },
  { Key: "1I", Name: "Tipo de interés fijo", Type: "Diversos" },
  { Key: "DE", Name: "Acuerdo", Type: "Diversos" },
  { Key: "PD", Name: "Almohadilla", Type: "Diversos" },
  { Key: "73", Name: "Amperios por centímetro", Type: "Diversos" },
  { Key: "H77", Name: "Anchura del módulo", Type: "Diversos" },
  { Key: "Z5", Name: "Arrastre", Type: "Diversos" },
  { Key: "Jo", Name: "Articulación", Type: "Diversos" },
  { Key: "05", Name: "Ascensor", Type: "Diversos" },
  { Key: "AA", Name: "Balón", Type: "Diversos" },
  { Key: "D92", Name: "Banda", Type: "Diversos" },
  { Key: "5B", Name: "Batch", Type: "Diversos" },
  { Key: "B9", Name: "Batt", Type: "Diversos" },
  { Key: "M19", Name: "Beaufort", Type: "Diversos" },
  { Key: "D64", Name: "Bloquear", Type: "Diversos" },
  { Key: "B6", Name: "Bollo", Type: "Diversos" },
  { Key: "46", Name: "Bolsa a granel de cincuenta libras", Type: "Diversos" },
  { Key: "44", Name: "Bolsa a granel de quinientos kilos", Type: "Diversos" },
  { Key: "45", Name: "Bolsa a granel de trescientos kilos", Type: "Diversos" },
  { Key: "47", Name: "Bolso de cincuenta libras", Type: "Diversos" },
  { Key: "5G", Name: "Bomba", Type: "Diversos" },
  { Key: "B0", Name: "Btu por pie cúbico", Type: "Diversos" },
  { Key: "CE", Name: "Cada mes", Type: "Diversos" },
  { Key: "92", Name: "Calorías por centímetro cúbico", Type: "Diversos" },
  { Key: "93", Name: "Calorías por gramo", Type: "Diversos" },
  { Key: "19", Name: "Camión cisterna", Type: "Diversos" },
  { Key: "FB", Name: "Campo", Type: "Diversos" },
  { Key: "LR", Name: "Capa", Type: "Diversos" },
  { Key: "48", Name: "Carga masiva", Type: "Diversos" },
  { Key: "D66", Name: "Casete", Type: "Diversos" },
  { Key: "EB", Name: "Casilla de correo electrónico", Type: "Diversos" },
  { Key: "C6", Name: "Celda", Type: "Diversos" },
  { Key: "BH", Name: "Cepillo", Type: "Diversos" },
  { Key: "B7", Name: "Ciclo", Type: "Diversos" },
  { Key: "II", Name: "Columna pulgada", Type: "Diversos" },
  { Key: "CZ", Name: "Combo", Type: "Diversos" },
  { Key: "Q3", Name: "Comida", Type: "Diversos" },
  { Key: "CK", Name: "Conector", Type: "Diversos" },
  { Key: "5K", Name: "Contar por minuto", Type: "Diversos" },
  { Key: "IC", Name: "Contar por pulgada", Type: "Diversos" },
  { Key: "Z11", Name: "Contenedor colgante", Type: "Diversos" },
  { Key: "RU", Name: "Correr", Type: "Diversos" },
  { Key: "C5", Name: "Costo", Type: "Diversos" },
  { Key: "B17", Name: "Crédito", Type: "Diversos" },
  { Key: "SQ", Name: "Cuadrado", Type: "Diversos" },
  { Key: "TST", Name: "Decena de conjuntos", Type: "Diversos" },
  { Key: "TTS", Name: "Decenas de millar de pegatinas", Type: "Diversos" },
  { Key: "30", Name: "Día de potencia de caballos por tonelada métrica de aire seco", Type: "Diversos" },
  { Key: "96", Name: "Diez mil galones (US)", Type: "Diversos" },
  { Key: "DC", Name: "Disco", Type: "Diversos" },
  { Key: "D67", Name: "Dólar por hora", Type: "Diversos" },
  { Key: "E27", Name: "Dosis", Type: "Diversos" },
  { Key: "LK", Name: "Enlazar", Type: "Diversos" },
  { Key: "11", Name: "Equipos", Type: "Diversos" },
  { Key: "69", Name: "Escala específica de prueba", Type: "Diversos" },
  { Key: "5H", Name: "Escenario", Type: "Diversos" },
  { Key: "F9", Name: "Fibra por centímetro cúbico de aire", Type: "Diversos" },
  { Key: "5C", Name: "Galón (US) por mil", Type: "Diversos" },
  { Key: "76", Name: "Gauss", Type: "Diversos" },
  { Key: "4B", Name: "Gorra", Type: "Diversos" },
  { Key: "D23", Name: "Gramo pluma (proteína)", Type: "Diversos" },
  { Key: "C9", Name: "Grupo bobinas", Type: "Diversos" },
  { Key: "10", Name: "Grupos", Type: "Diversos" },
  { Key: "ROM", Name: "Habitación", Type: "Diversos" },
  { Key: "G7", Name: "Hoja de microficha", Type: "Diversos" },
  { Key: "IM", Name: "Impresión", Type: "Diversos" },
  { Key: "SYR", Name: "Jeringuilla", Type: "Diversos" },
  { Key: "KB", Name: "Kilocaracter", Type: "Diversos" },
  { Key: "78", Name: "Kilogauss", Type: "Diversos" },
  { Key: "KD", Name: "Kilogram decimal", Type: "Diversos" },
  { Key: "3H", Name: "Kilogramo por kilogramo de producto", Type: "Diversos" },
  { Key: "3I", Name: "Kilogramo por pedazo de producto", Type: "Diversos" },
  { Key: "32", Name: "Kilogramo por tonelada métrica seca del aire", Type: "Diversos" },
  { Key: "53", Name: "Kilogramo teórico", Type: "Diversos" },
  { Key: "KF", Name: "Kilopacket", Type: "Diversos" },
  { Key: "84", Name: "Kilopound-force por pulgada cuadrada", Type: "Diversos" },
  { Key: "A59", Name: "La cobertura de nubes 8-parte", Type: "Diversos" },
  { Key: "E94", Name: "Línea de color alternativo par", Type: "Diversos" },
  { Key: "CS", Name: "Libra neta", Type: "Diversos" },
  { Key: "21", Name: "Libra por mil pie", Type: "Diversos" },
  { Key: "5F", Name: "Libra por pulgada de ancho", Type: "Diversos" },
  { Key: "B8", Name: "Línea", Type: "Diversos" },
  { Key: "4C", Name: "Litro por minuto", Type: "Diversos" },
  { Key: "E25", Name: "Lote", Type: "Diversos" },
  { Key: "C2", Name: "Lúmenes por vatio", Type: "Diversos" },
  { Key: "GQ", Name: "Megagramo por hora", Type: "Diversos" },
  { Key: "2K", Name: "Mega-gramos", Type: "Diversos" },
  { Key: "KT", Name: "Mil páginas", Type: "Diversos" },
  { Key: "GV", Name: "Mil galones (US) por minuto", Type: "Diversos" },
  { Key: "F8", Name: "Miligramo por metro cúbico de aire", Type: "Diversos" },
  { Key: "MG", Name: "Millares de galón (US)", Type: "Diversos" },
  { Key: "13", Name: "Millicurie", Type: "Diversos" },
  { Key: "G6", Name: "Millón de unidades internacionales", Type: "Diversos" },
  { Key: "MV", Name: "Millones de metros cúbicos", Type: "Diversos" },
  { Key: "A40", Name: "Mil pies tablero", Type: "Diversos" },
  { Key: "P77", Name: "Miliohm por metro", Type: "Diversos" },
  { Key: "G4", Name: "Nanogramo por metro cúbico de aire", Type: "Diversos" },
  { Key: "F10", Name: "Neumático", Type: "Diversos" },
  { Key: "JNT", Name: "Paquete", Type: "Diversos" },
  { Key: "J5", Name: "Paso", Type: "Diversos" },
  { Key: "D8", Name: "Perchas", Type: "Diversos" },
  { Key: "A68", Name: "Pinta imperial por hora", Type: "Diversos" },
  { Key: "A58", Name: "Pinta por minuto", Type: "Diversos" },
  { Key: "41", Name: "Porcentaje de peso por peso", Type: "Diversos" },
  { Key: "CSY", Name: "Quinto del alcohol", Type: "Diversos" },
  { Key: "CCT", Name: "Radián metro cuadrado por mol", Type: "Diversos" },
  { Key: "95", Name: "Segundo", Type: "Diversos" },
  { Key: "B10", Name: "Semáforo", Type: "Diversos" },
  { Key: "B3", Name: "Servicio", Type: "Diversos" },
  { Key: "E10", Name: "Sobre", Type: "Diversos" },
  { Key: "5D", Name: "Tonelada corta por hora", Type: "Diversos" },
  { Key: "P79", Name: "Pascal metro cuadrado por kilogramo", Type: "Diversos" },

// Auto inductancia, Inductancia mutua, Permeabilidad
  { Key: "H81", Name: "Henry", Description: "Un henry es la unidad para la inductancia eléctrica en el Sistema Internacional de Unidades. Es la inductancia eléctrica de un circuito cerrado en el que se produce una fuerza electromotriz de 1 voltio, cuando la corriente eléctrica que recorre el circuito varía uniformemente a razón de un amperio por segundo.", Type: "Electricidad y magnetismo" },
  { Key: "H03", Name: "Henry por kiloOhm", Type: "Electricidad y magnetismo" },
  { Key: "H04", Name: "Henry por Ohm", Type: "Electricidad y magnetismo" },
    { Key: "P24", Name: "Kilohenry", Description: "1000 veces la unidad derivada, henry del sistema internacional.", Type: "Electricidad y magnetismo" },
    { Key: "G98", Name: "Micro henry por kiloOhm", Type: "Electricidad y magnetismo" },
    { Key: "G99", Name: "Micro henry por Ohm", Type: "Electricidad y magnetismo" },
    { Key: "B90", Name: "Microhenry", Type: "Electricidad y magnetismo" },
    { Key: "C14", Name: "Milihenry", Type: "Electricidad y magnetismo" },
    { Key: "H05", Name: "Milihenry por kiloOhm", Type: "Electricidad y magnetismo" },
    { Key: "H06", Name: "Milihenry por Ohm", Type: "Electricidad y magnetismo" },
    { Key: "C43", Name: "Nanohenry", Type: "Electricidad y magnetismo" },
    { Key: "C73", Name: "Picohenry", Type: "Electricidad y magnetismo" },

    // Capacitad
    { Key: "H48", Name: "Attofarad", Type: "Electricidad y magnetismo" },
    { Key: "FAR", Name: "Farad", Description: "Es la capacidad de un condensador eléctrico que entre sus armaduras aparece una diferencia de potencial eléctrico de 1 voltio, cuando está cargado con una cantidad de electricidad igual a 1 coulomb.", Type: "Electricidad y magnetismo" },
    { Key: "N90", Name: "Kilofaradio", Description: "1000 veces del faradio, unidad derivada del sistema internacional", Type: "Electricidad y magnetismo" },
    { Key: "4O", Name: "Microfaradio", Type: "Electricidad y magnetismo" },
    { Key: "C10", Name: "Milifaradio", Type: "Electricidad y magnetismo" },
    { Key: "C41", Name: "Nanofaradio", Type: "Electricidad y magnetismo" },
    { Key: "4T", Name: "Picofaradio", Type: "Electricidad y magnetismo" },

    // Carga de resistencia por unidad de longitud
    { Key: "M26", Name: "GigaOhm por metro", Type: "Electricidad y magnetismo" },

    // Carga eléctrica, Cantidad de electricidad, Flujo eléctrico (flujo de desplazamiento)
    { Key: "H32", Name: "Amperio cuadrado segundo", Description: "Es una unidad de medida basada en la energía o el calor que se permite pasar a través del fusible o interruptor durante una condición de cortocircuito.", Type: "Electricidad y magnetismo" },
    { Key: "AMH", Name: "Amperio hora", Description: "Unidad de carga eléctrica definida por la cantidad de carga acumulada por un flujo constante de un amperio por 1 hora.", Type: "Electricidad y magnetismo" },
    { Key: "N95", Name: "Amperio minuto", Description: "Unidad de carga eléctrica que define la cantidad de carga acumulada por un flujo constante de un amperio por un minuto.", Type: "Electricidad y magnetismo" },
    { Key: "A8", Name: "Amperio segundo", Type: "Electricidad y magnetismo" },
    { Key: "COU", Name: "Culombio", Description: "Es la cantidad de electricidad transportada en 1 segundo por una corriente de intensidad 1 amperio.", Type: "Electricidad y magnetismo" },
    { Key: "N94", Name: "Franklin", Description: "CGS (Centímetro-Gram-Segundo sistema) unidad de la carga eléctrica, donde la carga asciende exactamente a 1 franklin donde la fuerza de 1 dina sobre una carga igual se realiza a una distancia de 1 cm.", Type: "Electricidad y magnetismo" },
    { Key: "TAH", Name: "Kiloamperio-hora", Description: "milamperio-hora", Type: "Electricidad y magnetismo" },
    { Key: "B26", Name: "KiloCulombio", Type: "Electricidad y magnetismo" },
    { Key: "D77", Name: "MegaCulombio", Type: "Electricidad y magnetismo" },
    { Key: "B86", Name: "MicroCulombio", Type: "Electricidad y magnetismo" },
    { Key: "E09", Name: "Miliamperio hora", Description: "Unidad de carga de potencia entregada a razón de una milésima parte de un amperio durante un período de una hora.", Type: "Electricidad y magnetismo" },
    { Key: "D86", Name: "MiliCulombio", Type: "Electricidad y magnetismo" },
    { Key: "C40", Name: "NanoCulombio", Type: "Electricidad y magnetismo" },
    { Key: "C71", Name: "PicoCulombio", Type: "Electricidad y magnetismo" },

    // Carga lineal
    { Key: "P10", Name: "Culombio por metro", Description: "Unidad derivada, coulomb dividido por la unidad base, metro.", Type: "Electricidad y magnetismo" },

    // Coeficiente, Característica de rendimiento
    { Key: "M18", Name: "Gigahertz metro", Type: "Electricidad y magnetismo" },
    { Key: "H34", Name: "Hertz metro", Type: "Electricidad y magnetismo"},
    { Key: "N91", Name: "Joule recíproco", Type: "Electricidad y magnetismo" },
    { Key: "M17", Name: "Kilohertz metro", Type: "Electricidad y magnetismo" },
    { Key: "M21", Name: "Kilovoltio-amperio hora recíprocidad", Type: "Electricidad y magnetismo" },
    { Key: "H39", Name: "Megahertz kilómetro", Type: "Electricidad y magnetismo" },
    { Key: "M27", Name: "Megahertz metro", Type: "Electricidad y magnetismo" },
  { Key: "M30", Name: "voltio-amperio segundo recíprocidad", Type: "Electricidad y magnetismo" },
  // Conductancia (para corriente continua), Admitancia, (admitancia compleja), Módulo de admitancia, (admitancia), Conductancia (para corriente alterna)
{ Key: "B53", Name: "Kilosiemens", Type: "Electricidad y magnetismo" },
{ Key: "B99", Name: "Microsiemens", Type: "Electricidad y magnetismo" },
{ Key: "G42", Name: "Microsiemens por centímetro", Type: "Electricidad y magnetismo" },
{ Key: "G43", Name: "Microsiemens por metro", Type: "Electricidad y magnetismo" },
{ Key: "C27", Name: "Milisiemens", Type: "Electricidad y magnetismo" },
{ Key: "N92", Name: "Picosiemens", Description: "0.000 000 000 001 veces de la unidad derivada siemens del sistema internacional de unidades.", Type: "Electricidad y magnetismo" },
{ Key: "SIE", Name: "Siemens", Description: "Se denomina siemens a la unidad derivada del SI para la medida de la conductancia eléctrica.", Type: "Electricidad y magnetismo" },

// Conductividad
{ Key: "B54", Name: "Kilosiemens por metro", Type: "Electricidad y magnetismo" },
{ Key: "B77", Name: "Megasiemens por metro", Type: "Electricidad y magnetismo" },
{ Key: "H61", Name: "Milisiemens por centímetro", Type: "Electricidad y magnetismo" },
{ Key: "G44", Name: "Nanosiemens por centímetro", Type: "Electricidad y magnetismo" },
{ Key: "G45", Name: "Nanosiemens por metro", Type: "Electricidad y magnetismo" },
{ Key: "L42", Name: "Picosiemens por metro", Type: "Electricidad y magnetismo" },
{ Key: "H43", Name: "Siemens por centímetro", Type: "Electricidad y magnetismo" },
{ Key: "D10", Name: "Siemens por metro", Type: "Electricidad y magnetismo" },

// Corriente eléctrica, Diferencia de potencial magnético, Fuerza magnetomotriz, Conexión actual
{ Key: "AMP", Name: "Amperio", Description: "Es la intensidad de una corriente constante que manteniéndose en dos conductores paralelos, rectilíneos, de longitud infinita, de sección circular despreciable y situados a una distancia de un metro uno de otro en el vacío, produciría una fuerza igual a 2·10-7 newton por metro de longitud.", Type: "Electricidad y magnetismo" },
{ Key: "N96", Name: "Biot", Description: "El número de Biot (Bi) es un número adimensional utilizado en cálculos de transmisión de calor. Su nombre hace honor al físico francés Jean Baptiste Biot (1774-1862) y relaciona la transferencia de calor por conducción dentro de un cuerpo y la transferencia de calor por convección en la superficie de dicho cuerpo. Biot en 1804, analizó la interacción entre la conducción en un sólido y la convección en sus superficies.", Type: "Electricidad y magnetismo" },
{ Key: "N97", Name: "Gilbert", Description: "CGS (Centímetro-Gram-Segundo sistema) unidad de la fuerza magnetomotriz, que se define por el trabajo para aumentar el potencial magnético de un polo común positivo con 1 erg.", Type: "Electricidad y magnetismo" },
{ Key: "B22", Name: "Kiloamperio", Type: "Electricidad y magnetismo" },
{ Key: "H38", Name: "Megaamperio", Type: "Electricidad y magnetismo" },
{ Key: "B84", Name: "Microamperio", Type: "Electricidad y magnetismo" },
{ Key: "4K", Name: "Miliamperio", Type: "Electricidad y magnetismo" },
{ Key: "C39", Name: "Nanoamperio", Type: "Electricidad y magnetismo" },
{ Key: "C70", Name: "Picoamperio", Type: "Electricidad y magnetismo" },

// Densidad actual
{ Key: "A4", Name: "Amperio por centímetro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "H31", Name: "Amperio por kilogramo", Type: "Electricidad y magnetismo" },
{ Key: "A41", Name: "Amperio por metro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "A7", Name: "Amperio por milímetro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "N93", Name: "Amperio por pascal", Description: "Unidad base amperio dividido por la unidad derivada pascal.", Type: "Electricidad y magnetismo" },
{ Key: "B23", Name: "Kiloamperio por metro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "B66", Name: "Megaamperio por metro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "F57", Name: "Miliamperio por libra-fuerza por pulgada cuadrada", Type: "Electricidad y magnetismo" },
{ Key: "G59", Name: "Miliamperio por litro minuto", Type: "Electricidad y magnetismo" },

// Densidad de corriente eléctrica lineal, Corriente eléctrica lineal, Intensidad de campo magnético
{ Key: "A2", Name: "Amperio por centímetro", Type: "Electricidad y magnetismo" },
{ Key: "AE", Name: "Amperio por metro", Description: "(a veces llamado amperio vuelta por metro) es la unidad SI de la corriente de campo magnético.", Type: "Electricidad y magnetismo" },
{ Key: "A3", Name: "Amperio por milímetro", Type: "Electricidad y magnetismo" },
{ Key: "B24", Name: "Kiloamperio por metro", Type: "Electricidad y magnetismo" },
{ Key: "F59", Name: "Miliamperio por bar", Type: "Electricidad y magnetismo" },
{ Key: "F76", Name: "Miliamperio por milímetro", Type: "Electricidad y magnetismo" },
{ Key: "F08", Name: "Miliamperio por pulgada", Type: "Electricidad y magnetismo" },

// Densidad de energía electromagnética, Energía electromagnética volumétrica
{ Key: "B8", Name: "Joule por metro cúbico", Type: "Electricidad y magnetismo" },

// Densidad de flujo magnético, Inducción magnética, Polarización magnética
{ Key: "P12", Name: "Gamma", Description: "Unidad de densidad de flujo magnético.", Type: "Electricidad y magnetismo" },
{ Key: "P13", Name: "Kilotesla", Description: "1000 veces la unidad derivada tesla.", Type: "Electricidad y magnetismo" },
{ Key: "D81", Name: "Microtesla", Type: "Electricidad y magnetismo" },
{ Key: "C29", Name: "Militesla", Type: "Electricidad y magnetismo" },
{ Key: "C48", Name: "Nanotesla", Type: "Electricidad y magnetismo" },
{ Key: "D33", Name: "Tesla", Description: "Es la inducción magnética uniforme que, repartida normalmente sobre una superficie de 1 metro cuadrado, produce a través de esta superficie un flujo magnético total de 1 weber.", Type: "Electricidad y magnetismo" },

// Densidad superficial de carga, Densidad de flujo eléctrico, Polarización eléctrica de desplazamiento
{ Key: "A33", Name: "Culombio por centímetro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "A34", Name: "Culombio por metro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "A35", Name: "Culombio por milímetro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "B28", Name: "KiloCulombio por metro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "B70", Name: "MegaCulombio por metro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "B88", Name: "MicroCulombio por metro cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "D89", Name: "MiliCulombio por metro cuadrado", Type: "Electricidad y magnetismo" },

// Densidad volumétrica de carga, Densidad de carga, Carga volumétrica
{ Key: "A28", Name: "Culombio por centímetro cúbico", Type: "Electricidad y magnetismo" },
{ Key: "A29", Name: "Culombio por metro cúbico", Type: "Electricidad y magnetismo" },
{ Key: "A30", Name: "Culombio por milimetro cúbico", Type: "Electricidad y magnetismo" },
{ Key: "A84", Name: "GigaCulombio por metro cúbico", Type: "Electricidad y magnetismo" },
{ Key: "B27", Name: "KiloCulombio por metro cúbico", Type: "Electricidad y magnetismo" },
{ Key: "B69", Name: "MegaCulombio por metro cúbico", Type: "Electricidad y magnetismo" },
{ Key: "B87", Name: "MicroCulombio por metro cúbico", Type: "Electricidad y magnetismo" },
{ Key: "D88", Name: "MiliCulombio por metro cúbico", Type: "Electricidad y magnetismo" },

// Flujo magnético
{ Key: "P11", Name: "Kiloweber", Description: "1000 veces la unidad derivada weber.", Type: "Electricidad y magnetismo" },
{ Key: "C33", Name: "Miliweber", Type: "Electricidad y magnetismo" },
{ Key: "WEB", Name: "Weber", Description: "Es el flujo magnético que, al atravesar un circuito de una sola espira produce en la misma una fuerza electromotriz de 1 volt si se anula dicho flujo en un segundo por decaimiento uniforme.", Type: "Electricidad y magnetismo" },

// Fuerza de campo eléctrico
{ Key: "B55", Name: "Kilovoltio por metro", Type: "Electricidad y magnetismo" },
{ Key: "B79", Name: "Megavoltio por metro", Type: "Electricidad y magnetismo" },
{ Key: "C3", Name: "Microvoltios por metro", Type: "Electricidad y magnetismo" },
{ Key: "C30", Name: "Milivoltio por metro", Type: "Electricidad y magnetismo" },
{ Key: "H62", Name: "Milivoltio por minuto", Type: "Electricidad y magnetismo" },
{ Key: "D45", Name: "Voltio cuadrado por kelvin cuadrado", Type: "Electricidad y magnetismo" },
{ Key: "G60", Name: "Voltio por bar", Type: "Electricidad y magnetismo" },
{ Key: "D47", Name: "Voltio por centímetro", Type: "Electricidad y magnetismo" },
{ Key: "F87", Name: "Voltio por litro minuto", Type: "Electricidad y magnetismo" },
{ Key: "D50", Name: "Voltio por metro", Description: "Es la intensidad de un campo eléctrico, que ejerce una fuerza de 1 newton sobre un cuerpo cargado con una cantidad de electricidad de 1 coulomb.", Type: "Electricidad y magnetismo" },
{ Key: "H24", Name: "Voltio por microsegundo", Type: "Electricidad y magnetismo" },
{ Key: "D51", Name: "Voltio por milímetro", Type: "Electricidad y magnetismo" },
{ Key: "N98", Name: "Voltio por pascal", Description: "Unidad derivada del sistema internacional, voltio, dividido entre la unidad derivada del sistema internacional, pascal.", Type: "Electricidad y magnetismo" },
{ Key: "H23", Name: "Voltio por pulgada", Type: "Electricidad y magnetismo" },
{ Key: "H46", Name: "Voltio por segundo", Type: "Electricidad y magnetismo" },
{ Key: "H22", Name: "Voltio pulgada cuadrada por libra fuerza", Type: "Electricidad y magnetismo" },
{ Key: "H45", Name: "Voltio segundo por metro", Type: "Electricidad y magnetismo" },
// Momento dipolar eléctrico
{ Key: "A26", Name: "Culombio metro", Type: "Electricidad y magnetismo" },

// Momento electromagnético, Momento magnético, (momento de área magnética)
{ Key: "A5", Name: "Amperio metro cuadrado", Type: "Electricidad y magnetismo" },

// Permeabilidad, Permeabilidad del vacío, Constante magnética
{ Key: "A98", Name: "Henry por metro", Type: "Electricidad y magnetismo" },
{ Key: "B91", Name: "Microhenry por metro", Type: "Electricidad y magnetismo" },
{ Key: "C44", Name: "Nanohenry por metro", Type: "Electricidad y magnetismo" },

// Permitividad, Permitividad del vacío, (constante eléctrica)
{ Key: "H33", Name: "Faradio por kilómetro", Type: "Electricidad y magnetismo" },
{ Key: "A69", Name: "Faradio por metro", Type: "Electricidad y magnetismo" },
{ Key: "H28", Name: "Microfaradio por kilómetro", Type: "Electricidad y magnetismo" },
{ Key: "B89", Name: "Microfaradio por metro", Type: "Electricidad y magnetismo" },
{ Key: "C42", Name: "Nanofaradio por metro", Type: "Electricidad y magnetismo" },
{ Key: "C72", Name: "Picofaradio por metro", Type: "Electricidad y magnetismo" },

// Poder aparente
{ Key: "KVA", Name: "Kilovoltio - amperio", Type: "Electricidad y magnetismo" },
{ Key: "MVA", Name: "Megavoltio - amperio", Type: "Electricidad y magnetismo" },
{ Key: "M35", Name: "Milivoltio - amperio", Type: "Electricidad y magnetismo" },
{ Key: "D46", Name: "Voltioio-amperio", Type: "Electricidad y magnetismo" },

// Poder reactivo
{ Key: "KVR", Name: "Kilovar", Type: "Electricidad y magnetismo" },
{ Key: "MAR", Name: "Megavar", Description: "Una unidad de potencia reactiva eléctrica representada por una corriente de mil amperios que fluye debido a una diferencia de potencial de mil voltios donde el seno del ángulo de fase entre ellos es 1.", Type: "Electricidad y magnetismo" },
{ Key: "D44", Name: "Var", Description: "El nombre de la unidad es un acrónimo de volt-amperio-reactive.", Type: "Electricidad y magnetismo" },

// Potencia (para corriente continua), Potencia activa
{ Key: "K43", Name: "Caballo de fuerza (eléctrico)", Description: "Es una unidad de medida de potencia (la velocidad a la que el trabajo se realiza).", Type: "Electricidad y magnetismo" },
{ Key: "P17", Name: "Joule por día", Description: "Cociente de la unidad derivada, joule, dividido entre la unidad día.", Type: "Electricidad y magnetismo" },
{ Key: "P16", Name: "Joule por hora", Description: "Cociente de la unidad derivada, joule, dividido entre la unidad hora.", Type: "Electricidad y magnetismo" },
{ Key: "P15", Name: "Joule por minuto", Description: "Cociente de la unidad derivada, joule, dividido entre la unidad minuto.", Type: "Electricidad y magnetismo" },
{ Key: "P14", Name: "Joule por segundo", Description: "Cociente de la unidad derivada joule dividido entre la unidad base, segundo, ambas del sistema internacional.", Type: "Electricidad y magnetismo" },
{ Key: "P21", Name: "Kilojoule por dia", Description: "Cociente entre 1000 veces de la unida derivada, joule, dividido por la unidad día", Type: "Electricidad y magnetismo" },
{ Key: "P20", Name: "Kilojoule por hora", Description: "Cociente entre 1000 veces de la unida derivada, joule, dividido por la unidad hora.", Type: "Electricidad y magnetismo" },
{ Key: "P19", Name: "Kilojoule por minuto", Description: "Cociente entre 1000 veces de la unida derivada, joule, dividido por la unidad minuto.", Type: "Electricidad y magnetismo" },
{ Key: "P18", Name: "Kilojoule por segundo", Description: "Cociente entre 1000 veces de la unida derivada, joule, dividido por la unidad base segundo.", Type: "Electricidad y magnetismo" },
{ Key: "C49", Name: "Nanowatt", Type: "Electricidad y magnetismo" },
{ Key: "C75", Name: "Picowatt", Type: "Electricidad y magnetismo" },
{ Key: "D31", Name: "Terawatt", Type: "Electricidad y magnetismo" },

// Potencial del vector magnético
{ Key: "B56", Name: "Kiloweber por metro", Type: "Electricidad y magnetismo" },
{ Key: "D59", Name: "Weber por metro", Type: "Electricidad y magnetico" },
{ Key: "D60", Name: "Weber por milímetro", Type: "Electricidad y magnetismo" },
// Potencial eléctrico, Diferencia de potencial, Tensión, Voltaje, Fuerza electromotriz
{ Key: "KVT", Name: "Kilovoltio", Type: "Electricidad y magnetismo" },
{ Key: "B78", Name: "Megavoltio", Type: "Electricidad y magnetismo" },
{ Key: "D82", Name: "Microvoltio", Type: "Electricidad y magnetismo" },
{ Key: "2Z", Name: "Milivoltio", Type: "Electricidad y magnetismo" },
{ Key: "N99", Name: "Picovoltio", Description: "0.000 000 000 001 veces de la unidad derivada del sistema internacional, voltio.", Type: "Electricidad y magnetismo" },
{ Key: "VLT", Name: "Voltio", Description: "Es la unidad derivada del Sistema Internacional para el potencial eléctrico, la fuerza electromotriz y la tensión eléctrica.", Type: "Electricidad y magnetismo" },

// Reluctancia
{ Key: "C89", Name: "Henry recíproco", Type: "Electricidad y magnetismo" },

// Resistencia (a la corriente continua), Impedancia, (impedancias complejas), Módulo de impedancia, Resistencia (a la corriente alterna), Reactancia
{ Key: "A87", Name: "GigaOhm", Type: "Electricidad y magnetismo" },
{ Key: "B49", Name: "KiloOhm", Type: "Electricidad y magnetismo" },
{ Key: "B75", Name: "MegaOhm", Type: "Electricidad y magnetismo" },
{ Key: "B94", Name: "Micro Ohm", Type: "Electricidad y magnetismo" },
{ Key: "E45", Name: "MiliOhm", Type: "Electricidad y magnetismo" },
{ Key: "P22", Name: "NanoOhm", Description: "0.000 000 001 veces de la unidad derivada Ohm.", Type: "Electricidad y magnetismo" },
{ Key: "Ohm", Name: "Ohm", Description: "Es la resistencia eléctrica que existe entre dos puntos de un conductor cuando una diferencia de potencial constante de 1 volt aplicada entre estos dos puntos produce, en dicho conductor, una corriente de intensidad 1 amperio, cuando no haya fuerza electromotriz en el conductor.", Type: "Electricidad y magnetismo" },
{ Key: "H44", Name: "TeraOhm", Type: "Electricidad y magnetismo" },

// Resistencia lineal
{ Key: "H36", Name: "MegaOhm por kilómetro", Type: "Electricidad y magnetismo" },
{ Key: "H37", Name: "MegaOhm por metro", Type: "Electricidad y magnetismo" },
{ Key: "F54", Name: "MiliOhm por metro", Type: "Electricidad y magnetismo" },
{ Key: "F56", Name: "Ohm por kilómetro", Type: "Electricidad y magnetismo" },
{ Key: "H26", Name: "Ohm por metro", Type: "Electricidad y magnetismo" },
{ Key: "F55", Name: "Ohm por milla (milla estatal)", Type: "Electricidad y magnetismo" },

// Resistividad
{ Key: "A88", Name: "GigaOhm metro", Type: "Electricidad y magnetismo" },
{ Key: "B50", Name: "KiloOhm metro", Type: "Electricidad y magnetismo" },
{ Key: "H88", Name: "MegaOhm kilómetro", Type: "Electricidad y magnetismo" },
{ Key: "B76", Name: "MegaOhm metro", Type: "Electricidad y magnetismo" },
{ Key: "B95", Name: "MicroOhm metro", Type: "Electricidad y magnetismo" },
{ Key: "C23", Name: "MiliOhm metro", Type: "Electricidad y magnetismo" },
{ Key: "C46", Name: "NanoOhm metro", Type: "Electricidad y magnetismo" },
{ Key: "C60", Name: "Ohm centímetro", Type: "Electricidad y magnetismo" },
{ Key: "P23", Name: "Ohm circular-mil por pie", Description: "Unidad de resistividad.", Type: "Electricidad y magnetismo" },
{ Key: "M24", Name: "Ohm kilómetro", Type: "Electricidad y magnetismo" },
{ Key: "C61", Name: "Ohm metro", Type: "Electricidad y magnetismo" },

// Susceptancia
{ Key: "NQ", Name: "Mho", Type: "Electricidad y magnetismo" },
{ Key: "NR", Name: "Micromho", Type: "Electricidad y magnetismo" }

];

export function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

export const bannedWords = [
    "Nigger",
    "Nigga",
    "Gay",
    "Sex",
    "gay",
    "sex",
    "cracker",
    "cis",
    "Cis",
    "_C1z",
    "c1s",
    "lesbian",
    "Lesbian",
    "n1gg4",
    "N1gg4",
    "Negroe",
    "Marx",
    "m4rX",
    "MarX",
    "Karl Marx",
    "Slave",
    "Jew",
    "J3w",
    "jew",
    'j3w', "Nigg", "N1gg", "Nig", "nigg", "n1gg", "n1g", "l3sb14n", "sLaVe", "Sl4v3"
];

export function getFileSizeInMB(file){
    const fileSizeInBytes = file.size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
    return fileSizeInMB;
  
};

export function isValidText(text) {
    // Expresión regular que permite solo letras, números y guiones bajos
    var regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(text);
};

export function addProperty(chain,object, value){
    const parts = chain.split(".");

    let tempObjeto = object;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        tempObjeto[part] = value; // Establece el valor inicial como quieras
      } else {
        if (!tempObjeto[part]) {
          tempObjeto[part] = {}; // Crea un objeto vacío si no existe
        }
        tempObjeto = tempObjeto[part];
      }
    });
}; 

export const cfdiUses = [
    {
        "Code": "G01",
        "Name": "Adquisición de mercancías"
    },
    {   
        "Code": "G02",
        "Name": "Devoluciones, descuentos o bonificaciones"
    },
    {   
        "Code": "G03",
        "Name": "Gastos Generales"

    },
    {   
        "Code": "I01",
        "Name": "Construcciones"
    },
    {   
        "Code": "I02",
        "Name": "Mobiliario y equipo de oficina por inversiones"
    },
    {   
        "Code": "I03",
        "Name": "Equipo de transporte"
    },
    {   
        "Code": "I04",
        "Name": "Equipo de computo y accesorios"
    },
    {   
        "Code": "I05",
        "Name": "Dados, troqueles, moldes, matrices y herramental"
    },
    {   
        "Code": "I06",
        "Name": "Comunicaciones telefónicas"
    },
    {   
        "Code": "I07",
        "Name": "Comunicaciones satelitales"
    },
    {   
        "Code": "I08",
        "Name": "Otra maquinaria y equipo"
    },
    {   
        "Code": "D01",
        "Name": "Honorarios médicos, dentales y gastos hospitalarios"
    },
    {   
        "Code": "D02",
        "Name": "Gastos médicos por incapacidad o discapacidad"
    },
    {   
        "Code": "D03",
        "Name": "Gastos funerales"
    },
    {   
        "Code": "D04",
        "Name": "Donativos"
    },
    {   
        "Code": "D05",
        "Name": "Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)"
    },
    {   
        "Code": "D06",
        "Name": "Aportaciones voluntarias al SAR"
    },
    {   
        "Code": "D07",
        "Name": "Primas por seguros de gastos médicos"
    },
    {   
        "Code": "D08",
        "Name": "Gastos de transportación escolar obligatoria"
    },
    {   
        "Code": "D09",
        "Name": "Gastos de transportación escolar obligatoria"
    },
    {   
        "Code": "D10",
        "Name": "Pagos por servicios educativos (colegiaturas)"
    },
    {   
        "Code": "S01",
        "Name": "Sin efectos fiscales"
    },
    {   
        "Code": "CP01",
        "Name": "Pagos"
    },
    {   
        "Code": "CN01",
        "Name": "Nómina"
    }
];

export async function fetchImageData(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return new Uint8Array(arrayBuffer);
}


export function getValueFromPath(obj, path) {
    const keys = path.split('.');
    let value = obj;
  
    for (const key of keys) {
      value = value[key];
      if (value === undefined) {
        return undefined; // Si una de las claves no existe en el objeto, devuelve undefined
      };
    };
  
    return value;
};

export function getDateAndTime() {
    // Obtenemos la fecha y hora actual
    const currentDateTime = new Date();

    // Obtenemos los componentes de la fecha (día, mes y año)
    const day = currentDateTime.getDate();
    const month = currentDateTime.getMonth() + 1; // Sumamos 1 porque los meses van de 0 a 11
    const year = currentDateTime.getFullYear();

    // Obtenemos los componentes de la hora (hora, minutos y segundos)
    const hour = currentDateTime.getHours();
    const minute = currentDateTime.getMinutes();
    const second = currentDateTime.getSeconds();

    // Formateamos la fecha en el formato DD/MM/YYYY
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;

    // Formateamos la hora en el formato HH:MM:SS
    const formattedTime = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;

    // Devolvemos un objeto con la fecha y la hora
    return { Fecha: formattedDate, Hora: formattedTime };
};

export class Dynamic_Date {
    constructor() {
        // Obtenemos la fecha y hora actual
        this.currentDateTime = new Date();
    }
  
    // Método para obtener la fecha y hora formateadas
    getDateAndTimeSync(date_data) {
        const day = date_data.getDate();
        const month = date_data.getMonth() + 1; // Sumamos 1 porque los meses van de 0 a 11
        const year = date_data.getFullYear();
        const hour = date_data.getHours();
        const minute = date_data.getMinutes();
        const second = date_data.getSeconds();

        const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
        const formattedTime = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;

        return { Fecha: formattedDate, Hora: formattedTime };
    }

    // Método para agregar años
    addYears(anios) {
        this.currentDateTime.setFullYear(this.currentDateTime.getFullYear() + anios);
    }

    // Método para agregar meses
    addMonths(meses) {
        this.currentDateTime.setMonth(this.currentDateTime.getMonth() + meses);
    }

    // Método para agregar días
    addDays(dias) {
        this.currentDateTime.setDate(this.currentDateTime.getDate() + dias);
    }

    // Método para agregar horas
    aaddHours(horas) {
        this.currentDateTime.setHours(this.currentDateTime.getHours() + horas);
    }

    // Método para agregar minutos
    addMinutes(minutos) {
        this.currentDateTime.setMinutes(this.currentDateTime.getMinutes() + minutos);
    }

    // Método para agregar segundos
    addSeconds(segundos) {
        this.currentDateTime.setSeconds(this.currentDateTime.getSeconds() + segundos);
    }

    getDateForInput(date_data) {
        const day = date_data.getDate();
        const month = date_data.getMonth() + 1; // Sumamos 1 porque los meses van de 0 a 11
        const year = date_data.getFullYear();

        // Formateamos la fecha en el formato YYYY-MM-DD
        const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

        return formattedDate;
    };

    setDateFromInputValue(fechaInput) {
        const [year, month, day] = fechaInput.split('-').map(Number);
        this.currentDateTime.setFullYear(year);
        this.currentDateTime.setMonth(month - 1); // Restamos 1 porque los meses van de 0 a 11
        this.currentDateTime.setDate(day);
    }
};

export function removeTaxes(originalPrice, Taxes = 0.16, IEPS = 0.10){
    const ivaValue = (Number(originalPrice) - (originalPrice * Taxes));
    const iepsValue = (Number(originalPrice) * IEPS);
    console.log(`${ivaValue} -  ${iepsValue}`);

    return Number(ivaValue - iepsValue);
};


export function addTaxes(originalPrice, Taxes = 0.16, IEPS = 0.10){
    const step1 = (Number(originalPrice) + (Number(originalPrice) * Taxes));
    const step2 = (Number(originalPrice) * IEPS);

    console.log(`${step1} +  ${step2}`);

    return step1+step2;
};


export const productKeysSat = [
    { Key: "01010101", Name: "No existe en el catálogo" },
    { Key: "70151503", Name: "Organizaciones, asociaciones o cooperativas forestales" },
    { Key: "94101500", Name: "Asociaciones de negocios" },
    { Key: "94101501", Name: "Asociaciones de la industria agrícola" },
    { Key: "94101502", Name: "Asociaciones reguladoras" },
    { Key: "94101503", Name: "Asociaciones empresariales sectoriales" },
    { Key: "94101504", Name: "Asociaciones empresariales internacionales" },
    { Key: "94101505", Name: "Asociaciones de empleadores" },
    { Key: "94101600", Name: "Asociaciones profesionales" },
    { Key: "94101601", Name: "Asociaciones de odontólogos" },
    { Key: "94101602", Name: "Asociaciones de médicos" },
    { Key: "94101603", Name: "Asociaciones de enfermeras" },
    { Key: "94101604", Name: "Asociaciones de contadores" },
    { Key: "94101605", Name: "Asociaciones de arquitectos" },
    { Key: "94101606", Name: "Colegios de abogados" },
    { Key: "94101607", Name: "Asociaciones educativas o de profesores" },
    { Key: "94101608", Name: "Asociaciones de ingenieros" },
    { Key: "94101609", Name: "Asociaciones científicas" },
    { Key: "94101503", Name: "Asociaciones de negocios" },
    { Key: "94101501", Name: "Asociaciones de la industria agrícola" },
    { Key: "94131503", Name: "Servicios no gubernamentales de asistencia técnica" },
    { Key: "94131603", Name: "Servicios de asistencia legal" },
    { Key: "80131500", Name: "Alquiler y arrendamiento de propiedades o edificaciones" },
    { Key: "80131501", Name: "Arrendamiento de residencias" },
    { Key: "80131502", Name: "Arrendamiento de instalaciones comerciales o industriales" },
    { Key: "80131503", Name: "Arrendamientos de tierras" },
    { Key: "50201712", Name: "Bebidas de té" },
    { Key: "50202301", Name: "Agua" },
    { Key: "50202305", Name: "Jugo fresco" },
    { Key: "50202306", Name: "Refrescos" },
    { Key: "50202307", Name: "Bebida de chocolate o malta u otros" },
    { Key: "50202400", Name: "Jugos o concentrados de cítricos frescos" },
    { Key: "50201708", Name: "Bebida de café" },
    { Key: "50201715", Name: "Té de frutas" },
    { Key: "50181900", Name: "Pan, galletas y pastelitos dulces" },
    { Key: "50181901", Name: "Pan fresco" },
    { Key: "50182000", Name: "Tartas y empanadas y pastas" },
    { Key: "50182001", Name: "Panqués pasteles o biscochos frescos" },
    { Key: "50192500", Name: "Sándwiches y panecillos con relleno" },
    { Key: "50192501", Name: "Emparedados frescos" },
    { Key: "50192700", Name: "Platos combinados empaquetados" },
    { Key: "50131700", Name: "Productos de leche y mantequilla" },
    { Key: "50192303", Name: "Helado de sabor o helado o postre de helado o yogurt congelado" },
    { Key: "72152303", Name: "Servicio de construcción e instalación de gabinetes" },
    { Key: "72152400", Name: "Servicios de montaje e instalación de ventanas y puertas" },
    { Key: "72152401", Name: "Servicio de instalación o colocación de puertas de garaje" },
    { Key: "72152402", Name: "Servicio de instalación de ventanas y puertas prefabricadas" },
    { Key: "72153000", Name: "Servicios de vidrios y ventanería" },
    { Key: "72153001", Name: "Servicio de instalación de vidriado a prueba de balas" },
    { Key: "72153002", Name: "Servicio de instalación y reparación de vidrios en ventanas" },
    { Key: "31201610", Name: "Pegamentos" },
    { Key: "31201500", Name: "Cinta adhesiva" },
    { Key: "50111513", Name: "Carne, mínimamente procesada sin aditivos" },
    { Key: "50111514", Name: "Cerdo, mínimamente procesado sin aditivos" },
    { Key: "50111521", Name: "Pavo, mínimamente procesado sin aditivos" },
    { Key: "50111515", Name: "Pollo, mínimamente procesado sin aditivos" },
    { Key: "50111523", Name: "Cordero, mínimamente procesado sin aditivos" },
    { Key: "50111517", Name: "Ternera, mínimamente procesada sin aditivos" },
    { Key: "50121500", Name: "Pescado" },
    { Key: "30161903", Name: "Paneles de madera" },
    { Key: "30162102", Name: "Escaleras de madera" },
    { Key: "30171504", Name: "Puertas de madera" },
    { Key: "30172103", Name: "Puerta de garaje de madera" },
    { Key: "56101500", Name: "Muebles" },
    { Key: "50202301", Name: "Agua" },
    { Key: "50202302", Name: "Hielo" },
    { Key: "84101600", Name: "Financiación de ayudas" },
    { Key: "80121600", Name: "Servicios de derecho comercial" },
    { Key: "83121700", Name: "Servicios de comunicación masiva" },
    { Key: "83121703", Name: "Servicios relacionados con el internet" },
    { Key: "82111503", Name: "Redacción de artículos académicos o científicos" },
    { Key: "82111700", Name: "Escritura creativa" },
    { Key: "82111701", Name: "Servicios de escritores de artículos" },
    { Key: "82111901", Name: "Servicios de comunicados de prensa" },
    { Key: "90131602", Name: "Entretenimiento grabado en video" },
    { Key: "82111800", Name: "Servicios editoriales y de soporte" },
    { Key: "82111802", Name: "Servicios de comprobación de hechos" },
    { Key: "82111804", Name: "Servicios de traducción escrita" },
    { Key: "82111900", Name: "Servicios de noticias y publicidad" },
    { Key: "82111902", Name: "Servicios de boletines informativos de interés especial" },
    { Key: "82111903", Name: "Servicios telegráficos de agencias de noticias" },
    { Key: "82111904", Name: "Servicios de entrega de periódicos o material publicitario" },
    { Key: "53131608", Name: "Jabones" },
    { Key: "12161902", Name: "Surfactantes detergentes" },
    { Key: "50151513", Name: "Aceites vegetales o de planta comestibles" },
    { Key: "41104211", Name: "Suavizantes" },
    { Key: "47131801", Name: "Limpiadores de pisos" },
    { Key: "47131807", Name: "Blanqueadores" },
    { Key: "42151909", Name: "Pastas o kits de prevención dental" },
    { Key: "51171608", Name: "Glicerina" },
    { Key: "11131600", Name: "Otros productos de animales" },
    { Key: "50221301", Name: "Harina vegetal" },
    { Key: "51101500", Name: "Productos de panadería y repostería" },
    { Key: "51101700", Name: "Productos de panadería" },
    { Key: "51101701", Name: "Pan" },
    { Key: "51101702", Name: "Productos de panadería salados" },
    { Key: "51101800", Name: "Productos de repostería" },
    { Key: "51101801", Name: "Tartas" },
    { Key: "51101802", Name: "Galletas y pasteles y postres y productos de repostería" },
    { Key: "51101803", Name: "Productos de repostería dulces" },
    { Key: "51101804", Name: "Pasteles y tarta de queso" },
    { Key: "51101805", Name: "Bollitos o panecillos dulces o pasteles o pan de jengibre o hojaldres de pastelería" },
    { Key: "51101806", Name: "Productos de pastelería rellenos o glaseados o decorados" },
    { Key: "51101807", Name: "Panes y panecillos o bollos" },
    { Key: "51101808", Name: "Productos de pastelería sin azúcar añadido" },
    { Key: "51101809", Name: "Productos de pastelería congelados" },
    { Key: "51101810", Name: "Productos de pastelería frescos" },
    { Key: "51101811", Name: "Productos de pastelería en polvo o granulados o líquidos o mixtos" },
    { Key: "51101812", Name: "Bollería y pastelería" },
    { Key: "51101813", Name: "Productos de pastelería cocidos" },
    { Key: "51101814", Name: "Pastel de carne" },
    { Key: "51101815", Name: "Pan rallado o productos de pan rallado" },
    { Key: "51101816", Name: "Productos de pastelería marinados o macerados" },
    { Key: "51251000", Name: "Comida para animales" },
    { Key: "51251001", Name: "Alimento para perros" },
    { Key: "51251002", Name: "Alimento para gatos" },
    { Key: "85121502", Name: "Servicios de consulta de médicos de atención primaria" },
    { Key: "41121800", Name: "Material de limpieza" },
    { Key: "41121801", Name: "Materiales de limpieza para uso doméstico" },
    { Key: "41121802", Name: "Desinfectantes" },
    { Key: "41121803", Name: "Limpiadores de superficies" },
    { Key: "41121804", Name: "Desengrasantes" },
    { Key: "41121805", Name: "Desodorantes ambientales" },
    { Key: "41121806", Name: "Limpiadores de vidrios" },
    { Key: "41121807", Name: "Productos para limpiar baños" },
    { Key: "41121808", Name: "Productos para limpiar cocinas" },
    { Key: "41121809", Name: "Quitamanchas" },
    { Key: "41121810", Name: "Productos de limpieza para automóviles" },
    { Key: "41121811", Name: "Detergentes" },
    { Key: "41121812", Name: "Productos de limpieza para suelos" },
    { Key: "41121813", Name: "Productos de limpieza para alfombras" },
    { Key: "41121814", Name: "Blanqueadores de ropa" },
    { Key: "41121815", Name: "Desinfectantes para manos" },
    { Key: "41121816", Name: "Limpieza de alfombras o productos de cuidado" },
    { Key: "41121817", Name: "Productos de limpieza para muebles" },
    { Key: "41121818", Name: "Productos de limpieza para cristales" },
    { Key: "41121819", Name: "Productos de limpieza para inodoros" },
    { Key: "41121820", Name: "Productos de limpieza para lavabos" },
    { Key: "41121821", Name: "Detergentes para lavavajillas" },
    { Key: "41121822", Name: "Productos de limpieza para cocinas" },
    { Key: "41121823", Name: "Productos de limpieza para baños" },
    { Key: "41121824", Name: "Productos de limpieza para superficies" },
    { Key: "41121825", Name: "Productos de limpieza multiuso" },
    { Key: "41121826", Name: "Lavavajillas" },
    { Key: "41121827", Name: "Limpiadores de platos" },
    { Key: "41121827", Name: "Limpiadores de platos" },
    { Key: "41121828", Name: "Productos de limpieza para ropa" },
    { Key: "41121829", Name: "Detergentes líquidos para ropa" },
    { Key: "41121830", Name: "Detergentes en polvo para ropa" },
    { Key: "41121831", Name: "Quitamanchas para ropa" },
    { Key: "41121832", Name: "Suavizantes de telas" },
    { Key: "41121833", Name: "Blanqueadores de ropa" },
    { Key: "41121834", Name: "Aditivos para lavado de ropa" },
    { Key: "41121835", Name: "Acondicionadores de tela" },
    { Key: "42182200", Name: "Termómetros médicos y accesorios" },
    { Key: "42311500", Name: "Vendas y vendajes y productos relacionados" },
    { Key: "42312005", Name: "Adhesivos o pegamentos de cierre de piel para uso médico" },
    { Key: "53131620", Name: "Perfumes o colonias o fragancias" },
    { Key: "53131621", Name: "Corta uñas" },
    { Key: "53131622", Name: "Condones" },
    { Key: "53131623", Name: "Productos depilatorios o para remover vello" },
    { Key: "53131624", Name: "Paños limpiadores desechables" },
    { Key: "53131625", Name: "Redecillas para el cabello o la barba" },
    { Key: "53131626", Name: "Desinfectante de manos" },
    { Key: "53131627", Name: "Limpiador de manos" },
    { Key: "53131628", Name: "Champús" },
    { Key: "91101501", Name: "Gimnasios o centros de salud" },
    { Key: "91101504 B", Name: "Clases de aerobicos o ejercicios" },
    { Key: "47131600", Name: "Escobas, traperos, cepillos y accesorios" },
    { Key: "47131603", Name: "Esponjas" },
    { Key: "47131700", Name: "Suministros para aseos" },
    { Key: "47131801", Name: "Limpiadores de pisos" },
    { Key: "47131807", Name: "Blanqueadores" },
    { Key: "47121701", Name: "Bolsas de basura" },
    { Key: "47131601", Name: "Cepillos o recogedores para polvo" },
    { Key: "47131810", Name: "Productos para el lavaplatos" },
    { Key: "47131500", Name: "Trapos y paños de limpieza" },
    { Key: "91111502", Name: "Servicios de lavandería" },
    { Key: "91111503", Name: "Lavado en seco" },
    { Key: "91111504", Name: "Lavandería de autoservicio operadas con monedas" },
    { Key: "73161600", Name: "Manufactura de equipo de transporte" },
    { Key: "73171500", Name: "Manufactura de bienes eléctricos" },
    { Key: "73141700", Name: "Producción de telas y cuero" },
    { Key: "50181900", Name: "Pan, galletas y pastelitos dulces" },
    { Key: "50181901", Name: "Pan fresco" },
    { Key: "50181902", Name: "Pan congelado" },
    { Key: "50181903", Name: "Galletas sencillas de sal" },
    { Key: "50181904", Name: "Pan seco o cascaras de pan o pan tostado (crotones)" },
    { Key: "50181905", Name: "Galletas de dulce" },
    { Key: "50181906", Name: "Pan de repisa" },
    { Key: "50181907", Name: "Maza congelada para galletas" },
    { Key: "50181908", Name: "Maza congelada para pan" },
    { Key: "50181909", Name: "Galletas de soda" },
    { Key: "50182000", Name: "Tartas y empanadas y pastas" },
    { Key: "50182001", Name: "Ponqués pasteles o biscochos frescos" },
    { Key: "50182002", Name: "Ponqués pasteles o biscochos congelados" },
    { Key: "50182003", Name: "Maza para pastelería congelada" },
    { Key: "50182004", Name: "Maza para galletas de soda congelada" },
    { Key: "50221002", Name: "Harina" },
    { Key: "50192300", Name: "Postres y decoraciones de postres" },
    { Key: "50192301", Name: "Postres preparados" },
    { Key: "50192302", Name: "Complementos de postres" },
    { Key: "50192303", Name: "Helado de sabor o helado o postre de helado o yogurt congelado" },
    { Key: "50192304", Name: "Conos o copas de helado comestibles" },
    { Key: "50192400", Name: "Mermeladas y gelatinas y pastas de untar de nuez y dulce y conservas de fruta" },
    { Key: "50192401", Name: "Mermeladas o preservativos de fruta" },
    { Key: "39112604", Name: "Velas de cera" },
    { Key: "50192402", Name: "Mantequilla de nueces o mixto" },
    { Key: "50192403", Name: "Miel" },
    { Key: "50202307", Name: "Bebida de chocolate o malta u otros" },
    { Key: "50131700", Name: "Productos de leche y mantequilla" },
    { Key: "50192404", Name: "Cristales de gelatina o mermelada" },
    { Key: "50192405", Name: "Gelatina real procesada" },
    { Key: "50192406", Name: "Gelatina de almidón de nuez" },
    { Key: "50192500", Name: "Sándwiches y panecillos con relleno" },
    { Key: "50192501", Name: "Emparedados frescos" },
    { Key: "50192502", Name: "Emparedados congelados" },
    { Key: "44121618", Name: "Tijeras" },
    { Key: "14111514", Name: "Blocs o cuadernos de papel" },
    { Key: "44121707", Name: "Lápices de colores" },
    { Key: "44121706", Name: "Lápices de madera" },
    { Key: "44121701", Name: "Bolígrafos" },
    { Key: "60121535", Name: "Borradores de goma" },
    { Key: "14111506", Name: "Papel para impresión de computadores" },
    { Key: "60103110", Name: "Guías de referencia de geometría" },
    { Key: "31201610", Name: "Pegamentos" },
    { Key: "31201500", Name: "Cinta adhesiva" },
    { Key: "91101700", Name: "Cuidado de pelo" },
    { Key: "91101701", Name: "Servicios de corte y tinte de pelo" },
    { Key: "91101702", Name: "Servicios de extensiones o reemplazo de cabello" },
    { Key: "91101602", Name: "Consulta de maquillaje" },
    { Key: "91101600", Name: "Cuidado facial y corporal" },
    { Key: "53131623", Name: "Productos depilatorios o para remover vello" },
    { Key: "53131628", Name: "Champús" },
    { Key: "53131602", Name: "Artículos para el cuidado del cabello" },
    { Key: "50401800", Name: "Frijol" },
    { Key: "10121602", Name: "Alpiste" },
    { Key: "10151601", Name: "Semillas de trigo" },
    { Key: "10151607", Name: "Semillas de linaza" },
    { Key: "10151609", Name: "Semillas de maíz" },
    { Key: "10151539", Name: "Semillas o plántulas de haba" },
    { Key: "10151527", Name: "Semillas o plántulas de papa" },
    { Key: "10151529", Name: "Semillas o plántulas de calabaza" },
    { Key: "10151531", Name: "Semillas o plántulas de repollitos de bruselas" },
    { Key: "10161508", Name: "Plantas de té" },
    { Key: "50201706", Name: "Café" },
    { Key: "50403800", Name: "Ajo" },
    { Key: "50304400", Name: "Mandarina" },
    { Key: "50305000", Name: "Naranjas" },
    { Key: "50417017", Name: "Chayote o guatila orgánico" },
    { Key: "50401700", Name: "Aguacates" },
    { Key: "50401600", Name: "Espárragos" },
    { Key: "50401500", Name: "Alcachofas" },
    { Key: "50304100", Name: "Limones" },
    { Key: "50304500", Name: "Mangos" },
    { Key: "50304600", Name: "Melones" },
    { Key: "50304610", Name: "Sandia charlestón gray" },
    { Key: "50307024", Name: "Pepinos" },
    { Key: "50307025", Name: "Plátano" },
    { Key: "50307035", Name: "Guanábana" },
    { Key: "50307045", Name: "Guayaba" },
    { Key: "50404127", Name: "Verdolaga" },
    { Key: "50404200", Name: "Coles" },
    { Key: "50404100", Name: "Hierbas" },
    { Key: "50404101", Name: "Albahaca" },
    { Key: "50404110", Name: "Epazote" },
    { Key: "50404102", Name: "Laurel" },
    { Key: "50404106", Name: "Cilantro" },
    { Key: "50404109", Name: "Eneldo" },
    { Key: "50404114", Name: "Menta" },
    { Key: "50404115", Name: "Orégano" },
    { Key: "50404116", Name: "Pápalo" },
    { Key: "50404120", Name: "Romero" },
    { Key: "10101500", Name: "Animales vivos de granja" },
    { Key: "10101506", Name: "Caballos" },
    { Key: "10101507", Name: "Ovejas" },
    { Key: "10101508", Name: "Cabras" },
    { Key: "10101511", Name: "Cerdos" },
    { Key: "10101512", Name: "Conejos" },
    { Key: "10101516", Name: "Ganado vacuno" },
    { Key: "10101600", Name: "Pájaros y aves de corral vivos" },
    { Key: "10101601", Name: "Pollos vivos" },
    { Key: "10101602", Name: "Patos vivos" },
    { Key: "10101700", Name: "Peces vivos" },
    { Key: "10101701", Name: "Salmones vivos" },
    { Key: "10101702", Name: "Trucha viva" },
    { Key: "10101704", Name: "Carpa viva" },
    { Key: "10101703", Name: "Tilapia viva" },
    { Key: "10101800", Name: "Mariscos e invertebrados acuáticos vivos" },
    { Key: "10101801", Name: "Camarón vivo" },
    { Key: "10101807", Name: "Pulpo vivo" },
    { Key: "10101808", Name: "Calamar vivo" },
    { Key: "10101802", Name: "Almejas vivas" },
    { Key: "10101805", Name: "Cangrejos vivos" },
    { Key: "84131601", Name: "Seguros de vida" },
    { Key: "84131603", Name: "Seguros de daños personales por accidente" },
    { Key: "84131602", Name: "Seguros de asistencia médica y hospitalización" },
    { Key: "84131602", Name: "Seguros de asistencia médica y hospitalización" },
    { Key: "84131607", Name: "Seguro de responsabilidad civil" },
    { Key: "84131504", Name: "Seguros de carga" },
    { Key: "84131505", Name: "Seguros marítimos" },
    { Key: "84131500", Name: "Servicios de seguros para estructuras y propiedades y posesiones" },
    { Key: "84131500-1", Name: "Servicios de seguros para estructuras y propiedades y posesiones hidrometeorológicos" },
    { Key: "84131500-2", Name: "Servicios de seguros para estructuras y propiedades y posesiones" },
    { Key: "80111601", Name: "Asistencia de oficina o administrativa temporal" },
    { Key: "80111706", Name: "Asistencia administrativa o de oficina permanente" },
    { Key: "93151507", Name: "Procedimientos o servicios administrativos" },
    { Key: "80101500", Name: "Servicios de consultoría de negocios y administración corporativa" },
    { Key: "80101501", Name: "Servicios de asesoramiento sobre la puesta en marcha de empresas nuevas" },
    { Key: "80101502", Name: "Servicios de asesoramiento sobre fusiones de empresas" },
    { Key: "80101503", Name: "Servicios de asesoramiento sobre liquidaciones o ventas de empresas" },
    { Key: "80101504", Name: "Servicios de asesoramiento sobre planificación estratégica" },
    { Key: "80101505", Name: "Desarrollo de políticas u objetivos empresariales" },
    { Key: "80101506", Name: "Asesoramiento en estructuras organizacionales" },
    { Key: "72151900", Name: "Servicios de albañilería y mampostería" },
    { Key: "72151901", Name: "Servicio de cimentación de construcciones" },
    { Key: "72151903", Name: "Servicio de colocación de ladrillos" },
    { Key: "72151904", Name: "Servicio de construcción y mantenimiento de chimeneas" },
    { Key: "72151905", Name: "Servicio de mampostería en bloques de concreto" },
    { Key: "72151906", Name: "Servicio de instalación de tubería de drenaje" },
    { Key: "72151907", Name: "Servicio de mampostería en mármol en exteriores" },
    { Key: "72151908", Name: "Servicios de mampostería en ladrillos a prueba de ácido o refractarios" },
    { Key: "72151909", Name: "Servicio de mampostería en piedra" },
    { Key: "72151910", Name: "Servicio de restauración o renovación de juntas con mortero" },
    { Key: "72151911", Name: "Servicio de instalación de adoquines unitarios" },
    { Key: "72152102", Name: "Servicio de aislamiento y acabado de exteriores" },
    { Key: "72152200", Name: "Servicios de baldosas, terrazo y mármol y mosaicos" },
    { Key: "72152201", Name: "Servicio de instalación de mármol en interiores" },
    { Key: "72152202", Name: "Servicio creación y reparación de mosaicos" },
    { Key: "72152203", Name: "Servicio de instalación y reparación de terrazos" },
    { Key: "72152204", Name: "Servicio de instalación de baldosas de cerámica" },
    { Key: "72151603", Name: "Servicio de instalación de equipos de sonido especializados" },
    { Key: "80141607", Name: "Gestión de eventos" },
    { Key: "72154064", Name: "Servicio de alquiler de equipos portátiles para iluminación" },
    { Key: "81161800", Name: "Servicios de alquiler o arrendamiento de equipos o plataformas de voz y datos o multimedia" },
    { Key: "72101505", Name: "Servicios de cerrajería" },
    { Key: "80151600", Name: "Servicios de comercio internacional" },
    { Key: "80151601", Name: "Desarrollo de las exportaciones" },
    { Key: "80151602", Name: "Planificación de las importaciones" },
    { Key: "80151603", Name: "Proyecciones de las exportaciones" },
    { Key: "80151604", Name: "Servicios de adquisición de importaciones" },
    { Key: "80151605", Name: "Servicios de consultoría aduanera" },
    { Key: "80141600", Name: "Actividades de ventas y promoción de negocios" },
    { Key: "80141601", Name: "Servicios de promoción de ventas" },
    { Key: "80141602", Name: "Servicios de relaciones públicas" },
    { Key: "80141607", Name: "Gestión de eventos" },
    { Key: "80151504", Name: "Servicios de promoción comercial" },
    { Key: "80141612", Name: "Programas de venta o de mercadeo" },
    { Key: "80141613", Name: "Programas posventas" },
    { Key: "80141614", Name: "Servicios o programas de relaciones públicas" },
    { Key: "80141628", Name: "Servicio de distribuidores por comisión" },
    { Key: "80111617", Name: "Servicios temporales de arquitectura" },
    { Key: "80111618", Name: "Servicios temporales de construcción" },
    { Key: "81101513", Name: "Gestión de construcción de edificios" },
    { Key: "72111000", Name: "Servicios de construcción de unidades unifamiliares" },
    { Key: "72111001", Name: "Servicios de reparación o ampliación por remodelación de viviendas unifamiliares" },
    { Key: "72111100", Name: "Servicios de construcción de unidades multifamiliares" },
    { Key: "72111101", Name: "Servicio de construcción de apartamentos nuevos" },
    { Key: "72121000", Name: "Servicios de construcción de edificios industriales y bodegas nuevas" },
    { Key: "72121100", Name: "Servicios de construcción de edificios comerciales y de oficina" },
    { Key: "72121101", Name: "Servicio de construcción de edificios comerciales y de oficinas nuevos" },
    { Key: "72121300", Name: "Servicios de construcción de talleres automotrices y estaciones de servicio" },
    { Key: "72121401", Name: "Servicio de construcción de edificios de bancos" },
    { Key: "85121502", Name: "Servicios de consulta de médicos de atención primaria" },
    { Key: "85121600", Name: "Servicios médicos de doctores especialistas" },
    { Key: "85121608", Name: "Servicios de psicología" },
    { Key: "85122102", Name: "Servicios de terapia ocupacional" },
    { Key: "85122108", Name: "Terapia del habla o del lenguaje" },
    { Key: "85121701", Name: "Servicios de psicoterapeutas" },
    { Key: "51212000", Name: "Fármacos herbales" },
    { Key: "85121901", Name: "Servicios de preparación farmacéutica" },
    { Key: "73101703", Name: "Servicios de producción de productos farmacéuticos" },
    { Key: "85141700", Name: "Práctica homeopática" },
    { Key: "86121500", Name: "Escuelas preescolares, primarias y secundarias" },
    { Key: "86121600", Name: "Bachillerato o profesional técnico" },
    { Key: "86121601", Name: "Bachillerato o equivalente" },
    { Key: "86121602", Name: "Profesional técnico" },
    { Key: "86121700", Name: "Universidades y politécnicos" },
    { Key: "86121701", Name: "Programas de pregrado" },
    { Key: "86121702", Name: "Programas de posgrado" },
    { Key: "86121800", Name: "Escuelas profesionales" },
    { Key: "86121802", Name: "Seminarios teológicos" },
    { Key: "86121803", Name: "Escuelas profesionales técnicas" },
    { Key: "86121804", Name: "Escuelas profesionales no técnicas" },
    { Key: "86121501", Name: "Servicios educativos preescolares" },
    { Key: "86111502", Name: "Servicios de enseñanza a distancia" },
    { Key: "86111700", Name: "Educación de idiomas" },
    { Key: "86131500", Name: "Bellas Artes" },
    { Key: "86131501", Name: "Estudios de teatro" },
    { Key: "86131502", Name: "Pintura" },
    { Key: "86131503", Name: "Esculturas" },
    { Key: "86131504", Name: "Estudios de medios de comunicación" },
    { Key: "86131600", Name: "Música y drama" },
    { Key: "86131601", Name: "Escuelas de música" },
    { Key: "86131602", Name: "Educación en baile" },
    { Key: "86131603", Name: "Estudios de arte dramático" },
    { Key: "82121900", Name: "Empaste de libros" },
    { Key: "82121901", Name: "Encuadernación en rústica" },
    { Key: "82121902", Name: "Encuadernación espiral" },
    { Key: "82121903", Name: "Encuadernación con pegante" },
    { Key: "82121904", Name: "Encuadernación por carda o grapa" },
    { Key: "82121905", Name: "Restauración o reparación de encuadernaciones" },
    { Key: "90141503", Name: "Exposiciones" },
    { Key: "90151603", Name: "Exposiciones de arte" },
    { Key: "80141900", Name: "Exhibiciones y ferias comerciales" },
    { Key: "80141901", Name: "Ferias de automóviles u otras exposiciones" },
    { Key: "80141902", Name: "Reuniones y eventos" },
    { Key: "80141607", Name: "Gestión de eventos" },
    { Key: "80141903", Name: "Talento o entretenimiento" },
    { Key: "90141500", Name: "Eventos profesionales deportivos" },
    { Key: "93141708", Name: "Servicios de museos" },
    { Key: "90131500", Name: "Actuaciones en vivo" },
    { Key: "90131501", Name: "Actuaciones u obras teatrales" },
    { Key: "90131502", Name: "Actuaciones de danza" },
    { Key: "90131503", Name: "Ópera" },
    { Key: "90131504", Name: "Conciertos" },
    { Key: "90131600", Name: "Actuaciones grabadas o películas" },
    { Key: "90131601", Name: "Películas cinematográficas" },
    { Key: "90131602", Name: "Entretenimiento grabado en video" },
    { Key: "93141700", Name: "Cultura" },
    { Key: "93141701", Name: "Organizaciones de eventos culturales" },
    { Key: "78111807", Name: "Tarifas del parqueadero" },
    { Key: "85121800", Name: "Laboratorios médicos" },
    { Key: "85121801", Name: "Servicios de laboratorios de análisis de sangre" },
    { Key: "85121802", Name: "Servicios de laboratorios bacteriológicos" },
    { Key: "85121803", Name: "Servicios de laboratorios biológicos" },
    { Key: "85121804", Name: "Servicios de laboratorios patológicos" },
    { Key: "85121805", Name: "Servicios de laboratorios de análisis de orina" },
    { Key: "85121806", Name: "Servicios de laboratorios neurológicos" },
    { Key: "85121807", Name: "Servicios de laboratorios de ultrasonido" },
    { Key: "85121808", Name: "Servicios de laboratorios de rayos x" },
    { Key: "85121809", Name: "Servicios de bancos de sangre, esperma u órganos de trasplante" },
    { Key: "85121810", Name: "Detección de drogas o alcohol" },
    { Key: "95111602", Name: "Carretera o autopista o autopista de peaje interestatal" },
    { Key: "72151301", Name: "Servicio de pintura residencial" },
    { Key: "72151302", Name: "Servicio de pintura comercial" },
    { Key: "72151303", Name: "Servicio de pintura industrial" },
    { Key: "82101500", Name: "Publicidad impresa" },
    { Key: "82101501", Name: "Publicidad en vallas" },
    { Key: "82101502", Name: "Publicidad en afiches" },
    { Key: "82101503", Name: "Publicidad en revistas" },
    { Key: "82101504", Name: "Publicidad en periódicos" },
    { Key: "82101505", Name: "Publicidad en volantes o cupones" },
    { Key: "82101506", Name: "Servicios de publicidad en transporte público" },
    { Key: "82101507", Name: "Servicios de distribución o de publicidad o de boletines de sobre compras" },
    { Key: "82101508", Name: "Publicidad en páginas amarillas o en directorios comerciales o de servicios" },
    { Key: "82101600", Name: "Publicidad difundida" },
    { Key: "82101601", Name: "Publicidad en radio" },
    { Key: "82101602", Name: "Publicidad en televisión" },
    { Key: "82101603", Name: "Publicidad en internet" },
    { Key: "82101604", Name: "Publicidad en los cines" },
    { Key: "82101700", Name: "Publicidad aérea" },
    { Key: "82101701", Name: "Servicios de publicidad en pancartas" },
    { Key: "82101702", Name: "Servicios de publicidad aérea" },
    { Key: "82101800", Name: "Servicios de agencia de publicidad" },
    { Key: "82101801", Name: "Servicios de campañas publicitarias" },
    { Key: "82101802", Name: "Servicios de producción publicitaria" },
    { Key: "90141603", Name: "Servicios de promoción de eventos deportivos" },
    { Key: "93141711", Name: "Servicios de promoción de artesanías tradicionales" },
    { Key: "81101512", Name: "Servicios de sistemas de información geográfica" },
    { Key: "90101500", Name: "Establecimientos para comer y beber" },
    { Key: "90101700", Name: "Servicios de cafetería" },
    { Key: "90101501", Name: "Restaurantes" },
    { Key: "90101502", Name: "Bares" },
    { Key: "90101503", Name: "Establecimientos de comida rápida" },
    { Key: "90101800", Name: "Servicios de comida para llevar y a domicilio" },
    { Key: "50191500", Name: "Sopas y estofados" },
    { Key: "50192100", Name: "Botanas" },
    { Key: "50192300", Name: "Postres y decoraciones de postres" },
    { Key: "50111500", Name: "Carne y aves de corral" },
    { Key: "50192500", Name: "Sándwiches y panecillos con relleno" },
    { Key: "50192600", Name: "Acompañamientos preparados" },
    { Key: "50192700", Name: "Platos combinados empaquetados" },
    { Key: "50192800", Name: "Empanadas y quiches y pasteles" },
    { Key: "50192900", Name: "Pasta o tallarines natural" },
    { Key: "50193000", Name: "Bebidas y Comidas Infantiles" },
    { Key: "50193100", Name: "Materiales y mezclas instantáneas" },
    { Key: "50193200", Name: "Ensaladas preparadas" },
    { Key: "50131800", Name: "Queso" },
    { Key: "50131609", Name: "Huevos preparados" },
    { Key: "50121901", Name: "Pulpo en escabeche" },
    { Key: "50121900", Name: "Pescados y mariscos preservados en sal" },
    { Key: "50201712", Name: "Bebidas de té" },
    { Key: "50202301", Name: "Agua" },
    { Key: "50202305", Name: "Jugo fresco" },
    { Key: "50202306", Name: "Refrescos" },
    { Key: "50202307", Name: "Bebida de chocolate o malta u otros" },
    { Key: "50202400", Name: "Jugos o concentrados de cítricos frescos" },
    { Key: "50201708", Name: "Bebida de café" },
    { Key: "50201715", Name: "Té de frutas" },
    { Key: "50181900", Name: "Pan, galletas y pastelitos dulces" },
    { Key: "50181901", Name: "Pan fresco" },
    { Key: "50182000", Name: "Tartas y empanadas y pastas" },
    { Key: "50182001", Name: "Panqués pasteles o biscochos frescos" },
    { Key: "50192501", Name: "Emparedados frescos" },
    { Key: "50192700", Name: "Platos combinados empaquetados" },
    { Key: "50131700", Name: "Productos de leche y mantequilla" },
    { Key: "50192303", Name: "Helado de sabor o helado o postre de helado o yogurt congelado" },
    { Key: "50202200", Name: "Bebidas alcohólicas" },
    { Key: "50202201", Name: "Cerveza" },
    { Key: "50202203", Name: "Vino" },
    { Key: "50202207", Name: "Cocteles de alcohol o bebidas mixtas" },

    { Key: "84101700", Name: "Manejo de deuda" },
    { Key: "82131604", Name: "Servicios de estudio fotográfico o fotos fijas" },
    { Key: "82131603", Name: "Servicios de producción de vídeos" },
    { Key: "60121011", Name: "Fotografías" },
    { Key: "85101501", Name: "Servicios hospitalarios de emergencia o quirúrgicos" },
    { Key: "85131501", Name: "Servicios de trasplante de órganos" },
    { Key: "85121502", Name: "Servicios de consulta de médicos de atención primaria" },
    { Key: "85121600", Name: "Servicios médicos de doctores especialistas" },
    { Key: "85101601", Name: "Servicios de enfermería" },
    { Key: "85101504", Name: "Servicios de hospitales siquiátricos" },
    { Key: "85101505", Name: "Servicios respiratorios hospitalarios" },
    { Key: "85101506", Name: "Servicios hospitalarios para el abuso de sustancias" },
    { Key: "85101507", Name: "Centros asistenciales de urgencia" },
    { Key: "85101508", Name: "Centros o servicios móviles de atención de salud" },
    { Key: "85122100", Name: "Servicios de rehabilitación" },
    { Key: "85122101", Name: "Servicios de fisioterapia" },
    { Key: "85101509", Name: "Servicios hospitalarios ginecológicos u obstétricos" },
    { Key: "85101602", Name: "Servicios de obstetricia o de preparación para el parto" },
    { Key: "85121800", Name: "Laboratorios médicos" },
    { Key: "85121808", Name: "Servicios de laboratorios de rayos x" },
    { Key: "42182200", Name: "Termómetros médicos y accesorios" },
    { Key: "42311500", Name: "Vendas y vendajes y productos relacionados" },
    { Key: "42312005", Name: "Adhesivos o pegamentos de cierre de piel para uso médico" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Constitución de sociedades" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Fusión, escisión, transformación y liquidación" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Protocolización de actas de asambleas y consejo" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Aportación a sociedades" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Testamentos, sucesiones testamentarias, adjudicaciones por herencia" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Poderes, revocación de poderes" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Adjudicación por remate judicial" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Formalización de la transmisión de propiedad" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Hipotecas" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Fusión y subdivisión de predios" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Donaciones y permutas" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Cesiones de derecho" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Compraventa" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Cotejo de documentos" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Notificaciones" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Interpelaciones" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Fe de hechos" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Ratificaciones, declaraciones" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Apostillamiento" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Legalización" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Servicios de mediación, negociación y solución de conflictos" },
    { Key: "80121704", Name: "Servicios legales sobre contratos - Otros servicios notariales" },

    { Key: "84111500", Name: "Servicios contables - Servicios contables" },
    { Key: "84111501", Name: "Servicios contables - Servicio de contabilidad de costos" },
    { Key: "84111502", Name: "Servicios contables - Servicio de contabilidad financiera" },
    { Key: "84111503", Name: "Servicios contables - Servicio de contabilidad fiscal" },
    { Key: "84111505", Name: "Servicios contables - Servicios de contabilidad de sueldos y salarios" },
    { Key: "84111506", Name: "Servicios contables - Servicios de facturación" },
    { Key: "84111507", Name: "Servicios contables - Servicio de contabilidad de inventario" },
    { Key: "84111600", Name: "Servicios contables - Servicios de auditoría" },
    { Key: "84111601", Name: "Servicios contables - Auditorias de cierre del ejercicio" },
    { Key: "84111603", Name: "Servicios contables - Auditorias internas" },
    { Key: "84111700", Name: "Servicios contables - Finanzas corporativas" },
    { Key: "80121500", Name: "Servicios legales - Servicios de derecho penal" },
    { Key: "80121501", Name: "Servicios legales - Servicios legales de justicia juvenil o de adolescentes" },
    { Key: "80121502", Name: "Servicios legales - Servicios para procesos de apelación" },
    { Key: "80121503", Name: "Servicios legales - Servicios para defensa o de derecho penal" },
    { Key: "80121600", Name: "Servicios legales - Servicios de derecho comercial" },
    { Key: "80121601", Name: "Servicios legales - Servicios legales sobre competencia o regulaciones gubernamentales" },
    { Key: "80121602", Name: "Servicios legales - Servicios legales de quiebra" },
    { Key: "80121603", Name: "Servicios legales - Derecho societario" },
    { Key: "80121604", Name: "Servicios legales - Derecho de patentes, marcas o derechos de autor" },
    { Key: "80121605", Name: "Servicios legales - Derecho sobre liquidación (de sociedades)" },
    { Key: "80121606", Name: "Servicios legales - Derecho inmobiliario" },
    { Key: "80121607", Name: "Servicios legales - Derecho tributario" },
    { Key: "80121608", Name: "Servicios legales - Derecho de fusiones o adquisiciones" },
    { Key: "80121609", Name: "Servicios legales - Servicios de investigación legal" },
    { Key: "80121610", Name: "Servicios legales - Servicios legales de cobro de deudas o cartera." },
    { Key: "80121611", Name: "Servicios legales - Derecho de reclamación por tratamiento médico." },
    { Key: "80121700", Name: "Servicios legales - Servicios de responsabilidad civil" },
    { Key: "80121701", Name: "Servicios legales - Servicios legales de malpraxis o negligencia profesional" },
    { Key: "80121702", Name: "Servicios legales - Servicios legales sobre daños a personas" },
    { Key: "80121703", Name: "Servicios legales - Servicios legales de sobre la propiedad" },
    { Key: "80121704", Name: "Servicios legales - Servicios legales sobre contratos" },
    { Key: "80121705", Name: "Servicios legales - Servicios legales sobre beneficios de los empleados" },
    { Key: "80121706", Name: "Servicios legales - Servicios legales sobre derecho laboral" },
    { Key: "80121707", Name: "Servicios legales - Servicios legales para disputas laborales" },
    { Key: "80121800", Name: "Servicios legales - Servicios de derecho de familia" },
    { Key: "80121801", Name: "Servicios legales - Servicios sobre derecho de divorcio" },
    { Key: "80121802", Name: "Servicios legales - Servicios legales para adopción" },
    { Key: "80121803", Name: "Servicios legales - Derecho migratorio o de naturalización" },
    { Key: "80121804", Name: "Servicios legales - Servicios legales para tutorías o de custodia" },
    { Key: "80121900", Name: "Servicios legales - Servicios de participación compensada legal" },
    { Key: "80121901", Name: "Servicios legales - Servicio como miembro del jurado" },
    { Key: "80121902", Name: "Servicios legales - Servicio como testigo" },
    { Key: "80121903", Name: "Servicios legales - Servicio como testigo experto" },

    { Key: "42242300", Name: "Equipo y suministros ortopédicos" },
    { Key: "46182208", Name: "Equipo y suministros ortopédicos - Plantillas para zapatos" },
    { Key: "46182204", Name: "Equipo y suministros ortopédicos - Férulas para la muñeca" },
    { Key: "46182209", Name: "Equipo y suministros ortopédicos - Soportes para las rodillas" },
    { Key: "46182211", Name: "Equipo y suministros ortopédicos - Protector lumbar o férula de espalda" },
    { Key: "78181500", Name: "Servicios de mantenimiento y reparación de vehículos" },

    { Key: "25171500", Name: "Equipo y suministros de energía solar - Paneles solares" },
    { Key: "25171600", Name: "Equipo y suministros de energía solar - Celdas solares fotovoltaicas" },
    { Key: "25171700", Name: "Equipo y suministros de energía solar - Inversores solares" },
    { Key: "25171800", Name: "Equipo y suministros de energía solar - Baterías solares" },
    { Key: "25171900", Name: "Equipo y suministros de energía solar - Controladores de carga solar" },
    { Key: "25172000", Name: "Equipo y suministros de energía solar - Seguidores solares" },
    { Key: "25172100", Name: "Equipo y suministros de energía solar - Estructuras de montaje solar" },
    { Key: "25172200", Name: "Equipo y suministros de energía solar - Cables y conectores solares" },
    { Key: "25172300", Name: "Equipo y suministros de energía solar - Sistemas de monitoreo solar" },
    { Key: "25172400", Name: "Equipo y suministros de energía solar - Otros accesorios solares" },
    { Key: "25172500", Name: "Equipo y suministros de energía solar - Kits de energía solar" },
    { Key: "25172600", Name: "Equipo y suministros de energía solar - Sistemas de iluminación solar" },
    { Key: "25172700", Name: "Equipo y suministros de energía solar - Calentadores de agua solares" },
    { Key: "25172800", Name: "Equipo y suministros de energía solar - Bombas solares" },
    { Key: "25172900", Name: "Equipo y suministros de energía solar - Sistemas de refrigeración solar" },
    { Key: "25173000", Name: "Equipo y suministros de energía solar - Sistemas de ventilación solar" },
    { Key: "25173100", Name: "Equipo y suministros de energía solar - Otros sistemas solares" },
    { Key: "25173200", Name: "Equipo y suministros de energía solar - Componentes solares para vehículos" },
    { Key: "25173300", Name: "Equipo y suministros de energía solar - Servicios de instalación solar" },
    { Key: "25173400", Name: "Equipo y suministros de energía solar - Servicios de mantenimiento solar" },
    { Key: "25173500", Name: "Equipo y suministros de energía solar - Capacitación en energía solar" },
    { Key: "25173600", Name: "Equipo y suministros de energía solar - Otros servicios solares" },
    { Key: "25173700", Name: "Equipo y suministros de energía solar - Paneles solares portátiles" },
    { Key: "25173800", Name: "Equipo y suministros de energía solar - Kits de iluminación solar portátiles" },
    { Key: "25173900", Name: "Equipo y suministros de energía solar - Otros productos solares portátiles" },
    { Key: "25181000", Name: "Equipo y suministros de energía solar - Equipo y suministros de energía eólica" },
    { Key: "25181100", Name: "Equipo y suministros de energía solar - Equipo y suministros de energía hidroeléctrica" },
    { Key: "25181200", Name: "Equipo y suministros de energía solar - Equipo y suministros de energía geotérmica" },
    { Key: "25181300", Name: "Equipo y suministros de energía solar - Equipo y suministros de energía de biomasa" },
    { Key: "25181400", Name: "Equipo y suministros de energía solar - Equipos y suministros de energía de mareas" },
    { Key: "25181500", Name: "Equipo y suministros de energía solar - Equipo y suministros de energía de olas" },
    { Key: "25181600", Name: "Equipo y suministros de energía solar - Equipos y suministros de energía de hidrógeno" },
    { Key: "25181601", Name: "Equipo y suministros de energía solar - Electrólisis de agua" },
    { Key: "25181602", Name: "Equipo y suministros de energía solar - Equipos y suministros de almacenamiento de hidrógeno" },
    { Key: "25181603", Name: "Equipo y suministros de energía solar - Equipos y suministros de celdas de combustible de hidrógeno" },
    { Key: "25181604", Name: "Equipo y suministros de energía solar - Equipos y suministros de hidrógeno líquido" },
    { Key: "25181605", Name: "Equipo y suministros de energía solar - Equipos y suministros de hidrógeno sólido" },
    { Key: "25181606", Name: "Equipo y suministros de energía solar - Equipos y suministros de hidrógeno" },
    { Key: "25181607", Name: "Equipo y suministros de energía solar - Componentes para la producción de hidrógeno" },
    { Key: "25181608", Name: "Equipo y suministros de energía solar - Otros productos relacionados con el hidrógeno" },

    { Key: "91101603", Name: "Servicios de tatuajes" },
    { Key: "91101604", Name: "Servicios de pirsin corporal" },
    { Key: "50112000", Name: "Carnes procesadas y preparadas" },
    { Key: "50171700", Name: "Vinagres y vinos de cocinar" },
    { Key: "50171800", Name: "Salsas y condimentos y productos para untar" },
    { Key: "50171832", Name: "Salsas para ensaladas o dips" },
    { Key: "50171833", Name: "Cremas de untar saladas o patés" },
    { Key: "50171900", Name: "Salmuera y salsa y aceitunas" },
    { Key: "50171901", Name: "Encurtidos" },
    { Key: "50171904", Name: "Conserva" },
    { Key: "50151513", Name: "Aceites vegetales o de planta comestibles" },
    { Key: "50101717", Name: "Nueces y semillas sin cascara" },
    { Key: "50131800", Name: "Queso" },
    { Key: "50171500", Name: "Hierbas y especies y extractos" },
    { Key: "50161512", Name: "Almíbar" },
    { Key: "50161813", Name: "Chocolate o sustituto de chocolate, confite" },
    { Key: "50192403", Name: "Miel" },
    { Key: "50192400", Name: "Mermeladas y gelatinas y pastas de untar de nuez y dulce y conservas de fruta" },
    { Key: "50467007", Name: "Atún enlatado" },
    { Key: "50461600", Name: "Espárragos en lata o en frasco" },
    { Key: "50202200", Name: "Bebidas alcohólicas" },
    { Key: "50202201", Name: "Cerveza" },
    { Key: "50202203", Name: "Vino" },
    { Key: "50192111", Name: "Carne seca o procesada" },
    { Key: "50474900", Name: "Mostazas orgánicas en latas o en frasco" },
    
    { Key: "50221300", Name: "Harina y productos de molinos - Tortillas de Maíz" },
    { Key: "50171800", Name: "Salsas y condimentos y productos para untar" },
    { Key: "50192601", Name: "Papas preparadas frescas o arroz o pasta o relleno" },
    { Key: "50401800", Name: "Fríjoles" },

    { Key: "12161600", Name: "Catalizadores" },
    { Key: "15121500", Name: "Preparados lubricantes" },
    { Key: "25171500", Name: "Limpiaparabrisas" },
    { Key: "25171600", Name: "Sistemas de descarchado y antiniebla" },
    { Key: "25171700", Name: "Sistemas de frenado y componentes" },
    { Key: "25171900", Name: "Ruedas y acabados" },
    { Key: "25172000", Name: "Componentes de sistema de suspensión" },
    { Key: "25172100", Name: "Componentes y sistemas de seguridad de vehículo" },
    { Key: "25172200", Name: "Puertas para vehículos" },
    { Key: "25172300", Name: "Ventanas y parabrisas para vehículos" },
    { Key: "25172400", Name: "Depósitos y sistemas de combustible" },
    { Key: "25172500", Name: "Neumáticos y cámaras de neumáticos" },
    { Key: "25172600", Name: "Acabados y revestimientos exterior para vehículos" },

    { Key: "25172700", Name: "Sistemas de control medioambiental" },
    { Key: "25172800", Name: "Sistemas y componentes hidráulicos" },
    { Key: "25172900", Name: "Iluminación exterior para vehículos" },
    { Key: "25173000", Name: "Iluminación interior para vehículos" },
    { Key: "25173300", Name: "Sistemas de control principal" },
    { Key: "25173700", Name: "Controles de emisión y de escape" },
    { Key: "25173800", Name: "Sistemas de tren de transmisión" },
    { Key: "25173900", Name: "Componentes eléctricos" },
    { Key: "25174000", Name: "Sistema de refrigerar de motor" },
    { Key: "25174400", Name: "Sistemas del interior de vehículos" },
    { Key: "25174600", Name: "Sistemas de asientos del vehículo" },
    { Key: "25174700", Name: "Componentes de ciclo no motorizado o accesorios" },
    { Key: "25174800", Name: "Componentes y sistemas de vehículos especializados" },
    { Key: "25174900", Name: "Aisladores y amortiguadores de vibración de vehículos" },
    { Key: "25175000", Name: "Sistemas de cargado eléctrico de vehículos" },
    { Key: "25181600", Name: "Chasis automotriz" },
    { Key: "25181700", Name: "Remolques para productos y materiales" },
    { Key: "25191500", Name: "Sistemas y equipo de apoyo para transporte aéreo" },
    { Key: "25191600", Name: "Sistemas y equipo de apoyo para transporte espacial" },
    { Key: "25191700", Name: "Equipo para el mantenimiento de vehículo" },
    { Key: "25191800", Name: "Equipo de medición y prueba de vehículos" },
    { Key: "26101100", Name: "Motores eléctricos de corriente alterna AC" },
    { Key: "26101200", Name: "Motores eléctricos de corriente directa DC" },
    { Key: "26101300", Name: "Motores no eléctricos" },
    { Key: "26101400", Name: "Componentes de motores o generadores" },
    { Key: "26101500", Name: "Motores" },
    { Key: "26101700", Name: "Accesorios y componentes de motor" },
    { Key: "26111500", Name: "Transmisión de energía cinética" },
    { Key: "26111600", Name: "Generadores de potencia" },
    { Key: "26111700", Name: "Baterías, pilas y accesorios" },
    { Key: "26111800", Name: "Componentes de la transmisión" },
    { Key: "26111900", Name: "Embragues" },
    { Key: "26112000", Name: "Piezas y accesorios de embragues" },
    { Key: "26121800", Name: "Cable automotriz" },
    { Key: "31181700", Name: "Embalajes y empaquetaduras" },
    { Key: "31181800", Name: "Cubiertas automotrices" },
    { Key: "40101800", Name: "Equipo de calefacción y piezas y accesorios" },
    { Key: "40161500", Name: "Filtros" },
    { Key: "81101700", Name: "Ingeniería eléctrica y electrónica" },
    { Key: "84111500", Name: "Servicios contables" },

    { Key: "93151609", Name: "Servicios de loterías" },
    { Key: "43191501", Name: "Teléfonos móviles" },
    { Key: "43191606", Name: "Auriculares de teléfonos" },
    { Key: "43201800", Name: "Dispositivos de almacenamiento" },
    { Key: "43191600", Name: "Partes o accesorios de dispositivos de comunicación personal" },
    { Key: "43191631", Name: "Clavijas de adaptadores o kits de campo o kits de viaje para teléfonos o módems" },
    { Key: "81112100", Name: "Servicios de internet" },
    { Key: "83111603", Name: "Servicios de telefonía celular" },
    { Key: "70122000", Name: "Salud animal" },
    { Key: "70122001", Name: "Nutrición animal" },
    { Key: "70122002", Name: "Control de enfermedades animales" },
    { Key: "70122004", Name: "Servicios de control de patas y boca" },
    { Key: "70122005", Name: "Servicios de medicación preventiva de salud animal" },
    { Key: "70122006", Name: "Servicios de vacunación animal" },
    { Key: "70122009", Name: "Servicios hospitalarios para animales" },
    { Key: "70122010", Name: "Servicios de información de salud animal" },
    { Key: "10111301", Name: "Juguetes para mascotas" },
    { Key: "10111300", Name: "Accesorios, equipo y tratamientos para los animales doméstico" },
    { Key: "10111302", Name: "Productos para el aseo y cuidado de mascotas" },
    { Key: "10111303", Name: "Equipo para el manejo de desperdicios de las mascotas" },
    { Key: "10111304", Name: "Tazones o equipo para alimentación de mascotas" },

    { Key: "10111305", Name: "Tratamientos medicados para mascotas" },
    { Key: "10111306", Name: "Kits para el entrenamiento de mascotas domésticas" },
    { Key: "10111307", Name: "Cobijas para mascotas" },
    { Key: "10121800", Name: "Alimento para perros y gatos" },
    { Key: "53111500", Name: "Botas" },
    { Key: "53111501", Name: "Botas para hombre" },
    { Key: "53111502", Name: "Botas para mujer" },
    { Key: "53111503", Name: "Botas para niño" },
    { Key: "53111504", Name: "Botas para niña" },
    { Key: "53111505", Name: "Botas para bebé" },
    { Key: "53111600", Name: "Zapatos" },
    { Key: "53111601", Name: "Zapatos para hombre" },
    { Key: "53111602", Name: "Zapatos para mujer" },
    { Key: "53111603", Name: "Zapatos para niño" },
    { Key: "53111604", Name: "Zapatos para niña" },
    { Key: "53111605", Name: "Zapatos para bebé" },
    { Key: "53111701", Name: "Pantuflas para hombre" },
    { Key: "53111702", Name: "Pantuflas para mujer" },
    { Key: "53111703", Name: "Pantuflas para niño" },
    { Key: "53111704", Name: "Pantuflas para niña" },
    { Key: "53111705", Name: "Pantuflas para bebé" },
    { Key: "53111800", Name: "Sandalias" },
    { Key: "53111801", Name: "Sandalias para hombre" },
    { Key: "53111802", Name: "Sandalias para mujer" },
    { Key: "53111803", Name: "Sandalias para niño" },
    { Key: "53111804", Name: "Sandalias para niña" },
    { Key: "53111805", Name: "Sandalias para bebé" },
    { Key: "53111900", Name: "Calzado deportivo" },
    { Key: "53111901", Name: "Calzado atlético para hombre" },
    { Key: "53111902", Name: "Calzado atlético para mujer" },
    { Key: "53111903", Name: "Calzado atlético para niño" },
    { Key: "53111904", Name: "Calzado atlético para niña" },
    { Key: "53111905", Name: "Calzado atlético para bebé" },
    { Key: "53112000", Name: "Accesorios para el calzado" },
    { Key: "53112001", Name: "Calzadores" },
    { Key: "53112002", Name: "Cordones para zapatos" },
    { Key: "53112003", Name: "Almohadillas para talones" },
    { Key: "53112100", Name: "Chanclos" },

    { Key: "80111700", Name: "Reclutamiento de personal (Servicios de agencias de colocación de personal)" },
    { Key: "80111701", Name: "Servicios de contratación de personal (Servicios de outsourcing, Servicios de subcontratación de personal)" },
    { Key: "94131603", Name: "Servicios de asistencia legal" },
    { Key: "86132001", Name: "Servicio de entrenamiento (coaching) ejecutivo" },
    { Key: "86111700", Name: "Educación de idiomas" },
    { Key: "85121608", Name: "Servicios de psicología" },
    { Key: "85121701", Name: "Servicios de psicoterapeutas" },
    { Key: "85121600", Name: "Servicios médicos de doctores especialistas" },
    { Key: "83111603", Name: "Servicios de telefonía celular" },
    { Key: "81112100", Name: "Servicios de internet" },

];

export function getProfitability(rentability, orignalPrice){
    if(rentability <= 0 || orignalPrice <= 0){
        return 33777777666777;
    };
    return (((rentability )/orignalPrice)*100).toFixed(2);
};

export function fromProfitability(profitMargin, orignalPrice){
    if(orignalPrice <= 0){
        return 33777777666777;
    };
    const priceFromMargin = (orignalPrice * (profitMargin*0.01));
    console.log("", orignalPrice,"", priceFromMargin);
   /* if(profitMargin < 101){
        return orignalPrice - priceFromMargin;
    };*/
    console.log(priceFromMargin);
    return (((profitMargin*0.01 )*orignalPrice)).toFixed(2);
};