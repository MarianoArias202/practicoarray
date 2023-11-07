/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
 luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

  let ciudades = [];
  let i = 0;

    while(true)
    { 
        
        let almacenarciudad = prompt("Ingrese el nombre de una ciudad ");

        if(almacenarciudad == null)
        {
            break
        }
        else
        {
            ciudades[i] = almacenarciudad;
            console.log(ciudades)
            i++
        }
    }


    document.write(`
    <section class="container">
        <article class="row ">
          <div class="col-12 ">
          <h2>el arreglo de ciudades tiene ${ciudades.length} elementos</h2>
          <ul class="list-group ">
            <li class="list-group-item">elemento 1er posicion: ${ciudades[0]} </li>
            <li class="list-group-item">elemento 3er posicion: ${ciudades[2]}</li>
            
            <li class="list-group-item">elemento ultima posicion ${ciudades[ciudades.length - 1]}  </li>`)

            ciudades.push('paris');
           document.write(`<br><li class="list-group-item">elemento ultima posicion ${ciudades[ciudades.length - 1]} </li>
        
           </ul>
           </div>
       </article>
       </section>`)
            




         document.write(`
         <section class="container">
        <article class="row ">
          <div class="col-12 ">
          
          <h2 class="">Arreglo de ciudades </h2>`)

        document.write(`<ul class="list-group">`)
    
       for( let x=0; x<ciudades.length; x++)
        {
        document.write(`<li class="list-group-item">${ciudades[x]}</li>`)
        }
        document.write(`</ul> </div>
        </article>
        </section>`)