

    
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
        label.textContent =total + " Numeros Seleccionados: " + numerosSeleccionados;
 
        // Actualizar el contenido del totalSelecionado 
        label2.textContent = "Total: $" + totalSeleccionados + " mxn";
        }



         document.addEventListener("DOMContentLoaded",function() {
         document.getElementById("formulario").addEventListener("submit", function(event) {
         event.preventDefault(); // Evitar que el formulario se envíe automáticamente
 
         // Obtener los valores de los campos
         var nombre = document.getElementById("nombre").value;
         var apellidos = document.getElementById("apellidos").value;
         var whatsapp = document.getElementById("whatsapp").value;
         var estado = document.getElementById("estado").value;
 
         // Construir el mensaje para enviar por WhatsApp
         var mensaje = "¡Hola! Mi nombre es " + nombre + " " + apellidos +" Soy del " + estado + ". Favor de Anotarme estos Numeros " + numeroswhatsapp +" Para la rifa del Biletazo!!" + total;
 
         // Enviar mensaje por WhatsApp
         var link = "https://api.whatsapp.com/send?phone=" + 523531202623 + "&text=" + encodeURIComponent(mensaje);
         window.open(link, "_blank");
         });


     });


       