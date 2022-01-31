# TD6 - Etat et évènements des composants

## L'Etat (_State_)

### Introduction

L'état d'une application (_state_) est l'ensemble des données de la "session" utilisateur, et qui sont conservées tout au long de la navigation.
Dans une application front, ce sont les variables javascript qui sont utilisées dans les composants, exceptées : 
- celles qui ne sont utiles qu'à des calculs intermédiaires comme le _ratio_ du TD précédent
- celles qui contiennent des éléments JSX

Avec React, on doit créer ces variables grâce à la fonction _useState_. 

> Toutes les fonctions commençant par _use_ sont appelées des **_Hooks_**

Exemple d'utilisation avec une variable _foo_ :

```
const [foo, setFoo] = useState(null);
console.log(foo); // foo est initialisée à null
setFoo('bar');    // fonction qui permet de mettre à jour foo
```

Ces variables sont spéciales car chaque appelle à `setFoo` déclenche la mise à jour de la page.

### Exercice (en intéraction avec le prof)

Importer les fonctions _useState_ et _useEffect_ dans le composant _App_ :

```
import { useState, useEffect } from 'react';
```

> _useEffect_ sera utilisée dans l'exercice suivant.

Créer un _state_ `models` initalisé avec un tableau vide `[]` :

```
let [models, setModels] = useState([]);
```

Faire un `console.log()` de `models`.

> Vous devriez voir [] dans la console devtools

Utilisez la variable `models` à la place de `data` (variable contenant les données importées du TD4) dans le template JSX.

> Les cartes des voitures devraient disparaître étant donné que le tableau `models` est vide.

Utilisez `setTimeout` pour éxecuter `models = data` au bout de 2 secondes :

> Vous devriez voir toujours `[]` dans la console et aucune carte affichée, pourquoi ?

Executez `setModels(data)` dans `setTimeout`.

> Vous devriez voir les cartes à présent. Dans la console, il y a plusieurs logs, pourquoi ?

Supprimez le `setTimeout` et éxecutez `setModels(data)` dans le corps de la fonction

> Vous devriez voir une message d'erreur, pourquoi ?


## Boucles et _useEffect_

### Introduction

Prenons l'exemple d'un composant _Bar_ :

```
function Bar() {

  const [foo, setFoo] = useState(null);
  setFoo('bar');    // boucle infinie!!!

  return (
    <button>{ foo }</button>
  );
}
```

Les appels à la fonction `setFoo` doit être faite uniquement dans un _callback_ (par ex. évènement utilisateur) ou avec fonction _useEffect_.

Exemple d'un évènement utilisateur :

```
function Bar() {
  
  const [foo, setFoo] = useState(null);
  
  return (
    <button onClick={() => setFoo('bar)}>{ foo }</div>
  );
}
```

Exemple avec la fonction _useEffect_ :

```
function Bar() {
  
  const [foo, setFoo] = useState(null);
  useEffect(() => setFoo('bar'), []);

  return (
    <button>{ foo }</div>
  );
}
```

### Exercice

Utiliser _useEffect_ mettre à jour le _state_ avec les données de _data_ au bout de 3 secondes.

> Vous devriez voir les cartes instantanément

## Evènements utilisateur

On entend par évènement utilisateur tout ce qui est fait avec la souris, le clavier, l'écran tactile, la voix, l'appareil photo, etc.
Avec React, il faut utiliser l'attribut `onXXX` correspondant à l'évènement recherché, et lui passer la fonction _callback_ à exécuter entre accolades :
Par exemple :
`<button onClick={data => console.log(data)} />` 

**Attention à la majuscule :** en javascript pur, l'évènement s'appelle `onclick`, React les surcharge avec `onClick`

### Exercice menu Top 10

1. Lorsque l'on clique sur un menu _top 10_, faire un `console.log` du nom du menu cliqué dans le composant _Header_.

2. Déplacer ensuite ce `console.log` dans le composant parent _App_

### Exercice champs de recherche

1. Ajouter un _state_ au composant _App_ pour y stocker la saisie du champs de recherche.
A chaque lettre tapée (évènement `onChange`), transmettre l'évènement au composant parent et mettre à jour le state. Faire un `console.log` de ce state et observez qu'il est bien mis à jour.

2. Pour récupérer le terme recherché complet (et non lettre par lettre), une technique est d'attendre une seconde que l'utilisateur arrête de taper le texte, avant de lancer l'évènement.
Dans le composant _Header_, utiliser une fonction qui implémente le pseudo-algorithme suivant :

```
fonction(texte, callback)
SI texte est différent du texte précédent
ALORS
    Interrompre le précédent timeout
    Créer un nouveau timeout qui appelle callback(texte) au bout d'une seconde
    Sauvegarder le texte et le timeout
FIN SI
```

La sauvegarde est faite grâce à des nouveaux _state_ dans _Header_.

3. L'évènement `onChange` de l'`input` appelle cette fonction, le callback étant la fonction passée par le composant _App_.

> Vous devriez voir dans la console uniquement les mots saisis lorsqu'on arrête de taper pendant une seconde

4. Supprimez les `console.log` qui risquent de ralentir l'application dans les TD suivants.

