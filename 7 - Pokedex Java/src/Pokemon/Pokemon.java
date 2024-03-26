package Pokemon;

//Définition de la class Pokemon
public class Pokemon {

    //Attributs
    private String name;
    private String height;

    //Constructeur
    public Pokemon (String name, String height) {
        this.name = name;
        this.height = height;
    }

    //Affichage dans la console sous forme d'un objet
    @Override
    public String toString() {
        return "Pokemon {name : '" + this.name + "', height : " + this.height + '}';
    }

    //Getter setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }
}
