  //    en el cotizador el costo del seguro depende del presio del auto es decir si es menor a 135000, el precio sera obtenido de la tabla dependiendo de la tabla de precios 
  //   el porcentaje podra se seleccionado hasta por un monto maximo de 12% a criterio del vendedor ;<----
  //    si el precio es mayor a 135000 el precio del seguro sera igual al 12% del valor total del auto
  //   la empresa ofrece un descuento por flotilla es decir si el cliente compra mas de 3 seguros es una exivicion se hara un 5% de descuento 
  const costoPorFlotilla = [];    
  let tipoDeCliente = prompt("bienvenido si desea comprar un solo seguro presione 1 si no presione 2 ");
  class PrecioSeguroAut {
      constructor(precio, interes, año) {
          this.precio = precio
          this.interes = interes
          this.año = año
      } 
  // funcion para llamar el onclick 
    //    clienteNuevo() {
    //  // ingresamos los datos
    //    var precio =  parseInt(prompt("ingrese precio del auto"));
    //    var interes = parseInt(prompt("ingrese interes de la tabla"));
    //    var año = parseInt(prompt("ingrese año de fabricacion"))
    //    // Lo añadimos a nuestro arreglo
    //    cliente = new PrecioSeguroAut(precio, interes, año);
    //    flotilla.push(cliente);
    //     }
      //  esta funcion retornara el calor del seguro a un costo neto 
      cotizador = () => { 
        if (this.precio <= 135000){
        let  porcentaje = this.interes * .01;
          let costoSeg =  this.precio * porcentaje;
          return costoSeg
          } else {
            let porcentaje = (12 * .01) * this.precio;
            return porcentaje
          }
        } 
      
      
// esta funcion retornara el descuento otorgado por parte del gobierno =o
      promoAutoViejo = (porcentaje) => {
      if(this.año <= 2005 && this.año >= 1999){
          
        return porcentaje - 900; 
      } else if (this.año <= 1998 && this.año >= 1993) {
          
          return porcentaje - 1000;
      } else if ( this.año <= 1998 && this.año >= 1993){
          
          return porcentaje - 1000; 
      } else if (this.año <= 1992 && this.año >= 1980){
          
          return porcentaje - 1300;
      } else {
          
          return porcentaje
      }
      
  }    
  }

    // cundo un cliente solo requiere un seguro en total 
    if (tipoDeCliente == 1){
        costoPorFlotilla.push(new PrecioSeguroAut(
          prompt("ingrese precio del auto"),
           parseInt(prompt("ingrese interes de la tabla")),
            parseInt(prompt("ingrese año de fabricacion"))));
  } else {// en esta seccion se establecio que el maximo sea a 4 vehiculos ya que en si se requeriria un evento onclick<---
     while (costoPorFlotilla.length < 2) {
      costoPorFlotilla.push(new PrecioSeguroAut(
        prompt("ingrese precio del auto"),
         parseInt(prompt("ingrese interes de la tabla")),
          parseInt(prompt("ingrese año de fabricacion"))))};}
    
// recorrer arrays -- (ejecutar metodo)

costoPorFlotilla.forEach( (PrecioSeguroAut) => {
  document.write(` ${PrecioSeguroAut.cotizador()} <br>`)
  document.write(` ${PrecioSeguroAut.promoAutoViejo(PrecioSeguroAut.cotizador())} <br>`)
})