public class animal{
    public string som(){
        return "Voz produzida pelo animal";
    }
}

public class sapo extends animal{
    @Override
    public string som(){
        return "coaxar";
    }
}

public class cachorro extends animal{
    @override 
    public string som(){
        return "latir";
    }
}

public class boi extends animal{
    @override 
    public string som(){
        return "berrar";
    }
}

public class TestaAnimais{
    public static void main(string[]args){
    Animal[] animais = new animal[3];
    animais[0] = new sapo();
    animais[1] = new cachorro();
    animais[2] = new boi();
    
    for(Animal animal : animais){
        system.out.println(animal.som())
    }
}
}
