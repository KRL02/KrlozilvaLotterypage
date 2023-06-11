

    
    function toggleSeleccion(numero) {

        const btn = document.getElementById("btn" + numero);
        const label = document.getElementById("numerosSeleccionados");
        const label2 = document.getElementById("totalSeleccionados");
        const costo = 2000 
        var total = 0
        var suma = 0
        var numeroswhatsapp = [];


        btn.classList.toggle("bg-green-500");

        // Obtener los botones seleccionados
        const botonesSeleccionados = document.getElementsByClassName("bg-green-500");
        let numerosSeleccionados = "";

        // Construir la lista de números seleccionados
        for (let i = 0; i < botonesSeleccionados.length; i++) {
          numerosSeleccionados += botonesSeleccionados[i].textContent + ",";
          //total de numeros 
          total++
        }

        //Sumar Total de Numeros
        totalSeleccionados=costo*total
        
        // Actualizar el contenido numerosSeleccionados
        label.textContent = total + " Numeros Seleccionados: "+ numerosSeleccionados;
 
        // Actualizar el contenido del totalSelecionado 
        label2.textContent = "Total: $" + totalSeleccionados + " mxn";
        
        }


        
         document.addEventListener("DOMContentLoaded",function() {
         document.getElementById("formulario").addEventListener("submit", function(event) {
         event.preventDefault(); // Evitar que el formulario se envíe automáticamente
 
         // Obtener los valores de los campos
         const nombre = document.getElementById("nombre").value;
         const apellidos = document.getElementById("apellidos").value;
         const whatsapp = document.getElementById("whatsapp").value;
         const estado = document.getElementById("estado").value;
 
         // Construir el mensaje para enviar por WhatsApp
         const mensaje = `Nombre: ${nombre}%20` +
                         `Apellidos: ${apellidos}%20` +
                         `Whatsapp: ${whatsapp}%20` +
                         `Estado: ${estado}`;


         // Enviar mensaje por WhatsApp
         const phoneNumber = "+523531202623"; //numero de telefono como cadena
         const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(mensaje)}`;
         window.open(url, "_blank");
         });


     });


       