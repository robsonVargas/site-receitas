import Recipe from "../../../components/Recipe/Recipe";

export default function MolhoBranco() {
  return (
    <div>
      <Recipe
        name="Molho Branco"
        picture="https://s2.glbimg.com/ckcwHbpbLdFXhGP8-11d2-qqNBc=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/c/3/kxB7HtRXAPs1Xh5q0A3Q/molhobranco.jpg"
        time="10 min"
        servings="0 porções"
      >
        <h2>Ingredientes</h2>

        <ul>
          <li>3 colheres (sopa) de manteiga</li>
          <li>2 colheres (sopa) de farinha de trigo</li>
          <li>2 copos (requeijão) de leite</li>
          <li>Sal a gosto</li>
          <li>Noz moscada ralada</li>
        </ul>

        <h2>Modo de Preparo</h2>

        <ol>
          <li>Derreter a manteiga.</li>
          <li>
            Após derretida, acrescentar a farinha de trigo e mexer bem, até
            formar uma pasta.
          </li>
          <li>Acrescentar os copos de leite e mexer até engrossar.</li>
          <li>Cozinhar por 1 minuto para não ficar gosto de farinha.</li>
          <li>Temperar com sal a gosto e noz moscada ralada.</li>
        </ol>
      </Recipe>
    </div>
  );
}
