public class TorreDeHanoi {

    public static int resolverTorreDeHanoi(int discos) {
        if (discos <= 0) {
            throw new IllegalArgumentException("O número de discos deve ser positivo.");
        }
        return moverDiscos(discos, 'A', 'C', 'B');
    }

    private static int moverDiscos(int discos, char origem, char destino, char auxiliar) {
        int movimentos = 0;

        if (discos == 1) {
            System.out.println("Mover disco 1 de " + origem + " para " + destino);
            return 1;
        }

        movimentos += moverDiscos(discos - 1, origem, auxiliar, destino);
        System.out.println("Mover disco " + discos + " de " + origem + " para " + destino);
        movimentos++;
        movimentos += moverDiscos(discos - 1, auxiliar, destino, origem);

        return movimentos;
    }
}

import static org.junit.Assert.assertEquals;
        import org.junit.Test;

public class TorreDeHanoiTest {

    @Test
    public void testResolverTorreDeHanoiComUmDisco() {
        int movimentos = TorreDeHanoi.resolverTorreDeHanoi(1);
        assertEquals(1, movimentos);
    }

    @Test
    public void testResolverTorreDeHanoiComTresDiscos() {
        int movimentos = TorreDeHanoi.resolverTorreDeHanoi(3);
        assertEquals(7, movimentos);
    }

    @Test
    public void testResolverTorreDeHanoiComCincoDiscos() {
        int movimentos = TorreDeHanoi.resolverTorreDeHanoi(5);
        assertEquals(31, movimentos);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testResolverTorreDeHanoiComNumeroNegativoDeDiscos() {
        TorreDeHanoi.resolverTorreDeHanoi(-1);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testResolverTorreDeHanoiComZeroDiscos() {
        TorreDeHanoi.resolverTorreDeHanoi(0);
    }
}
