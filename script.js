const tab = [
    { nom: "Luke Skywalker", espece: "Humain", affiliation: "Jedi" }, //c'est la cellule n°0, un tableau commence toujours par zero
    { nom: "Darth Vader", espece: "Humain", affiliation: "Sith" },
    { nom: "Yoda", espece: "Yoda's species", affiliation: "Jedi" },
    { nom: "Obi-Wan Kenobi", espece: "Humain", affiliation: "Jedi" }
]; // c'est un tableau d'objet, un tableau contenant des objet


//--- MENUE ---

function init() {
    
      let choix = prompt('MENUE : \n1-multiple\n2-somme\n3-voyelle\n4-count\n\nEntrez votre choix : ');

        switch (choix) {
            case "1":
                filtre(tab);
                break;

            case "2":
                recherchePerso(tab);
                break;

            case "3":
                totalPerso(tab);
                break;

            case "4":
                verifPerso(tab, "Yoda");
                break;

            default:
                alert('ce choix est inconnue veuillez faire un choix valide !');


        }
    }


init();







//       ---FILTRE PAR AFFLILIATION  ---
function filtre(listeF) {//on met un parametre qui va servire d'emprunt le ma variable tab
    //initialiser notre panier vide
    //let panier =0; ici on a mis zer alors qu'on veut filtrer la  proprite d'un tableau donc on doit faire 
    // un panier tableau pour y stocker les proprietes.
    let panier = [];

    //donc faire ceci 
    for (let i = 0; i < listeF.length; i++) {
        if (listeF[i].affiliation === 'Jedi' || listeF[i].affiliation === 'Sith') {//la on lui dit si dans mon tableau tu trouve a un certain index
            // une valeur qui est = a jedi ou sith tu me la met dans mon panier 
            panier.push(listeF[i].affiliation);//faut pas oublier de mettre affiliation ici aussi, 
            // il va comprendre qu'il faut mettre tout le tableau dans le panier
        }

    }
    return panier;
}

let result = filtre(tab);
alert(result);


//       ---TROUVER UN PERSO ---
let resultR;
function recherchePerso(listeF) {
    let monPerso = prompt('tapez le nom du perso que vous voulez : ');
    for (let i = 0; i < listeF.length; i++) //j'avais mis != sauf que j'ai fini par avoir des boucles infinie
        if (monPerso === listeF[i].nom) {
            //  ----- CE QUE J4AVAIS FAIT ET QUI EST CORRECTE---
            // resultR = listeF[i].nom + " " + listeF[i].espece +" " + listeF[i].affiliation;  //resultR++ signifie qu'on veut rajouter des nombre, sauf que la on veut 
            //recup un nom et trouver tout un perso grace au nom//  .push(listeF[i].nom);

            // --- proposition formateur ---
            resultR = `${listeF[i].nom} son espèce est ${listeF[i].espece} ${listeF[i].affiliation}`
        }
    return resultR;
}


let result2 = recherchePerso(tab);
//console.log(result2);
alert("le nom du perso est : " + result2);


//       ---TOTAL PERSO---

function totalPerso(listeF) {//on met toujours notre petit tableau en parametre
    let cmp = 0;
    for (let i = 0; i < listeF.length; i++) {
        cmp++
    }
    return cmp;
// }
 let nbPerso = totalPerso(tab);
 alert('le nombre total de perso est de : ' + totalPerso(tab));

}
//     --- verifier un perso ---
// let resultV = false;//on met le result en false parceque c'est ce qu'on veut par defaut. tant que ce n'est pas vrai ca sera faux. 
// function verifPerso(listeF) {
//     let verif = prompt('tapez le nom du perso que vous voulez : ');
//     for (let i = 0; i < listeF.length; i++) {
//         if (verif === listeF[i].nom) {
//             resultV = true  //resultR++ signifie qu'on veut rajouter des nombre, 
//             //sauf que la on veut verifier si le nom existe bien dans le tableau, 
//             //donc si le nom est bien la le resultat nous enverra true

//         }

//     }

//     return resultV;
// }


// let result3 = verifPerso(tab);
// console.log(result3);



//      ---- autre façon de faire ----


//let resultV = false;//on met le result en false parceque c'est ce qu'on veut par defaut. tant que ce n'est pas vrai ca sera faux. 
function verifPerso(listeF, nomAchecher) {
    let resultV = false;
    // let verif = prompt('tapez le nom du perso que vous voulez : ');
    for (let i = 0; i < listeF.length; i++) {
        if (listeF[i].nom === nomAchecher) {
            resultV = true  //resultR++ signifie qu'on veut rajouter des nombre, 
            //sauf que la on veut verifier si le nom existe bien dans le tableau, 
            //donc si le nom est bien la le resultat nous enverra true
            return resultV;
        }

    }

    // return resultV;
}


let result3 = verifPerso(tab, "Yoda");
alert(result3);

