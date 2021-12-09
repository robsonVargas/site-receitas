import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/RecipeCard/RecipeCard";
export default function Index() {
  return (
    <div>
      <Header title="TreinaCook - Receitas" />

      <main>
        <RecipeCard
          link="/receitas/doces/brigadeiro"
          picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
          category="Doces"
          name="Brigadeiro"
        ></RecipeCard>
        <RecipeCard
          link="/receitas/bolos/bolo-de-cenoura"
          picture="https://www.aquinacozinha.com/wp-content/uploads/2012/05/Bolo-de-cenoura-com-calda-de-chocolate.jpg"
          category="Bolos"
          name="Bolo de Cenoura"
        ></RecipeCard>
        <RecipeCard
          link="/receitas/bolos/bolinho-de-chuva"
          picture="https://vovopalmirinha.com.br/wp-content/uploads/2020/03/vovo-palmirinha-bolinho-de-chuva-702x336.jpg"
          category="Lanches"
          name="Bolinho de Chuva"
        ></RecipeCard>
        <RecipeCard
          link="/receitas/molhos/molho-branco"
          picture="https://s2.glbimg.com/ckcwHbpbLdFXhGP8-11d2-qqNBc=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/c/3/kxB7HtRXAPs1Xh5q0A3Q/molhobranco.jpg"
          category="Molhos"
          name="Molho Branco"
        ></RecipeCard>
      </main>

      <Footer />
    </div>
  );
}
