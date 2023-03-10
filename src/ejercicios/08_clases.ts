/*
    ===== Código de TpyeScript =====
*/

class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    //alterEgo: string;
    //edad: number;
    //nombreReal: number;

    /*
    constructor(alterEgo:string){
        this.alterEgo=alterEgo;
    }
    */

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal,'New York, USA');
    }

}

const ironman= new Heroe('Ironman',45,'Tony');

console.log(ironman);