
function enviartabla(){
var vcodigo = document.getElementById("codigo").value;
var velemento = document.getElementById("elemento").value;
var vcosto = document.getElementById("costo").value;
var vfecha = document.getElementById("fecha").value;

if( vcosto<0){
    alert("El costo que has ingresado es invalido");
    document.getElementById("costo").value="" ;
    return;
}

if( vcodigo=="" 	|| velemento==""	|| vcosto=="" 	|| vfecha==""){
    document.getElementById("codigo").value="" ;
    document.getElementById("elemento").value="" ;
    document.getElementById("costo").value="" ;
    document.getElementById("fecha").value="" ;
  alert("No dejes campos vacios");
  return;
}

var cuerpotabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
var nuevafila = cuerpotabla.insertRow();
var contenidofila = "<tr>" + "<td>" + vcodigo + "</td> <td>" +velemento + "</td> <td>" +vcosto+ "</td> <td>" +vfecha + "</td>" + "</tr>";
nuevafila.innerHTML=contenidofila;
document.getElementById("codigo").value="" ;
document.getElementById("elemento").value="" ;
document.getElementById("costo").value="" ;
document.getElementById("fecha").value="" ;
totales();

}
function totales(){
    var cuerpotabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
    var contarelementos=cuerpotabla.rows.length;
    document.getElementById("contador").innerHTML=  "<b> Elementos totales:     " + contarelementos  + "</b>";
    var tabla=document.getElementById("tabla");
    var filas=tabla.rows;
    var total=0;  
    var celda;
    for (let j=1;j<= filas.length-2;j++){
        celda=filas[j].cells[2];
        total+= parseFloat(celda.innerHTML);
    }
    document.getElementById("totalcostos").innerHTML=  "<b> Total de Costos:     " + total  + "</b>";
}
function showTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
    var day =d.getDay();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    var MV = "AM";
    if(hour == 12){
        MV = "PM";
    }
    if(hour > 12){
        hour = hour % 12;
        MV = "PM";
    }
   

    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);

    document.getElementById("clock").innerHTML = "<b>Hoy es:</b>  "+date+"/"+month+"/"+year+"<br> <b>La hora es </b>:"+hour+":"+min+":"+sec+" "+MV;
}
    
setInterval(showTime,1000);


 function eliminar(){

     var codigo=prompt("Ingresa el codigo de la fila que deseas eliminar:");
     var tabla=document.getElementById("tabla");
     var filas=tabla.rows;
     condicion= false;

     for (let j=1;j<= filas.length-2;j++){
         if(codigo==filas[j].cells[0].innerHTML){
            document.getElementById("tabla").deleteRow(j);
            totales();
            condicion=true;
    
         }
         }
         if( condicion==false){
             alert("El código que ingresaste no esta registrado");
         }
  
     }
 function cambiar(){

    var codigo=prompt("Ingresa el código de la fila que desea modificar:");
    var tabla=document.getElementById("tabla");
    var filas=tabla.rows;
    condicioncambiar=false;

    for (let j=1;j<= filas.length-2;j++){
        if(codigo==filas[j].cells[0].innerHTML){
            var vcodigo = prompt("Ingrese el nuevo código:");
            while(vcodigo==""){
                alert("Por favor ingrese un nuevo Código");
                var vcodigo = prompt("Ingrese el nuevo código:");
            }
            var velemento = prompt("Ingrese el nuevo nombre del elemento:");
            while(velemento==""){
                alert("Por favor ingrese el nuevo nombre del elemento:");
                var velemento = prompt("Ingrese el nuevo nombre del elemento:");
            }
            var vcosto = prompt("Ingrese el nuevo Costo:");
            while(vcosto==""){
                alert("Por favor ingrese un nuevo Costo");
                var vcosto = prompt("Ingrese el nuevo Costo:");
            }
            var vfecha = prompt("Ingrese la nueva fecha:");
            while(vfecha==""){
                alert("Por favor ingrese una nueva fecha");
                var vfecha = prompt("Ingrese la nueva fecha:");
            }
            filas[j].cells[0].innerHTML=vcodigo;
            filas[j].cells[1].innerHTML=velemento;
            filas[j].cells[2].innerHTML=vcosto;
            filas[j].cells[3].innerHTML=vfecha;
            totales();
            condicioncambiar=true;
        }
    }

    if( condicioncambiar==false){
        alert("El codigo que ingresaste no esta registrado");
    }
}

