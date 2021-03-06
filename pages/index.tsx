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
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Estude Astrologia </span>
            <span className="block text-indigo-600 xl:inline"> de verdade</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Ensinando e formando astrólogos desde 1975. Formação completa em Astrologia, cursos básicos, intermediários e avançados.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Veja as turmas
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Grade curricular
              </a>
           </div>
         </div>
          
        </div>
        <blockquote className="border-l-4 pl-4 py-2 my-2">
          <p>O céu ganhou mais uma estrela, e a terra se acostuma com a saudade.</p>
          <p>Prof.Waldyr Bonadei Fücher - 18/08/1926 ~19/02/2012 </p>
        </blockquote>
      </main>

      <Rodape />
    </div>
  )
}
