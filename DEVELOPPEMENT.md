# Guide du développeur

Nous utilisons Codium pour développer LoopBack et recommandons la même chose à notre
utilisateurs.

## Codium setup

Installer les extensions suivantes :

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Processus de développement

### Codium

1. Démarrez la tâche de compilation (Cmd+Shift+B) pour exécuter le compilateur TypeScript dans le
   fond, regarder et recompiler les fichiers que vous les changez. Compilation
   les erreurs seront affichées dans la fenêtre "PROBLEMS" du VSCode.

2. Exécutez "Run Rest Task" à partir de la palette de commandes (Cmd+Shift+P) pour relancer le
   test suite et lint le code pour les erreurs de programmation et de style.
   Les erreurs du lint seront affichées dans la fenêtre "PROBLÈMES" de VSCode.
   Les tests échoués sont imprimés à la sortie du terminal seulement.

### Autres éditeurs/IDEs

1. Ouvrez une nouvelle fenêtre/onglet de terminal et lancez le processus de construction continue via
   `npm run build:watch`. Il exécutera le compilateur TypeScript en mode watch,
   recompiler les fichiers à mesure que vous les modifiez.
   Toute erreur de compilation sera imprimée dans le terminal.

2. Dans la fenêtre/l’onglet de votre terminal principal, lancez `npm run test:dev` pour relancer le test
   et lint le code pour les erreurs de programmation et de style. Vous devriez exécuter
   cette commande manuellement chaque fois que vous avez de nouvelles modifications à tester.
   Les échecs de test et les erreurs de linter seront imprimées sur le terminal.
