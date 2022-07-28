# Exercice

## Setup

```
yarn
bundle install
cd ios && bundle exec pod install && cd ..
yarn ios
```

## Présentation

Cette application contient 2 input :

- `Value1`
- `Value2`

Le bouton `multiply` affiche le résultat de la multiplication de `Value1` par `Value2`.

Le bouton `subtract` affiche le résultat de la soustraction de `Value1` par `Value2`.

## Problème

La multiplication de marche pas :

```
2 * 3 = 7 ❌
4 * 3 = 13 ❌
etc...
```

https://user-images.githubusercontent.com/9041221/184140181-041bb194-3c4d-4a40-9e3f-d9c3609e860a.mp4

## Question

Pourquoi la multiplication ne marche-t-elle pas ?

## Objectif

Trouver la source du problème en un **minimum d'itération** possible.

1 itération = une tentative de debug.

**Par exemple** si je met un console.log et que j'exécute la multiplication cela compte pour 1 itération.
