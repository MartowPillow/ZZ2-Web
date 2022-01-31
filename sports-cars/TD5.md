# TD5 - Passer les données en propriétés des composants

## Introduction

Comme tous les autres frameworks javascript, React utilise  les propriétés (_props_) des éléments HTML pour transmettre les données aux composants :

`<Model name="toto" id="123" />` les _props_ sont récupérées comme ceci :

```
function Model(props) {
    return <div title={props.id}>{props.name}</div>; // affiche <div title="123">toto</div>
}
```

Cependant React recommande d'utiliser le _destructuring assignment_ pour récupérer les _props_, voir cet [article](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition#D%C3%A9composer_un_objet)

En voici un exemple :

```
function Model({name, id}) {
    return <div title={id}>{name}</div>;
}
```

LE code est plus concis et on voit directement quelles sont les propriétés attendues.

## Exercice

1. Dans `App.js` 

Passez le nom de chaque modèle de `data`  ('MUSTANG', 'R8', 'RS4') en propriété du composant `<Model />`.

2. Récupérez le nom dans `Model.js` et injectez-le dans le template JSX.

3. Passez le nom de chaque marque ('FORD', 'AUDI') en propriété du composant `<Model />`.

Pour cela vous devez transformer l'objet _model_ en lui rajoutant la propriété _brandName_ (utilisez la fonction `map`).

Récupérez _brandName_ dans `Model.js` et injectez-le dans le template JSX.

4. Passez le tableau _cars_ en propriété du composant `<Model />`.

Récupérez le tableau dans `Model.js` 

- utilisez l'image de la première voiture pour la carte du modèle
- injectez le tableau en propriété de _Car_ et utilisez ces données dans le template JSX

> Vous devriez voir apparaître des voitures différentes dans toutes les cartes, avec les bonnes données comme ceci :

 ![](TD5.png)

