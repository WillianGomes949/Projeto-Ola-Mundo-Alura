import styles from './SobreMim.module.css';
import fotoCapa from 'assets/sobre_mim_capa.png';
import PostModelo from 'componentes/PostModelo';
import fotoSobreMim from 'assets/sobre_mim_foto.jpg';

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} título="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Willian</h3>
      <img
        src={fotoSobreMim}
        alt={'Foto de Willian Gomes de Frente'}
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver
        por aqui.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum
        eu massa et semper. Ut lobortis maximus nulla a accumsan. Phasellus et
        porta ex. Phasellus venenatis neque id augue tincidunt, malesuada
        consequat felis rutrum. Maecenas feugiat cursus arcu, et congue libero
        pretium et. Sed at erat nisl. Integer vulputate, purus in porttitor
        pretium, nunc diam molestie dui, sed finibus magna felis id ante.
        Phasellus imperdiet molestie enim a interdum. Aenean feugiat elit porta
        tortor imperdiet dictum id et quam. Maecenas tortor enim, efficitur id
        libero id, consequat tincidunt tellus. In hac habitasse platea dictumst.
        Suspendisse suscipit tortor enim, eget pulvinar ligula maximus in. Morbi
        quis turpis sit amet tellus maximus dignissim vel dictum odio. Nam neque
        sapien, rutrum ac molestie id, sodales eu sem. Vestibulum porttitor
        lacus et lobortis aliquam.
      </p>
      <p className={styles.paragrafo}>
        Duis eu erat lobortis ex viverra sollicitudin. Curabitur feugiat odio
        eget pulvinar mollis. Vivamus nunc nisl, ornare a dapibus vitae,
        faucibus hendrerit libero. Cras posuere egestas arcu, nec hendrerit
        ipsum aliquet ac. Nam faucibus, dolor in sodales bibendum, ex erat
        tempus ex, id ornare eros urna non purus. Sed nec commodo tortor.
        Phasellus id urna ornare, sodales augue non, tincidunt est. Pellentesque
        eget nibh et felis malesuada ullamcorper.
      </p>
      <p className={styles.paragrafo}>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para o site, e aprendi muito enquanto
        codificava.
      </p>
      <p className={styles.paragrafo}>
        Duis eu erat lobortis ex viverra sollicitudin. Curabitur feugiat odio
        eget pulvinar mollis. Vivamus nunc nisl, ornare a dapibus vitae,
        faucibus hendrerit libero. Cras posuere egestas arcu, nec hendrerit
        ipsum aliquet ac. Nam faucibus, dolor in sodales bibendum, ex erat
        tempus ex, id ornare eros urna non purus. Sed nec commodo tortor.
        Phasellus id urna ornare, sodales augue non, tincidunt est. Pellentesque
        eget nibh et felis malesuada ullamcorper.
      </p>
      <p className={styles.paragrafo}>
        Duis eu erat lobortis ex viverra sollicitudin. Curabitur feugiat odio
        eget pulvinar mollis. Vivamus nunc nisl, ornare a dapibus vitae,
        faucibus hendrerit libero. Cras posuere egestas arcu, nec hendrerit
        ipsum aliquet ac. Nam faucibus, dolor in sodales bibendum, ex erat
        tempus ex, id ornare eros urna non purus. Sed nec commodo tortor.
        Phasellus id urna ornare, sodales augue non, tincidunt est. Pellentesque
        eget nibh et felis malesuada ullamcorper.
      </p>
    </PostModelo>
  );
}
