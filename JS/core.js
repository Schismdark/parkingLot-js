//import { saveAs } from './JS/FileSaver.min.js';
var exitModal = new bootstrap.Modal(document.getElementById('exitModal'));
var editModal = new bootstrap.Modal(document.getElementById('editModal'));
//Clase datosEntrada: Representa los datos del carro y su dueño para el parqueo
class datosEntrada{
    constructor(indice, duenio, carro, matricula, tipoV, tipoP, horaEntrada, horaSalida, diff, costo, fechaEntrada, fechaSalida){
        this.indice = indice;
        this.duenio = duenio;
        this.carro = carro;
        this.matricula = matricula; 
        this.tipoV = tipoV; 
        this.tipoP = tipoP;
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.diff = diff;
        this.costo = costo;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
    }
    static obtenerEntradaPorIndice(indice) {
        const entradas = Almac.getEntradas();
        return entradas.find(e => e.indice === indice);
    }
    static obtenerEntradas() {
        let entradas;
        if(localStorage.getItem('entradas') === null){
            entradas = [];
        } else {
            entradas = JSON.parse(localStorage.getItem('entradas'));
        }
        return entradas;
    }
    static actualizarDuenio(indice, duenioNuevo) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.duenio = duenioNuevo;
        }
        // Guarda el array de entradas actualizado en el localStorage
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarCarro(indice, carroNuevo) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.carro = carroNuevo;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarMatricula(indice, matriculaNueva) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.matricula = matriculaNueva;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarTipoV(indice, tipoVNuevo) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.tipoV = tipoVNuevo;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarTipoP(indice, tipoPNuevo) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.tipoP = tipoPNuevo;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static obtenetTipoP(indice) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            return entrada.tipoP;
        }
    }

    static actualizarHoraEntrada(indice, horaEntradaNueva) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.horaEntrada = horaEntradaNueva;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarHoraSalida(indice, horaSalidaNueva) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.horaSalida = horaSalidaNueva;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarDiff(indice, diffNuevo) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.diff = diffNuevo;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarCosto(indice, costoNuevo) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.costo = costoNuevo;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarFechaEntrada(indice, fechaEntradaNueva) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.fechaEntrada = fechaEntradaNueva;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    static actualizarFechaSalida(indice, fechaSalidaNueva) {
        const entradas = datosEntrada.obtenerEntradas();
        const entrada = entradas.find(entrada => entrada.indice === indice);
        if(entrada){
            entrada.fechaSalida = fechaSalidaNueva;
        }
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }
    
}
//Inicializando tooltips de bootstrap

//Clase UI: Maneja las tareas de interfaz de usuario
class UI{
    static mostrarEntradas(){
   
        const entradas = Almac.getEntradas();
        entradas.forEach((entrada) => UI.agregarEntradaATabla(entrada));
    }
    static agregarEntradaATabla(entrada){
        const cuerpoTabla=document.querySelector('#tableBody');
        const fila = document.createElement('tr');
        fila.innerHTML = `  <td class="align-middle" id="indice">${entrada.indice}</td>
                            <td class="align-middle" id="duenio">${entrada.duenio}</td>
                            <td class="align-middle" id="carro">${entrada.carro}</td>
                            <td class="align-middle" id="matricula">${entrada.matricula}</td>
                            <td class="align-middle" id="tipo">${entrada.tipoV}</td>
                            <td class="align-middle" id="hEntrada">${entrada.horaEntrada}</td>
                            <td class="align-middle" id="hSalida">${entrada.horaSalida}</td>
                            <td class="align-middle" id="diff">${entrada.diff}</td>
                            <td class="align-middle" id="costo">${entrada.costo}</td>
                            <td class="align-middle" id="fechaEntrada">${entrada.fechaEntrada}</td>
                            <td class="align-middle" id="fechaSalida">${entrada.fechaSalida}</td>
                            <td>
                                <div class="d-flex gap-2 tltp">
                                    <button type="button" class="btn btn-outline-success my-1 btn-sm edit"><i class="fa-solid fa-pen-to-square" id="edit"></i></button>
                                    <button type="button" class="btn btn-outline-primary exit btn-sm my-1 data-bs-toggle="modal" data-bs-target="#exitModal" " ><i class="fa-solid fa-right-from-bracket" id="exit"></i></button>
                                    <button class="btn btn-outline-danger btn-sm my-1 delete"><i class="fa-solid fa-xmark" id="delete"></i></button>
                                </div>
                            </td>
                        `;
        cuerpoTabla.appendChild(fila);
    }
    static limpiarTxts(){
        //Selecciona todas las cajas de texto con la clase form-control
        const txts = document.querySelectorAll('.form-control');
        //limpia el contenido de cada caja de texto
        txts.forEach((txt)=>txt.value="");
        document.querySelector('.form-select').value = '';
    }
    static borrarEntrada(target){
        if(target.id==='delete' || target.classList.contains('delete')){
            const row = target.closest('tr');
            row.remove();
        }
    }
    static mostrarAlert(mensaje,nombreClase){
        const div = document.createElement('div');
        div.className=`alert alert-${nombreClase} w-50 mx-auto`;
        div.appendChild(document.createTextNode(mensaje));
        const formContainer = document.querySelector('.form-container');
        const form = document.querySelector('#formEntrada');
        formContainer.insertBefore(div,form);
        setTimeout(() => document.querySelector('.alert').remove(),3000);
    }
    static mostrarAlert2(mensaje,nombreClase){
        const div = document.createElement('div');
        div.className=`alert alert-${nombreClase} w-75 mx-auto py-1 text-center`;
        div.appendChild(document.createTextNode(mensaje));
        const elemento = document.querySelector('.table-container');
        const etiqueta = document.querySelector('h5');
        elemento.insertBefore(div,etiqueta);
        setTimeout(() => document.querySelector('.alert').remove(),3000);
    }
    static validarTxts(){
        const duenio = document.querySelector('#duenio').value;
        const carro = document.querySelector('#carro').value;
        const matricula = document.querySelector('#matricula').value;
        const tipoVehiculo = document.querySelector('#tipoVehiculo').value;
        //var matriculaRegex = /^(?:[A-Z]{2}-\d{2}-\d{2})|(?:\d{2}-[A-Z]{2}-\d{2})|(?:\d{2}-\d{2}-[A-Z]{2})$/;
        if(duenio === '' || carro === '' || matricula === '' || tipoVehiculo === ''){
            UI.mostrarAlert('Todos los campos deben ser completados!','danger');
            return false;
        }
        return true;
    }
}
//Clase Almac: Almacena datos localmente
class Almac{
    static getEntradas(){
        let entradas;
        if(localStorage.getItem('entradas') === null){
            entradas = [];
        }
        else{
            entradas = JSON.parse(localStorage.getItem('entradas'));
        }
        return entradas;
    }
    static addEntradas(entrada){
        const entradas = Almac.getEntradas();
        entradas.push(entrada);
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }
    static removeEntradas(indice){
        const entradas = Almac.getEntradas();
        entradas.forEach((entrada, index) => {
            if(entrada.indice === indice){
                entradas.splice(index, 1);
            }
        });
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }
}

//Evento Display o Load
document.addEventListener('DOMContentLoaded', ()=>{
    UI.mostrarEntradas();
});
//Evento Agregar
//localStorage.clear();
let indiceAcumulador = parseInt(localStorage.getItem('indiceAcumulador'), 10);
const entradasGuardadas = JSON.parse(localStorage.getItem('entradas'));
// Si no hay entradas almacenadas, reinicia indiceAcumulador a 1
if (!entradasGuardadas || entradasGuardadas.length === 0 || entradasGuardadas === null) {
    indiceAcumulador = 0;
}
    //var tipoV;
    //var fechaInicioObj;
    //var fechaFinalObj;
    document.querySelector('#formEntrada').addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const duenio = document.querySelector('#duenio').value;
        const carro = document.querySelector('#carro').value;
        const matricula = document.querySelector('#matricula').value;
        const tipoV = document.querySelector('#tipoVehiculo').options[document.querySelector('#tipoVehiculo').selectedIndex].text;
        const tipoP = document.querySelector('#tipoVehiculo').value;
        const fechaEntrada = new Date().toLocaleDateString("es-ES",{day: '2-digit', month: '2-digit', year: '2-digit'});
        const horaEntrada = new Date().toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'America/El_Salvador' });
        //fechaInicioObj = new Date();

        if(!UI.validarTxts()){
            return;
        }
        //Instanciando la clase datosEntrada
        indiceAcumulador++;
        const entrada = new datosEntrada(indiceAcumulador, duenio, carro, matricula, tipoV, tipoP, horaEntrada, '', '', 0, fechaEntrada, '');
        localStorage.setItem('indiceAcumulador', indiceAcumulador.toString());
        UI.agregarEntradaATabla(entrada);
        Almac.addEntradas(entrada);
        UI.limpiarTxts();
        UI.mostrarAlert('Carro agregado con éxito al estacionamiento','success');
    });
//Evento Eliminar
    document.querySelector('#tableBody').addEventListener('click',(e)=>{
        if (e.target.id==='delete' || e.target.classList.contains('delete')) {
            const row = e.target.closest('tr');
            let indice = row.querySelector('#indice').textContent;
            //Elimina una fila
            UI.borrarEntrada(e.target);
            //Elimia el registro del almacenamiento
            Almac.removeEntradas(Number(indice));
            UI.mostrarAlert2('Coche eliminado con éxito de la lista de estacionamiento','success');
        }
    });
    
//Evento Buscar
    document.querySelector('#txtBuscar').addEventListener('keyup', function searchTable(){
        //Se obtiene el valor de la caja de texto
        const valorBusqueda = document.querySelector('#txtBuscar').value.toUpperCase();
        //Se obtiene todas las lineas de la tabla
        const tablaLinea = (document.querySelector('#tableBody')).querySelectorAll('tr');
  
        for(let i = 0; i < tablaLinea.length; i++){
            var count = 0;
            //Obtener todas las columnas de la fila
            const valoresLinea = tablaLinea[i].querySelectorAll('td');

            for(let j = 0; j < valoresLinea.length - 1; j++){
                //Verificar si existe la letra que se empiece a digitar en alguna de las columnas
                if((valoresLinea[j].innerHTML.toUpperCase()).startsWith(valorBusqueda)){
                    count++;
                }
            }
            if(count > 0){
                //Si alguna columna contiene el valor de búsqueda, el bloque se visualizará
                tablaLinea[i].style.display = '';
            }else{
                //De lo contrario mostrar ninguno 
                tablaLinea[i].style.display = 'none';
            }
        }
    });
//Evendo salida o despacho del carro
    document.querySelector('#tableBody').addEventListener('click',(e)=>{
        if (e.target.id === 'exit' || e.target.classList.contains('exit')) {

            const row = e.target.closest('tr');
            let boton = row.querySelector('.exit');
            let indice = row.querySelector('#indice').textContent;
            let duennio = row.querySelector('#duenio').textContent;
            let matricula = row.querySelector('#matricula').textContent;
            let horaI = row.querySelector('#hEntrada').textContent;
            let fechaEntradaI = row.querySelector('#fechaEntrada').textContent;
            let fechaSalida = new Date().toLocaleDateString("es-ES",{day: '2-digit', month: '2-digit', year: '2-digit'});
            let horaSalida = new Date().toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'America/El_Salvador' });
            let precioTipo = datosEntrada.obtenetTipoP(Number(indice));
            let tiempoPermanencia = calcularDiferenciaHorasMinutos(fechaEntradaI, horaI, fechaSalida, horaSalida);
            let rHoraSalida = row.querySelector('#hSalida');
            let rDiff = row.querySelector('#diff');
            let rCosto = row.querySelector('#costo');
            let rFechaSalida = row.querySelector('#fechaSalida');
            
            let costoTotal = calcularCostoEstacionamiento(tiempoPermanencia, precioTipo);
            exitModal.show();
            if(rHoraSalida.textContent === '' || rDiff.textContent === '' || rCosto.textContent === '' || rFechaSalida.textContent === ''){
                
            
                document.getElementById('dueno').innerText = duennio;
                document.getElementById('placa').innerText = matricula;
                document.getElementById('hora-inicio').innerText = horaI;
                document.getElementById('hora-final').innerText = horaSalida;
                document.getElementById('horas-parqueadas').innerText = tiempoPermanencia;
                document.getElementById('precio-total').innerText = "$"+costoTotal;

                rHoraSalida.textContent = horaSalida;
                rDiff.textContent = tiempoPermanencia;
                rCosto.textContent = "$"+costoTotal;
                rFechaSalida.textContent = fechaSalida;
                datosEntrada.actualizarHoraSalida(Number(indice), horaSalida);
                datosEntrada.actualizarDiff(Number(indice), tiempoPermanencia);
                datosEntrada.actualizarCosto(Number(indice), "$"+costoTotal);
                datosEntrada.actualizarFechaSalida(Number(indice), fechaSalida);
                
                
            } else {

                document.getElementById('dueno').innerText = duennio;
                document.getElementById('placa').innerText = matricula;
                document.getElementById('hora-inicio').innerText = horaI;
                document.getElementById('hora-final').innerText = row.querySelector('#hSalida').textContent;
                document.getElementById('horas-parqueadas').innerText = row.querySelector('#diff').textContent;
                document.getElementById('precio-total').innerText = row.querySelector('#costo').textContent;
            }
            //boton.setAttribute("disabled", "disabled");
        };
    });
//Evento exportar archivo csv
    document.getElementById('btnDescargar').addEventListener('click',()=>{

        const txtHeader = document.querySelectorAll('.modal-body p strong');
        const datospSpan = document.querySelectorAll('.modal-body p span');
        //const duenoH = document.getElementById('duenoHeader').querySelector('strong').textContent.trim();
        const datos = [];

        for (let i = 0; i < txtHeader.length; i++){
            let header = txtHeader[i].textContent.trim();
            header = header.substring(0,header.length-1);
            const valor = datospSpan[i].textContent.trim();
            
            datos.push({header, valor});
        }
        if (datos.length === 0 || datos.length!== txtHeader.length || datos.length!== datospSpan.length) {
            console.error('Número incorrecto de encabezados o valores.');
            return;
        }
        const csvHeaders = datos.map(obj => `${obj.header}`).join(';');
        const csvRows = datos.map(obj => `"${obj.valor}"`).join(';');
        const csvContent = `${csvHeaders}\n${csvRows}`;

        //const currentLocale = navigator.language || navigator.userLanguage;
        //const listItemSeparator = getListItemSeparator(currentLocale);
        //console.log(`Lista Item Separator: ${listItemSeparator}`);
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'test.csv');
        //downloadLink.href = URL.createObjectURL(blob);
        //downloadLink.click();
        exitModal.hide();
    });
//Evento Editar
document.querySelector('#tableBody').addEventListener('click',(e)=>{
    if (e.target.id === 'edit' || e.target.classList.contains('edit')) {
        
        editModal.show();
        const row = e.target.closest('tr');
        let indice = row.querySelector('#indice').textContent;
        let duennio = row.querySelector('#duenio').textContent;
        let carro = row.querySelector('#carro').textContent;
        let matricula = row.querySelector('#matricula').textContent;
        let tipoVehiculo = row.querySelector('#tipo').textContent;
        document.getElementById('txtIndice').value = indice;
        document.getElementById('txtDuenio').value = duennio;
        document.getElementById('txtCarro').value = carro;
        document.getElementById('txtPlaca').value = matricula;
        document.querySelector('#slctTipo').options[document.querySelector('#slctTipo').selectedIndex].text = tipoVehiculo;

    };
});
//Evento Actualizar
document.getElementById('btnActualizar').addEventListener('click',()=>{
    let indice = document.getElementById('txtIndice').value;
    let duenio = document.getElementById('txtDuenio').value;
    let carro = document.getElementById('txtCarro').value;
    let matricula = document.getElementById('txtPlaca').value;
    let tipo = document.querySelector('#slctTipo').options[document.querySelector('#slctTipo').selectedIndex].text;
    let tipoP = document.querySelector('#slctTipo').value;
    
    const tablaLineas = (document.querySelector('#tableBody')).querySelectorAll('tr');
    tablaLineas.forEach(row => {
        // Verificar si alguno de los <td> contiene el ID del registro
        let indiceRow = row.querySelector('#indice').textContent;
        if ( indiceRow === indice) {
          // Obtiene los valores actuales de los <td>
            let duenioActual = row.querySelector('#duenio').textContent;
            let carroActual = row.querySelector('#carro').textContent;
            let matriculaActual = row.querySelector('#matricula').textContent;
            let tipoActual = row.querySelector('#tipo').textContent;
            // Compara los valores actuales con los valores modificados
            if (duenio!== duenioActual || carro!== carroActual || matricula!== matriculaActual || tipo !== tipoActual) {
                // Si los valores han cambiado, actualiza los <td>
                row.querySelector('#duenio').textContent = duenio;
                row.querySelector('#carro').textContent = carro;
                row.querySelector('#matricula').textContent = matricula;
                row.querySelector('#tipo').textContent = tipo;
                datosEntrada.actualizarDuenio(Number(indice), duenio);
                datosEntrada.actualizarCarro(Number(indice), carro);
                datosEntrada.actualizarMatricula(Number(indice), matricula);
                datosEntrada.actualizarTipoV(Number(indice), tipo);
                datosEntrada.actualizarTipoP(Number(indice), tipoP);
            } else {
                // Si los valores no han cambiado, no se realiza ninguna actualización
                console.log("Los valores no han sido modificados.");
            }
        }
      });
      
    editModal.hide();
});
    function calcularCostoEstacionamiento(diferenciaHoras, tipo) {
        // Costo base por una hora será de 1 dólar o fracción si es hora y fracción o sólo fracción
        let matches = diferenciaHoras.match(/\d+/g);
        //const [horasStr, minutosStr] = diferenciaHoras.split(':');
        const horas = parseInt(matches[0]); // Convertir a entero para asegurar operaciones aritméticas correctas
        const minutos = parseInt(matches[1]); // Convertir a entero para asegurar operaciones aritméticas correctas
        const fraccionHora = parseFloat(minutos / 60);// Convertir a punto flotante para asegurar operaciones aritméticas correctas
        let costoTotal = (horas + fraccionHora) * parseFloat(tipo);
        // Verificar si costoTotal es un número antes de llamar a toFixed
        if (isNaN(costoTotal)) {
            console.error("Error: costoTotal no es un número");
            return "0.00";
        }
        return costoTotal.toFixed(2);
    }
    /*function calcularDiferenciaHorasMinutos(fechaInicio, fechaFin) { 
        // Calcula la diferencia en milisegundos
        const milisegundosDiferencia = fechaFin.getTime() - fechaInicio.getTime(); // Convierte los milisegundos a horas y minutos
        const segundos = milisegundosDiferencia / 1000; 
        const horas = Math.floor(segundos / 3600); 
        const minutos = Math.floor((segundos % 3600) / 60); // Devuelve un objeto con la diferencia en horas y minutos
        let horaDiferencia;
        let strH, strM;
        strH = horas == 1? "hora" : horas > 1 || horas == 0? "horas" : "hora";
        strM = minutos == 1? "minuto" : minutos > 1? "minutos" : "minuto";
        
        horaDiferencia = `${horas} ${strH} y ${minutos} ${strM}`;
        return  horaDiferencia;
    }*/
    function calcularDiferenciaHorasMinutos(fechaInicio, horaInicio12H, fechaFin, horaFin12H) { 
        // Extrae las horas y minutos de horaInicio
        const horaInicio = convertirAFormato24Horas(horaInicio12H);
        const horaFin = convertirAFormato24Horas(horaFin12H);
        const fInicio = fechaAObj(fechaInicio);
        const fFin = fechaAObj(fechaFin);
        const fechaHoraI = `${fInicio} ${horaInicio}:00`;
        const fechaHoraFin = `${fFin} ${horaFin}:00`;
        //const [horaMinutos,...resto] = tiempoConAmPm.split(/\s+/);
        //const [hInicio, mInicio] = horaInicio.split(':'); 
        //const [hFin, mFin] = horaFin.split(':');
        // Crea un nuevo objeto Date con solo horas y minutos para horaInicio
        const fechaInicioObj = new Date(fechaHoraI); 
        const fechaFinObj = new Date(fechaHoraFin);
        //fechaInicioObj.setHours(hInicio, mInicio);
        //fechaFinObj.setHours(hFin, mFin); 
        // Calcula la diferencia en milisegundos
        const milisegundosDiferencia = fechaFinObj.getTime() - fechaInicioObj.getTime(); // Convierte los milisegundos a horas y minutos
        const segundos = milisegundosDiferencia / 1000; 
        const horas = Math.floor(segundos / 3600); 
        const minutos = Math.floor((segundos % 3600) / 60); // Devuelve un objeto con la diferencia en horas y minutos
        let horaDiferencia;
        let strH, strM;
        strH = horas == 1? "hora" : horas > 1 || horas == 0? "horas" : "hora";
        strM = minutos == 1? "minuto" : minutos > 1? "minutos" : "minuto";
        
        horaDiferencia = `${horas} ${strH} y ${minutos} ${strM}`;
        return  horaDiferencia;
    }
    function convertirATiempoDe12Horas(tiempo24Horas) {
        let [horaStr, minutoStr] = tiempo24Horas.split(':');
        let hora = parseInt(horaStr);
        let minuto = parseInt(minutoStr);
        let tiempoFormateado;
        if(hora > 12 ){
            hora = hora - 12;
            tiempoFormateado = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')} p. m.`;
        } else{
            tiempoFormateado = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')} a. m.`;
        }
        return tiempoFormateado;
    }
    function convertirAFormato24Horas(hora12Horas) {
        let [horaMinutos, ...resto] = hora12Horas.split(/\s+/);
        let periodo = resto.join(' ').trim();
        let [horaStr, minutoStr] = horaMinutos.split(':');
        let hora = parseInt(horaStr);
        let minuto = parseInt(minutoStr);
        let hora24Horas;
        
        if (hora === 12 && periodo === "a. m.") {
            hora24Horas = '00';
        } else if (hora > 9 && periodo === "a. m.") {
            hora24Horas = `${hora}`;
        } else if (hora < 10 && periodo === "a. m.") {
            hora24Horas = `0${hora}`;
        } else if (hora < '12' && periodo === "p. m.") {
            hora24Horas = `${hora + 12}`;
        }
        
        return `${hora24Horas}:${minuto}`;
    }
    function fechaAObj(fechaStr) {
        const partesFecha = fechaStr.split("/");
        const mes = partesFecha[1];
        const anio = "20" + partesFecha[2];
        const fechaObj = new Date(Date.UTC(anio, mes - 1, partesFecha[0]));
        const fechaIso = fechaObj.toISOString();
        const fechaFormateada = fechaIso.split('T');
         return fechaFormateada[0];
    }