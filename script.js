const tab = [
    { nom: "Luke Skywalker", espece: "Humain", affiliation: "Jedi" }, //c'est la cellule n°0, un tableau commence toujours par zero
    { nom: "Darth Vader", espece: "Humain", affiliation: "Sith" }, 
    { nom: "Yoda", espece: "Yoda's species", affiliation: "Jedi" }, 
    { nom: "Obi-Wan Kenobi", espece: "Humain", affiliation: "Jedi" } 
]; // c'est un tableau d'objet, un tableau contenant des objet

function filtre(listeF){//on met un parametre qui va servire d'emprunt le ma variable tab
    //initialiser notre panier vide
    //let panier =0; ici on a mis zer alors qu'on veut filtrer la  proprite d'un tableau donc on doit faire 
    // un panier tableau pour y stocker les proprietes.
    let panier =[];

    //donc faire ceci 
    for(let i=0;i< listeF.length; i++){
    if(listeF[i].affiliation === 'Jedi' || listeF[i].affiliation === 'Sith'){//la on lui dit si dans mon tableau tu trouve a un certain index
    // une valeur qui est = a jedi ou sith tu me la met dans mon panier 
        panier.push(listeF[i].affiliation);//faut pas oublier de mettre affiliation ici aussi, 
        // il va comprendre qu'il faut mettre tout le tableau dans le panier
    }

    }
    return panier;
    }

    let result = filtre(tab);
    filtre(tab);

    console.log(result);

    let monPerso;
    let resultR;
    function recherchePerso (listeF){
        monPerso = prompt('tapez le nom du perso que vous voulez : ')
    }
            
    
    
    for(let i=0;i< listeF.length; i++){
             
                if(monPerso === listeF[i].nom){
                     resultR = listeF[i]
                }}
       





    


// ------------- ce que j'ai tenté de faire------//

    //pour recup nos element on va aller sur une boucle for....reste a voir comment s'y prendre ugh
   // for(let i=0;i< listeF.length; i++){//donc ici ca sera listeF etant donner qu'on veut les donner du tableau 
    // on va utiliser la variable d'emprunt qui est listeF
    
        //et on verifie sidans le tableau il y'a ce que je veux, je le recupere. -- 
        // update au lieu de faire ca je peut simplement reunir mes condition en une suel ligne 
//         if(tab[0].affiliation === "Jedi"){
//             panier.push(liste[i]);
//         }

//          if(tab[1].affiliation === "Sith"){
//             panier.push(liste[3]);
//         }

//          if(tab[2].affiliation === "Jedi"){
//             panier.push(liste[3]);
//         }

//          if(tab[3].affiliation === "Jedi"){
//             panier.push(liste[3]);
//         }
    
//     }
  
// 





//console.log(tab[0].affiliation);
