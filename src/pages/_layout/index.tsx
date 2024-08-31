import { Outlet } from 'react-router-dom'

import cover from '../../assets/cover.svg'

export function DefaultLayout() {
  return (
    <div className="min-h-screen bg-base-background antialiased">
      <img
        src={cover}
        className="h-[296px] w-full overflow-hidden object-cover"
        alt=""
      />

      <div className="relative m-auto -mt-20 max-w-[928px] flex-1">
        <Outlet />
      </div>
    </div>
  )
}
