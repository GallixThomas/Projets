export class DataService {

    static programmes = [
    //     {
    //         category: "film",
    //         id: 1,
    //         imageBig: "http://fr.web.img3.acsta.net/r_1280_720/pictures/15/10/13/15/12/514297.jpg",
    //         imageSmall: "http://fr.web.img4.acsta.net/r_1280_720/pictures/15/09/29/13/42/151291.jpg",
    //         title: "Forrest Gump",
    //         rating: 4.6,
    //         duration: 140,
    //         release: "5/10/1994",
    //         description: "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.",
    //         typeFilm: ["Romance", "Drame", "Comédie"],
    //         castingImage: ["http://fr.web.img6.acsta.net/r_1280_720/pictures/20/01/30/15/03/1454869.jpg", "http://fr.web.img3.acsta.net/r_1280_720/pictures/17/04/18/17/05/547640.jpg", "http://fr.web.img6.acsta.net/r_1280_720/pictures/17/05/18/10/54/541442.jpg", "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/02/10/10/03/024816.jpg"],
    //         castingNom: ["Tom Hanks", "Gary Sinise", "Robin Wright", "Mykelti Williamson"],
    //         nbrSaisons: 0,
    //         nbrEpisodes: 0
    //     },

    //     {
    //         category: "serie",
    //         id: 2,
    //         imageBig: "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/12/12/12/13/2421997.jpg",
    //         imageSmall: "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/12/10/12/41/2871222.jpg",
    //         title: "The Witcher",
    //         rating: 4.0,
    //         duration: 480,
    //         release: "2019",
    //         description: "Adaptation Live de la saga littéraire du Sorceleur.Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.",
    //         typeFilm: ["Aventure", "Fantastique"],
    //         castingImage: ["http://fr.web.img6.acsta.net/r_1280_720/pictures/16/03/22/17/06/408269.jpg", "http://fr.web.img2.acsta.net/r_1280_720/pictures/19/12/19/11/32/4678376.jpg", "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/12/27/01/11/4338429.jpg", "http://fr.web.img5.acsta.net/r_1280_720/pictures/19/12/19/11/15/3593023.jpg"],
    //         castingNom: ["Henry Cavill", "Freya Allan", "Anya Charlotra", "Joey Batey"],
    //         nbrSaisons: 2,
    //         nbrEpisodes: 16
    //     },

    //     {
    //         category: "film",
    //         id: 3,
    //         imageBig: "http://fr.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/14/33/18366630.jpg",
    //         imageSmall: "//fr.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/14/33/18366867.jpg",
    //         title: "Le seigneur des anneaux : Le retour du roi",
    //         rating: 4.5,
    //         duration: 201,
    //         release: "17/12/2003",
    //         description: "Les armées de Sauron ont attaqué Minas Tirith, la capitale de Gondor. Jamais ce royaume autrefois puissant n'a eu autant besoin de son roi. Mais Aragorn trouvera-t-il en lui la volonté d'accomplir sa destinée ?  Tandis que Gandalf s'efforce de soutenir les forces brisées de Gondor, Théoden exhorte les guerriers de Rohan à se joindre au combat. Mais malgré leur courage et leur loyauté, les forces des Hommes ne sont pas de taille à lutter contre les innombrables légions d'ennemis qui s'abattent sur le royaume... Chaque victoire se paye d'immenses sacrifices. Malgré ses pertes, la Communauté se jette dans la bataille pour la vie, ses membres faisant tout pour détourner l'attention de Sauron afin de donner à Frodon une chance d'accomplir sa quête. Voyageant à travers les terres ennemies, ce dernier doit se reposer sur Sam et Gollum, tandis que l'Anneau continue de le tenter...",
    //         typeFilm: ["Aventure", "Fantastique"],
    //         castingImage: ["http://fr.web.img3.acsta.net/r_1280_720/pictures/16/07/22/17/26/392369.jpg", "http://fr.web.img6.acsta.net/r_1280_720/pictures/15/10/14/14/28/509910.jpg", "http://fr.web.img2.acsta.net/r_1280_720/pictures/19/01/16/15/12/2728586.jpg", "http://fr.web.img3.acsta.net/r_1280_720/pictures/14/12/04/10/40/127447.jpg"],
    //         castingNom: ["Sean Astin", "Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    //         nbrSaisons: 2,
    //         nbrEpisodes: 16
    //     },

    //     {category: "serie",
    //     id: 4,
    //     imageBig: "http://fr.web.img5.acsta.net/r_1280_720/medias/nmedia/18/77/82/72/19432441.jpg",
    //     imageSmall: "http://fr.web.img4.acsta.net/r_1280_720/medias/nmedia/18/65/21/29/18837653.jpg",
    //     title: "Scrubs",
    //     rating: 3.9,
    //     duration: 3660,
    //     release: "2001-2010",
    //     description: "J.D., Turk et Elliot font leur internat de médecine à l'hôpital du Sacré Coeur. Ils y découvrent que la vie n'y est pas facile et se retrouvent bien souvent dans des situations des plus loufoques.",
    //     typeFilm: ["Comédie"],
    //     castingImage: ["http://fr.web.img5.acsta.net/r_1280_720/pictures/20/02/11/17/16/5528315.jpg", "http://fr.web.img5.acsta.net/r_1280_720/pictures/16/03/29/15/24/027260.jpg", "http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/77/47/11/20211293.jpg", "http://fr.web.img3.acsta.net/r_1280_720/pictures/17/07/13/16/02/363398.jpg"],
    //     castingNom: ["Zach Braff", "Sarah Chalke", "Donald Faison", "Judy Reyes"],
    //     nbrSaisons: 9,
    //     nbrEpisodes: 183}

    ]

    static programme = {
        category: "",
        id: 0,
        imageBig: "",
        imageSmall: "",
        title: "",
        rating: 0,
        duration: 0,
        release: "",
        description: "",
        typeFilm: [],
        castingImage: [],
        castingNom: [],
        nbrSaisons: 0,
        nbrEpisodes: 0
    }

    static favorisProgrammes = []

    static categories = ["Action", "Aventure", "Catastrophe", "Comédie", "Drame", "Fantastique", "Historique", "Horreur", "Policier", "Romance", "Science-fiction", "Thriller", "Western"]
}