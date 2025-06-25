🔁 Étapes de refactorisation
#### ✅ 1. Créer une fonction d'initialisation onInit

Cette fonction sera appelée automatiquement au chargement de la page.
Elle doit s’occuper de :

  
Ajouter le listener au bouton
Lancer la récupération des races de chiens

💡 Indice : pensez à addEventListener et à une fonction de type getBreeds().

#### ✅ 2. Extraire la récupération des races dans une fonction dédiée

Elle renverra un objet contenant les races.
Elle devra utiliser fetch() et .then() pour retourner le bon résultat.

💡 Pensez à faire un return response.message à la fin de la chaîne de promesses.

#### ✅ 3. Ajouter une fonction pour remplir le <select>

Cette fonction prendra en paramètre les données renvoyées par getBreeds()
Elle utilisera une boucle for...in pour parcourir les races

📌 Exemple :

for (const breed in breeds) {
  // Ajout dans le select
}
#### ✅ 4. Isoler la logique de récupération d’une image de chien

Créez une fonction getImgDog(url) qui renvoie l’URL de l’image
Elle prend l’URL de l’API en paramètre et retourne juste response.message

#### ✅ 5. Modifier le eventListener du bouton pour utiliser ces fonctions

Utilisez la fonction displayDog() pour centraliser la logique
Elle devra appeler getImgDog(...) avec la bonne URL, et ensuite modifier imgDog.src

---

🧰 Outils et rappels utiles
fetch() renvoie une promesse, utilisez .then() pour récupérer la réponse.