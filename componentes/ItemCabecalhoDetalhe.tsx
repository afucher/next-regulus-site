interface Props {
  titulo: string;
  descricao: string;
  link: string;
  icone: JSX.Element;
}

const ItemCabecalhoDetalhe = ({titulo, descricao, link, icone}: Props) => {
  return <a href={link} target="_blank" className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
  <div className="flex md:h-full lg:flex-col">
    <div className="flex-shrink-0">
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-900 text-white sm:h-12 sm:w-12">
        {icone}
      </span>
    </div>
    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
      <div>
        <p className="text-base font-medium text-gray-900">
          {titulo}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {descricao}
        </p>
      </div>
      <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">Ver mais <span aria-hidden="true">&rarr;</span></p>
    </div>
  </div>
</a>

}

export default ItemCabecalhoDetalhe