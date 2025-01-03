import Image from "next/image"

const News = () => {
  return (
    <div className="flex items-center justify-evenly p-10 px-8">
      <div className="relative">
        <Image
          src="/news-1.png"
          alt="News-1 img"
          layout="intrinsic"
          width={608}
          height={416}
        />

        <div className="absolute inset-0 flex flex-col items-start p-4 text-white">
          <button className="mb-4 mt-56 rounded-md bg-customButton px-1 py-1 text-sm">
            ROBÓTICA
          </button>
          <p className="text-2xl font-extrabold">
            Robôs domésticos começam a ser adotados para tarefas diárias,
            prometendo mais conforto e eficiência nas residências.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-4">
        <div className="relative">
          <Image
            src="/news-2.png"
            alt="News-2 img"
            layout="intrinsic"
            width={288}
            height={200}
          />
          <div className="absolute inset-0 mt-24 flex flex-col items-start p-2 text-white">
            <button className="mb-2 rounded-md bg-customButton px-3 py-1 text-xs">
              HOLOGRAMAS
            </button>
            <p className="text-sm font-bold">
              Novo Smartphone Projetor 3D chega ao mercado, transformando a
              forma como vemos nossas telas!
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/news-5.png"
            alt="News-5 img"
            layout="intrinsic"
            width={288}
            height={200}
          />
          <div className="absolute inset-0 mt-20 flex flex-col items-start p-2 text-white">
            <button className="mb-2 rounded-md bg-customButton px-3 py-1 text-xs">
              INTERNET
            </button>
            <p className="text-sm font-bold">
              Tecnologia 6G chega às metrópoles brasileiras, prometendo
              revolucionar a forma como vivemos e nos comunicamos.
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/news-3.png"
            alt="News-3 img"
            layout="intrinsic"
            width={288}
            height={200}
          />
          <div className="absolute inset-0 mt-20 flex flex-col items-start p-2 text-white">
            <button className="mb-2 rounded-md bg-customButton px-3 py-1 text-xs">
              VESTIVEIS
            </button>
            <p className="text-sm font-bold">
              Empresa lança relógio inteligente capaz de monitorar a saúde
              mental, oferecendo insights valiosos para o bem-estar pessoal.
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/news-4.png"
            alt="News-4 img"
            layout="intrinsic"
            width={288}
            height={200}
          />
          <div className="absolute inset-0 mt-20 flex flex-col items-start p-2 text-white">
            <button className="mb-2 rounded-md bg-customButton px-3 py-1 text-xs">
              REALIDADE VIRTUAL
            </button>
            <p className="text-sm font-bold">
              Escolas adotam a tecnologia VR para proporcionar experiências
              imersivas, transformando a aprendizagem tradicional.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
