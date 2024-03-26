#A lancer dans le terminal, enjoy !

#Initialisation du paquet d'allumettes :

paquetAllu = 50
print("Bienvenue dans le jeu des Allumettes !\nRetirez 1 à 6 allumettes par tour. Le premier arrivé à 0 tout pile a gagné !\nVous démarrez à " + str(paquetAllu) + " allumettes. Bonne chance !\n")


#Fonction qui retire les allumettes

def retraitAllu(nbreAlluARetirer):
    global paquetAllu
    paquetAllu = paquetAllu - nbreAlluARetirer
    return paquetAllu


#Fonction pour demander combien d'allu à retirer

def demande(numJoueur):
    nbreAlluARetirer = input("Joueur " + str(numJoueur) + ", Combien voulez-vous retirer d'allumettes entre 1 et 6 ?")
    nbreAlluARetirer = int(nbreAlluARetirer)
    if 0 < nbreAlluARetirer < 7:
        return nbreAlluARetirer
    else:
        print("Veuillez choisir entre 1 et 6.")
        return demande(numJoueur)


#Fonction pour gagner ou perdre :
    
def winOrLoose(numJoueur):
    if paquetAllu == 0:
        return print("Joueur " + str(numJoueur) + ", Yes you WIN !")
    if paquetAllu < 0:
        return print("Joueur " + str(numJoueur) + ", You loose...Try again !")
     

#Fonction qui appelle les autres et gère le multijoueur :

def gamePlay():
    global paquetAllu
    nbreJoueur = input("A combien de joueurs voulez-vous disputer cette partie ?")
    nbreJoueur = int(nbreJoueur)
    numJoueur = 1
    while paquetAllu > 0:
        if numJoueur > nbreJoueur:
            numJoueur = 1
        nbreAllu = demande(numJoueur)
        print("Allu restantes dans le paquet :", retraitAllu(nbreAllu))
        winOrLoose(numJoueur)
        numJoueur += 1
    paquetAllu = 50
    doYouWannaPlayAgain()
    

#Fonction pour rejouer :

def doYouWannaPlayAgain():
    reponse = input("Do you wanna play again : yes or no ?")
    if reponse == "yes":
        gamePlay()
    elif reponse == "no":
        print ("Goodbye ! Merci d'avoir joué !")
    else:
        print("Please write 'yes' or 'no'")
        doYouWannaPlayAgain()

gamePlay()
    