// declaration de variable

let nom:string="MAMPUNINA";
let Age:number=26;
let isMajeur:boolean=true;

let Nom:string;
let Age2:number;
let isMAjeur2:boolean;

let whatever:any;
whatever=1;
whatever="beni";
whatever=true;

// structure de données complexes

let ArrayS:string[]; 
let NativeAs:Array<string>;
let ArrayN:number[];
let ArrayA: any[];
let ArraySN:(number|string)[];
let ArrayB:boolean[];
const er:Array<string|boolean>=["beni",true];

// customiser la structure de données complexes

interface IGnumber extends Array<number>{  // l'heritage permet de reconnaitre les methodes de l'objet number
    [index:number]:number
}

const Cnumber:IGnumber=[1,2,5,8,0,9];

Cnumber.push(9);

interface IGstring extends Array<string>{
    [index:number]:string
}

let string:IGstring=["beni","divine","christ"];

// créer des types personnalisés

type Objet={
    readonly nomI:string;
    age:number;
    isMajeur?:boolean
}

let Agent:Array<Objet>;
let item:Objet;

item={
    nomI:'mampunina',
    age:35,
   }


//item.nomI="beni";

// enum
enum Dayweek{
    lundi,
    mardi,
    mercredi
}

// tuple
let tuple:[number,string];

// typage des fonctions

interface IF{
    (x:number,y:number):number
}

function sommes(x:number,y:number):number{
    return x+y;
}

const diff:IF=(x,y)=>{
    return x-y;
}

const log=(message:string):void=> console.log(message)

// interface

interface IContact{
    nom:string;
    email:string;
    message:string
}

const messages:Array<IContact>=[
    {
        nom:"beni",
        email:"beni@gmail.com",
        message:"bonjour chez vous"
    }
]

const SignFunction=(x:number,y:string):void=> console.log(`je retourne ${x} et ${y}`)

// interface pour definir une methode dans un objet literal

interface IFunction{
    SignFunction?:{(x:string,y:number):any};
}

const tabAssoc:IFunction={
    SignFunction:(x,y)=> console.log(`je retourne ${x} et ${y}`)
}

// interface pour definir un objet literal
interface IAnyKey{
    [index:string]:(number|string|any);
    SignFunction?:{(x:string,y:number):void};
    }

const object:IAnyKey[]=[{
    nom:"beni",
    age:45,
    friends:["beni",1],
    SignFunction:(x,y)=> console.log(`je retourne ${x} et ${y}`)
}]

//autre façon d'utiliser une interface
const messageItem=<IContact>{};

let ArrayMessage:IContact[];

// heritage et l'interface

interface IIdentite{
    nom:string;
    postnom:string;
    age:number;
}

interface IAdvancedIdentity extends IIdentite,IFunction{
    sexe:string;
    numeroTelephone:string;
    adresse:string;
}

// tout savoir sur le class en typescript

interface Icar{
    model:string;
    année?:number;
    serie:string;
    marque:string;
}

abstract class Car implements Icar{
    public model;
    public static année:number;
    public serie;
    public marque;
    protected country:string;
    private _couleur:string;


    constructor(model:string,année:number,serie:string,marque:string,country:string,couleur:string){
        Car.année=année;
        this.marque=marque;
        this.serie=serie;
        this.model=model;
        this.country=country;
        this._couleur=couleur;
    }

    get getContry():string{
        return this.country;
    }

    set setContry(country:string){
        this.country=country;
    }

}

// heritage d'une classe
class CarAsie extends Car{
    public siege:number;
    constructor(model:string,année:number,serie:string,marque:string,country:string,couleur:string,siege:number){
        super(model,année,serie,marque,country,couleur);
        this.siege=siege;
    }
}

// autre façon de créer une classe en Typescript
class Personne{
    constructor(public nom:string,public postnom:string){
        this.nom=nom;
        this.postnom=postnom;
    }
}

// instanciation d'une classe en utilsant le tuple
const car:[string,number,string,string,string,string,number]=["V8",2021,"ATF-1029","Toyota","japon","blue",5];
let car1= new CarAsie(...car);

// namespace

// Module
// Generics



//import {addition} from './math.module';
import * as MathFunctions from './math.module';

console.log(MathFunctions.addition(4,6))