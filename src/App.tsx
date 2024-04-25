import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="h-full min-h-svh">
      <div
        className="absolute h-svh w-full bg-black"
        data-testid="background-div"
      >
        {/*static background*/}
      </div>
      <div className="relative">
        <Outlet />
      </div>

      <div className="relative text-2xl text-white">Vite</div>
    </div>
  )
}
export default App
