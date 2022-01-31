# TD4 - Templates JSX dynamiques

## Les variables dans les templates JSX

### Introduction

Pour commencer à rendre nos templates JSX dynamiques, on va y ajouter des variables.
Avec JSX, dès qu'on utilise des variables, il faut les mettres entre accolades.

Exemple d'une variable texte simple : 

```
const foo = 'bar';
return (
  <div>{foo}</div>   ===> devient <div>bar</div>
);
```

Exemple d'une variable utilisée en propriété : 

```
const foo = 'bar';
return (
  <div className={foo}></div>   ===> devient <div class="bar"></div>
);
```

Exemple d'une variable utilisée dans la propriété style : 

```
const foo = { height: '10px' };
return (
  <div style={foo}></div>   ===> devient <div style="height: 10px"></div>
);
```

Exemple d'une variable contenant un élément JSX : 

```
const foo = <div>bar</div>;
return (
  <article>{foo}</article>   ===> devient <article><div>bar</div></article>
);
```

Exemple d'une variable contenant un tableau d'éléments JSX : 

```
const foo = [
  <div>bar</div>,
  <div>bar2</div>
];
return (
  <article>{foo}</article>   ===> devient <article><div>bar</div><div>bar2</div></article>
);
```

### Exercice

1. Dans notre application, vous devez utiliser des variables pour calculer la longueur des barres _power_, _weight_ et _ratio_ en fonction des données suivantes.

Les constantes qui représentent une longueur (_width_) de 100% :

```
const POWER_MAX = 1000;  // power max = 1000 hp
const WEIGHT_MAX = 2500; // weight max = 2500 kg
const RATIO_MAX = 1;     // ratio max = 1kg/hp
```

Les données de la voiture d'exemple :
- power  = 547 hp
- weight = 1789 kg
- ratio  = weight / power

2. Factorisez le code de calcul du style de ces variables en utilisant une arrow-function : `(val1, val2) => result` 


## Boucler sur les données

### Introduction

Lorsque l'on a un tableau javascript, on veut pouvoir le parcourir et générer un élément HTML pour chaque élément. 

Exemple en programmation procédurale : 

```
const list = ['banane', 'pomme', 'poire'];

const htmlElements = [];

for (const element of list) {
  htmlElements.push(<div>{element}</div>);
}

return (
  <article>{htmlElements}</article>
);
```

Exemple en programmation fonctionnelle : 

```
const htmlElements = list.map(element => {
  return <div>{element}</div>
});
```

> La fonction `map` transforme un tableau d'éléments X en tableau d'éléments Y

Pour simplifier, si on a une seule instruction dans le corps de la fonction lambda, on peut mettre entre parenthèse l'élément retourné :

```
const htmlElements = list.map(element => (<div>{element}</div>));
```

### Exercice

1. Supprimez les 6 cartes `<Model />` que nous avons dupliquées 

2. Recopiez `TD4.js` dans `src` et importez le depuis `App.js` :

```
import data from './TD4.js';
```

3. `data` contient :
- un tableau de marque de voitures (_brand_). Chaque marque contient :
  - un tableau de modèles (_models_), chaque _model_ contient : 
    - un tableau de voitures (_cars_).
    
Nous voulons d'abord transformer data en un tableau de modèles, toute marques confondues, c'est-à-dire supprimer le niveau _brand_. `data` contiendra :
- un tableau de modèles (_models_), chaque _model_ contient : 
  - un tableau de voitures (_cars_).

Utilisez les fonctions `map` et `flatMap` (cf. [doc](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/flatMap)) sur la variable `data` pour générer ce tableau et utilisez `console.log` pour vérifier le résultat. 

4. Transformez chaque modèle du tableau en `<Model />` les afficher dans le corps de la page.

Pour l'instant on n'exploitera pas les données contenus dans chaque élément du tableau (laissez les données de la FORD MUSTANG en dur).

> Vous devriez obtenir 3 cartes identiques FORD MUSTANG.


5. Si vous observez la console javascript, vous verrez que React vous averti de l'absence de l'attribut _key_ : 

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
    at Model
    at App
```

Cette propriété doit être unique pour chaque élément (comme la propriété _id_). Elle est utilisée par React pour savoir quels éléments de l'arbre HTML (le _DOM_) doivent être regénérés. 

Renseignez cette propriété dans la balise `<Model />` à partir de l'id présent dans les _data_.

> L'erreur doit avoir disparu de la console javascript.

