

# TD7 - Promesses et API Rest

Intégrer la maquette à l'API REST fournie grâce aux promesses javascript (_promise_).

## Introduction

Une promesse ([doc](https://devhints.io/es6#promises)) est un traitement **asynchrone**. 

On a déjà vu des fonctions asynchrones comme `setTimeout`.
Avec `setTimeout` on passe une fonction _callback_ : 

```
setTimeout(() => console.log('xxx'), 1000); // le callback affichera xxx après yyy
console.log('yyy');
```  

Avec les promesses, on passe une fonction dans le `then`, ce qui revient au même :

```
new Promise(resolve => resolve()).then(() => console.log('xxx'));
console.log('yyy');
```  

Dans ce TD, nous n'allons pas créer nos propres promesses mais nous allons utiliser celles de la fonction `fetch` ([doc](https://devhints.io/js-fetch)), qui permet de faire un appel d'API REST :

```
fetch('https://reqres.in/api/users/2').then(response => console.log(response));
```

L'avantage de then est que l'on peut enchaîner les appels de fonctions qui retournent une _promise_. Par exemple, on peut appeler `json()` qui retourne une _promise_ avec l'objet JSON de la réponse de l'API :

```
fetch('https://reqres.in/api/users/2').then(response => response.json()).then(json => console.log(json));
```  

## Exercices

### Initialisation

Dans `App.js`, appeler l'url de base de notre API en utilisant _useEffect_ et _useState_.

URL : http://cabe0232.odns.fr/sportscars-api

Remplacer la variable `data` par le résultat de cet appel.

> Vous devriez voir apparaître un nombre variable de cartes à chaque appel.

### Appel de l'API top 10

Remplacer les `console.log` des clics sur le menu top 10 pour appeler à la place l'API correspondante. 

URL : 
http://cabe0232.odns.fr/sportscars-api/top/weight
http://cabe0232.odns.fr/sportscars-api/top/power
http://cabe0232.odns.fr/sportscars-api/top/ratio

Utilisez `setState` pour rafraîchir les voitures affichées. La fonction `useEffect` est inutile ici car le changement est déclenché uniquement au clic (pas de boucle possible). 

### Appel de l'API recherche

Remplacer le `console.log` de la touche entrée pour appeler à la place l'API de recherche.

URL : 
http://cabe0232.odns.fr/sportscars-api/search/<texte saisi>

Utilisez `setState` pour rafraîchir les voitures affichées.

