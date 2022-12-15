export class Trocaroleo {
   public trocaid: number;
  placa!:string;
  modelo!:string;
  km!:number;

  constructor(placa:string, modelo:string, km:number) {
    this.trocaid = Math.round(Math.random() * 1000);
    this.placa = placa;
    this.modelo = modelo;
    this.km = km;
  }
}
