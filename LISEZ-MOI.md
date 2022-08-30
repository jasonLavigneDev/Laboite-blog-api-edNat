# laboite-blog-backend

Cette application est générée grâce à [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html)
avec l'[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Installation des dépendences

Par défaut, les dépendances étaient installées lorsque cette application était générée.
Chaque fois que des dépendances dans le fichier `package.json` sont modifiées, exécuter la commande suivante :

```sh
npm install
```

Installer uniquement les dépendances résolues dans `package-lock.json`:

```sh
npm ci
```

## Lancer l'application

```sh
npm start
```

Vous pouvez également exécuter `node .` pour sauter l’étape de compilation.

Ouvrez http://127.0.0.1:3000 dans votre navigateur.

## Reconstruire le projet

Pour construire progressivement le projet :

```
npm run build
```

Pour forcer une construction complète en nettoyant les artefacts mis en cache :

```
npm run clean
npm run build
```

## Correction des problèmes de style de code et de formatage

Si les options « eslint » et « prettier » sont activées pour ce projet, vous pouvez utiliser
les commandes suivantes pour vérifier le style de code et les problèmes de formatage.

```sh
npm run lint
```

Pour résoudre automatiquement ces problèmes :

```sh
npm run lint:fix
```

## Autres commandes utiles

- `npm run migrate`: Migration des schémas de base de données pour les modèles
- `npm run openapi-spec`: Générer les spécifications OpenAPI dans un fichier
- `npm run docker:build`: Créer une image Docker pour cette application
- `npm run docker:run`: Exécuter cette application dans un conteneur Docker

## Tests

```sh
npm test
```

## Prochaine étape

Veuillez consulter [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) pour
comprendre comment vous pouvez continuer à ajouter des fonctionnalités à cette application.

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)
