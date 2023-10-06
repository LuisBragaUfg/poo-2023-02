public class Livro {
    private String titulo;
    private String autor;
    private int ano;
    private String editora;

    //Método construtor
    public Livro(String titulo, String autor, int ano, String editora) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getAutor() {
        return autor;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public int getAno() {
        return ano;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getEditora() {
        return editora;
    }
    public String toString() {
        return "Livro{" + "titulo='" + titulo + '\'' +  ", autor='" + autor 
        + '\'' + ", ano=" + ano + ", editora='" + editora + '\'' + ''};
    }
    public class TestaLivro {
        public void main(String[] args) {
            Livro livro1 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, "Editora Rocco");
            Livro livro2 = new Livro("Código da Vinci", "Dan Brown", 2003, "Editora Arqueiro");
            Livro livro3 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943 , "Editora Agir");
            System.out.println("Harry Potter: " + livro1.toString());
            System.out.println("Código da Vinci: " + livro2.toString());
            System.out.println("O Pequeno Príncipe: " + livro3.toString());
        }
    }
