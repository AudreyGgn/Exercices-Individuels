import Methods.Sort;
import Pokemon.Pokemon;
import com.google.gson.*;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try {

            // Étape 1 : Charger le fichier JSON

            JsonElement jsonElement = JsonParser.parseReader(new FileReader("src/BDD/pokedex.json"));
            JsonObject jsonObject = jsonElement.getAsJsonObject();
            JsonArray pokemonArray = jsonObject.getAsJsonArray("pokemon");
            System.out.println("Tableau de tous les pkmn du JSON : " + pokemonArray);

            //FileReader lit le fichier JSON. JsonParser est une classe de Gson qui analyse le flux de caractères
            //JSON et le convertit en un arbre d'éléments JSON. La méthode parseReader convertit cet arbre d'éléments
            //en un objet de type JsonElement. On l'appelle jsonElement.
            //On passe ensuite la méthode getAsJsonObject à ce jsonElement pour le convertir en un objet de type
            //JsonObject qui est une classe de Gson. On l'appelle jsonObject.
            //Ensuite, on lui passe la méthode getAsJsonArraw pour récupérer le tableau JSON nommé "pokemon" (cf
            //l'organisation du fichier JSON fourni) à partir de jsonObject. La méthode permet de le convertir
            //en un objet de type JsonArray qui représente le tableau "pokemon" du fichier JSON. Et on le stocke
            //dans la variable pokemonArray qui renvoie un tableau d'objets contenant chaque pokemon.

            //Afficher le premier pokemon cad le 1er élément du tableau pokemonArray (on utilise les méthodes de
            //la classe JsonArray sur l'objet de type jsonArray fourni par Gson : ce n'est pas un tableau natif de java (!))

            JsonObject firstPokemonObject = pokemonArray.get(0).getAsJsonObject();
            System.out.println("Premier pokemon : " + firstPokemonObject);


            // Étape 2 : Utiliser Gson pour convertir le JSON en objet Java

            //Création d'une nouvelle instance de la classe Gson. Cela crée un objet Gson que nous pouvons utiliser pour effectuer
            // des opérations de sérialisation et de désérialisation
            Gson gson = new Gson();

            //On convertit le premier index de pokemonArray en un objet Java que l'on construit grâce à la classe Pokemon :
            Pokemon firstPokemon = gson.fromJson(firstPokemonObject, Pokemon.class);
            System.out.println(firstPokemon);


            // Etape 3 : boucler sur le tableau pour instancier chaque pokemon grâce au constructeur et l'afficher

            for (int i=0; i<pokemonArray.size(); i++) {
                JsonObject pokemonObject = pokemonArray.get(i).getAsJsonObject();
                Pokemon pokemon = gson.fromJson(pokemonObject, Pokemon.class);
                System.out.println(pokemon);
            }

            // Pour appeler la méthode de tri par nom (définie dans les méthodes de la classe Sort), j'instancie ma classe
            //et j'appelle sa méthode, et avant j'affiche la liste de tous les noms disponibles :
            Sort sort = new Sort();
            sort.printNameList(pokemonArray);
            sort.sortByName(pokemonArray);
            sort.printPokemonEvolutions(pokemonArray);

        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}




