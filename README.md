# Exercice

## Setup

```
yarn
bundle install
cd ios && bundle exec pod install && cd ..
yarn ios
```

## Présentation

Cette application contient un bouton `Increment`.
Lorsque l'on clique dessus, ce bouton incrémente une valeur et affiche un log avec la valeur associées.

## Problème

Le log vaut toujours `Current value is 0`

https://user-images.githubusercontent.com/9041221/184158876-ffa90858-0136-47f8-8f2b-5498cdcb3f2c.mp4

## Question

Pourquoi la console de log ne marche-t-elle pas ?

## Objectif

Trouver la source du problème en un **minimum d'itération** possible.

1 itération = une tentative de debug.

**Par exemple** si je met un console.log et que j'exécute la multiplication cela compte pour 1 itération.
