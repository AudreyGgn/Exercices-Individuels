package Methods;

import Pokemon.Pokemon;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.util.ArrayList;
import java.util.Scanner;

public class Sort {

    Scanner scanner = new Scanner(System.in);
    Gson gson = new Gson();

    public void sortByName(JsonArray pokemonArray) {

        //Etape 1 : on récupère le nom du pokemon que l'utilisateur cherche

        //Lire une entrée de l'utilisateur dans la console grâce à la classe Scanner :
        System.out.print("Entrez le nom du pokemon que vous recherchez : ");
        String inputName = scanner.nextLine();
        System.out.println(inputName);
        scanner.close();

        //Etape 2 : on boucle sur un tableau et quand le nom matche, on retourne l'index du tableau correspondant
        //sous la forme d'un joli objet java

        for (int i = 0; i < pokemonArray.size(); i++) {
            //Convertit chaque index du tableau en un objet JsonObject
            JsonObject pokemonObject = pokemonArray.get(i).getAsJsonObject();
            //Récupère le nom du pokemon dans la variable name
            String name = pokemonObject.get("name").getAsString();
            //Passe le constructeur à cet objet
            Pokemon pokemon = gson.fromJson(pokemonObject, Pokemon.class);
            //Condition si le name est égal à l'input utilisateur,
            if (inputName.equals(name)) {
                //Alors on affiche l'objet du pokemon correspondant
                System.out.println("Pokemon trouvé : " + pokemon);
                break; //Et on quitte la boucle
            }
        }
    }

    //Afficher une liste avec le nom de tous les pokemons contenus dans le tableau de pkmn
    public void printNameList(JsonArray pokemonArray){

        ArrayList<String> pokemonNameList = new ArrayList<String>();

        for (int i = 0; i < pokemonArray.size(); i++) {
            JsonObject pokemonObject = pokemonArray.get(i).getAsJsonObject();
            String name = pokemonObject.get("name").getAsString();
            pokemonNameList.add(name);
        }
        System.out.println("Liste des " + pokemonArray.size() + " pokémons disponibles : " + pokemonNameList);
    }
}
