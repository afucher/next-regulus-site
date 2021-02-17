import Head from 'next/head'
import Cabecalho from '../componentes/Cabecalho'
import Rodape from '../componentes/Rodape'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Regulus | Escola e Livraria especializada de Astrologia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cabecalho />
      <Rodape />
    </div>
  )
}
