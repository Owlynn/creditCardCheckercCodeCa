# Validateur de Cartes de Crédit

Un projet JavaScript qui implémente l'algorithme de Luhn pour valider les numéros de cartes de crédit et identifier les compagnies émettrices.

## Description

Ce projet permet de :
- Valider des numéros de cartes de crédit en utilisant l'algorithme de Luhn
- Identifier les cartes invalides dans un lot de cartes
- Déterminer les compagnies émettrices des cartes invalides (Amex, Visa, Mastercard, Discover)

## Fonctionnalités

### 1. `validateCred(array)`
Valide un numéro de carte de crédit en utilisant l'algorithme de Luhn :
- Inverse le tableau et retire le chiffre de contrôle
- Double chaque deuxième chiffre (en partant de la droite)
- Si un chiffre doublé est supérieur à 9, on lui soustrait 9
- Additionne tous les chiffres
- Vérifie si la somme est divisible par 10

**Retourne** : `true` si la carte est valide, `false` sinon

### 2. `findInvalidCards(nestedArray)`
Parcourt un tableau de cartes et retourne uniquement les cartes invalides.

**Paramètres** : Un tableau de tableaux (chaque sous-tableau représente une carte)

**Retourne** : Un tableau contenant uniquement les cartes invalides

### 3. `idInvalidCardCompanies(nestedArray)`
Identifie les compagnies émettrices des cartes invalides en se basant sur le premier chiffre :
- **3** : Amex
- **4** : Visa
- **5** : Mastercard
- **6** : Discover

**Paramètres** : Un tableau de cartes invalides

**Retourne** : Un Set contenant les noms des compagnies uniques

## Structure du Projet

```
creditCardCheckercCodeCa/
├── index.html      # Page HTML principale
├── main.js         # Code JavaScript contenant les fonctions de validation
└── README.md       # Documentation du projet
```

## Utilisation

1. Ouvrez `index.html` dans un navigateur web
2. Ouvrez la console du navigateur (F12) pour voir les résultats
3. Les fonctions sont automatiquement exécutées avec des exemples de cartes

### Exemple d'utilisation

```javascript
// Valider une carte
const card = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
console.log(validateCred(card)); // true ou false

// Trouver les cartes invalides dans un lot
const batch = [valid1, valid2, invalid1, invalid2];
const invalidCards = findInvalidCards(batch);

// Identifier les compagnies des cartes invalides
const companies = idInvalidCardCompanies(invalidCards);
```

## Données de Test

Le projet inclut des exemples de cartes :
- **5 cartes valides** : `valid1` à `valid5`
- **5 cartes invalides** : `invalid1` à `invalid5`
- **5 cartes mystères** : `mystery1` à `mystery5` (à valider)

Toutes ces cartes sont regroupées dans le tableau `batch` pour faciliter les tests.

## Algorithme de Luhn

L'algorithme de Luhn est une formule mathématique utilisée pour valider les numéros d'identification, notamment les numéros de cartes de crédit. Il fonctionne en :

1. Partant de la droite, doubler chaque deuxième chiffre
2. Si le double d'un chiffre est supérieur à 9, soustraire 9
3. Additionner tous les chiffres
4. Si la somme est divisible par 10, le numéro est valide

## Technologies Utilisées

- JavaScript (ES6+)
- HTML5

## Auteur

Projet développé dans le cadre d'un exercice de validation de cartes de crédit.
