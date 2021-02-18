import Head from 'next/head'
import React from 'react'
import Banner from '../componentes/Banner'
import Cabecalho from '../componentes/Cabecalho'
import Rodape from '../componentes/Rodape'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Regulus | Escola e Livraria especializada de Astrologia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cabecalho />
      <Banner />
      <main className="container m-auto max-w-7xl">
        <blockquote className="border-l-4 pl-4 py-2 my-2">
          <p>O céu ganhou mais uma estrela, e a terra se acostuma com a saudade.</p>
          <p>Prof.Waldyr Bonadei Fücher - 18/08/1926 ~19/02/2012 </p>
        </blockquote>
      </main>


      <Rodape />
    </div>
  )
}
