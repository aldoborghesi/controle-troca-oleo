export class Trocaroleo {
   public id: number;
  placa!:string;
  modelo!:string;
  km!:number;

  constructor(placa:string, modelo:string, km:number) {
    this.id = Math.round(Math.random() * 1000);
    this.placa = placa;
    this.modelo = modelo;
    this.km = km;
  }
}
