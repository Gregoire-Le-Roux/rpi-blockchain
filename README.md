# RPI Blockchain

## Projet Contrat de Mariage ##

Ce projet est la réalisation d'un smart contract pour officialiser l'union de deux personnes.
Cela a été réalisé en permettant de générer un contrat de mariage avec les deux noms du couple puis de le sauvegarder et de pouvoir quand nous le voulons récupérer ce contrat et les noms enregistrés dans la blockchain.
Dans projets/mariage un README.md donne des informations supplémentaires sur le projet.

## Projet Metaplex ##

Ce projet sur Metaplex est de mettre en place la Candy Machive v2 : [Metaplex - Candy Machine v2](https://docs.metaplex.com/candy-machine-v2/introduction)

Un docx est disponible avec toutes les manipulations réalisées pour faire ce projet et les résultats obtenus.


## Présentation d'une blockchain ##

L'entreprise française Blockchain Certified Data - BCdiploma aussi appelé BCdiploma créée en 2017 et crée une blockchain permettant la sauvegarde, visualisation et sécurité de documents dématérialisés tels que des diplômes, titres RNCP, blocs de compétences... 

Le but de ce projet est d'éviter toutes les fraudes possibles des faux documents avec comme premier document les diplômes, tout cela grâce à la blockchain. À savoir, cette blockchain utilise le framework EvidenZ et son token BCDT et le projet BCdiploma est à ce jour la plus grande réussite basée sur ce framework. 

BCdiploma est une des entreprises de digitalisation de documents les plus utilisée par les écoles dans le monde avec comme exemple l'université de Lille, EM Lyon Business School, VisionCompliance en Suisse, l'université de Mancosca en Afrique du Sud, l'université HoaSen au Vietnam...
	
Sources :

https://www.bcdiploma.com/

https://www.evidenz.io/

https://fr.wikipedia.org/wiki/BCdiploma


## Réponse à la question : Qu'est-ce qui différencie ERC20 et ERC721 ? ##

Tout d'abord, ERC20 et ERC721 sont deux standard de smart contract de la blockchain Ethereum et correspondent à la gestion de jetons. Ils ont un point commun qui est que les jetons créés à partir de ces standard sont échangeables entre utilisateurs. 
Dans le cas de ERC20, tous les tokens ont la même valeur et ne sont pas différenciable, ils sont donc fongibles. Cependant pour ERC721, ces jetons-là sont uniques, irremplaçable par un autre token donc si nous avons un jeton d'ERC721 alors personne ne peut avoir exactement le même que nous. Nous pouvons donc distingué un token ERC721 parmis des milliers d'autres.

Le code ci-dessous est la déclaration des différents tokens ERC721 liés au propriétaire, fonctionnement qui n'est pas dans ERC20
```
ERC721
l.20    // Mapping from token ID to owner address
l.21    mapping(uint256 => address) private _owners;
```


C'est cette principale propriété qui fait la différence entre les deux standards et les tokens d'ERC721 sont aussi appelées des Non-Fungible tokens (NFTs) et cela amène un aspect de collection de tokens que l'on peut lier avec des dessins, des images, des vidéos...
Cet aspect de collection et d'unicité du token fait que la valeur d'un token ERC721 peut varier avec sa rareté alors que les tokens ERC20 ont tous la même valeur.

Fonction dans ERC20 qui permet d'avoir le total de jetons car contrairement à ERC721, on peut accumuler des jetons car ils ont la même valeur et ne sont pas différenciable.
```
ERC20
l.94    function totalSupply() public view virtual override returns (uint256) {
l.95        return _totalSupply;
l.96    }
````

Code tiré de : 

[ERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)

[ERC721](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol)

## TP Blockchain ##

Un dossier avec les consignes du TP Blockchain dans un pdf et les réponses dans un docx.