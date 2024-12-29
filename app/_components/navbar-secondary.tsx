import Link from "next/link"

const NavBarSecondary = () => {
  return (
    <div className="border border-gray-600">
      <div className="p-4">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/" className="text-white">
              Inteligência Artificial
            </Link>
          </li>

          <li>
            <Link href="/" className="text-white">
              Blockchain
            </Link>
          </li>

          <li>
            <Link href="/" className="text-white">
              Hologramas
            </Link>
          </li>

          <li>
            <Link href="/" className="text-white">
              Internet
            </Link>
          </li>

          <li>
            <Link href="/" className="text-white">
              Vestiveis
            </Link>
          </li>

          <li>
            <Link href="/" className="text-white">
              Realidade Aumentada
            </Link>
          </li>

          <li>
            <Link href="/" className="text-white">
              Realidade Virtual
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarSecondary
