# TD2 - ReactJS

## Installation de NodeJS

_NodeJS_ est à l'origine un serveur d'application Javascript pour le développement backend. Il a été utilisé par tous les frameworks fronten pour gérer les dépendances (grâce à son outil _npm_) et exécuter les applications en local.

Si vous n'avez pas NodeJS sur votre PC :
Télécharger et installer la version LTS https://nodejs.org/en/download/

Si vous avez déjà installé NodeJS :
Vérifier la version avec la commande `node -v` : la version doit être 12 ou plus. Si ce n'est pas le cas réinstaller une version plus récente avec le lien ci-dessus.

## Initialisation du projet ReactJS

On va initialiser une application from scratch dans un nouveau répertoire.
Se positionner dans le répertoire parent du projet actuel et lancer :

`npx create-react-app sportscars`
`cd sportscars` 
`npm run start`

Vous devriez voir s'afficher :

```
You can now view sportscars in the browser.      

  Local:            http://localhost:3000   
```

Ouvrir la page indiquée qui devrait afficher l’application d’exemple doit s'afficher dans le navigateur : 

Pour avoir un peu plus de détail sur ce qui vient d'être fait : 
- on a lancé la commande _npx_, inclue dans l'installation de _NodeJS_, qui signifie installe & éxecute
- _npx_ a lancé _create-react-app_ qui est le générateur de code ReactJS
- cela a créé le projet _sportscars_
- _npm run start_ a démarré un server NodeJS pour publier l'application _sportscars_

## Migration des fichiers statiques

L'application d’exemple contient les répertoires suivants:
- _src_ : tout ce qui est javascript ou importé dans un fichier javascript
-  _public_ : les ressources statiques, c'est à dire tout le reste (html, css importé par le html, images)

Il faut à présent copier les fichiers statiques de la maquette dans les répertoires _public_ et _src_ : 

- public
    - favicon.png
- src
    - hangar.jpg
    - index.css
    - theme.css

## Migration de index.html vers App.js

Dans `App.js`, on voit le composant principal de l'application qui est une simple fonction qui renvoit du code HTML.
Avec ReactJS, on peut mettre du HTML dans du JS, entre parenthèses : cela s'appelle la syntaxe **JSX**.

```
    import logo from './logo.svg'; // On peut importer des images 
    import './App.css';            // et du CSS s'ils sont stockées dans src

    function App() {

        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />  // pour utiliser les variables, on les met entre {}
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            </div>
        );
    }

    export default App;
```

Dans `App.js`, remplacer le JSX renvoyé par le code HTML qui se trouve à l'intérieur de la balise `<body>` de la maquette du TD1 :

```
    import HeaderComponent from './components/header/header';
    ...
    // fonctions index.js
    ...
    function App() {
        return (<contenu de body>);
    }
```

L'application ne devrait pas s'afficher normalement, nous allons traiter les erreurs au chapitre suivant.

## Migration des styles

Il faut également remplacer `class="..."` par `className="..."` (spécificité ReactJS) et `style="..."` par `style={{...}}"` (cf. [article](https://www.w3schools.com/react/react_css.asp))

Normalement vous devez constater que l'application s’affiche bien dans la page et qu'il n'y a pas d'erreur javascript.

## Finitions

Pour aller plus loin, modifier le _favicon_ et le titre de l'application dans le fichier `index.html` généré.

