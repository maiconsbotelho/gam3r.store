import Banner from "@/components/banner/Banner";
import FiltroProduto from "@/components/produto/FiltroProduto";

import ListaProdutos from "@/components/produto/ListaProdutos";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="flex-1 flex flex-col container gap-5 py-10">
        <h1>FERNANDA A FUINHA</h1>

        <FiltroProduto />
        <ListaProdutos />
      </div>
    </>
  );
}
