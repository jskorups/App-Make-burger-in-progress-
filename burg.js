/**
 * Created by Kuba on 12/7/2016.
 */









var zaznaczone = [];
var inputs = document.getElementsByTagName('input');

for (var i=0; i< inputs.length; i++)
{
    inputs[i].onfocus = function() {
        zaznaczone.push(this.id);
        console.log(zaznaczone);
        console.log(zaznaczone[0].name);
    };
}

function Food (name, Cal, price, Fat, Carb, Protein, Sugar) {
    this.name = name;
    this.Cal = Cal;
    this.price = price;
    this.Fat = Fat;
    this.Carb = Carb;
    this.Protein = Protein;
    this.Sugar = Sugar;
}



//bulka
var bulkaPszenna = new Food("Bulka"+" "+"Pszenna",120,3.50,36,80,45,78);
var bulkaSezamowa = new Food("Bulka"+" "+"Sezamowa",140,2.90,34,75,33,68);
var bulkaBricot = new Food("Bulka"+" "+"bricot",136,2.89,39,67,41,75);
var bulkaMansur = new Food("Bulka"+" "+"Mansur",157,3.20,42,56,36,78);
var bulkazMakiem = new Food("Bulka"+" "+"z"+" "+"makiem",111,2.76,55,49,41,88);

//mieso
var Wolowina = new Food("Wolowina",450,8.50,115,88,55,67);
var Wieprzowina = new Food("Wieprzowina",200,11.50,135,67,61,59);
var Kurczak = new Food("Kurczak",210,12.60,135,67,61,59);
var Baranina = new Food("Baranina",270,11.99,140,76,55,41);
var Bekon = new Food("Bekon",240,13.40,150,88,42,56);


//Ser
var SerPojedynczaPorcja = new Food("Ser"+" "+"pojedyncza"+" "+"porcja",60,1.60,80,78,33,14);
var SerPodwojnaPorcja = new Food("Ser"+" "+"podwojna"+" "+"porcja",130,3.00,80,78,33,14);
var SerCheedar = new Food("Ser"+" "+"cheedar",150,3.30,80,78,33,14);
var SerBrie = new Food("Ser"+" "+"brie",170,4.20,80,78,33,14);
var SerPikanty = new Food("Ser"+" "+"pikanty",143,3.50,80,78,33,14);

//Dodatki
var Ogorek = new Food("Ogórek",60,3.50,4,11,0.4,3);
var Pomidor = new Food("Pomidor",60,3.50,4,11,0.4,3);
var Cebula = new Food("Cebula",60,3.50,4,11,0.4,3);
var Salata = new Food("Salata",60,3.50,4,11,0.4,3);
var Burak = new Food("Burak",60,3.50,4,11,0.4,3);
var Oliwki = new Food("Oliwiki",60,3.50,4,11,0.4,3);
var Kapary = new Food("Kapary",60,3.50,4,11,0.4,3);

//Sos

var Pomidorowy = new Food("Pomidorowy",60,3.50,4,11,0.4,3);
var Czosnkowy = new Food("Czosnkowy",55, 2.90,3,9,7,11);
var Musztardowy = new Food("Musztardowy", 44,2.99,13,9,11,13);
var BBQ = new Food("BBQ", 44,2.20,13,9,11,13);
var Ostry = new Food("Ostry", 29,1.99,13,9,11,13);






/*
    var chosen = [];

    var czekboxy = document.getElementsByTagName("input");
    for (var i=0; i< czekboxy.length; i++){
        czekboxy[i].onfocus = function(){

            for (var i = 0; i < czekboxy.length; i++) {
                if (czekboxy[i].checked == true) {

                    chosen.push(czekboxy[i].id);
                    console.log(chosen);
                }

        }}};

/*
    czekboxy.onclick = function () {

        for (var i = 0; i < czekboxy.length; i++) {
            if (czekboxy[i].checked == true) {

                chosen.push(czekboxy[i].id);
                console.log(chosen);
            }
        }
    };
*/



/*
var czekboxy = document.getElementsByClassName("food");

for (var i=0, len=czekboxy.length; i<len; i++) {
    if ( czekboxy[i].type === 'checkbox' ) {
        czekboxy[i].onclick = function Food ()
        {
            var x = this.id;
            console.log(x);
        }
    }}

*/

//utowrzenie zmiennych wyswitlanych w podsumowaniu

//var totalPrice,totalCalories,totalFat,totalCarb,totalProtein,totalSugar;

//utworzenie tablicy z inputami



//utworzenie tablicy z inputami zaznaczonymi;

//var zaznaczone =[];

//wyszukiwanie zaznaczonych inputów












// var summary = document.getElementById("podsumowanie");
//summary.textContent =
