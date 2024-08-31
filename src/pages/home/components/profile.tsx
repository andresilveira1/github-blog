import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'

export function Header() {
  return (
    <div>
      <header className="flex items-center gap-8 rounded-[10px] bg-base-profile px-10 py-8">
        <img
          src="https://github.com/andresilveira1.png"
          alt=""
          className="h-36 w-36 rounded-lg"
        />

        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-base-title">
              André Silveira Silva
            </h1>

            <a
              href="#"
              className="flex items-center gap-2 text-xs font-bold text-base-blue"
            >
              GITHUB <FaArrowUpRightFromSquare />
            </a>
          </div>

          <p className="line-clamp-2 text-base-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            dolores, reprehenderit minus facere aliquam libero qui, officiis,
            nisi at tenetur sapiente. Sint minima consequuntur nulla nostrum,
            voluptates quia iure ex.
          </p>

          <ul className="mt-6 flex space-x-6">
            <li className="flex items-center gap-2">
              <FaGithub className="h-5 w-5 text-base-label" />
              <span className="text-base-subtitle">andresilveira1</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBuilding className="h-5 w-5 text-base-label" />
              <span className="text-base-subtitle">FreeLancer</span>
            </li>
            <li className="flex items-center gap-2">
              <FaUserGroup className="h-5 w-5 text-base-label" />
              <span className="text-base-subtitle">10 seguidores</span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
