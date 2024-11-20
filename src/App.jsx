import { Navbar } from './components/Navbar/Navbar'
import './styles/themes.css'
import './App.css'
import { Button } from './components/Button/Button'
import { InstagramIcon, TwitterIcon } from './components/Icons/Icons'
import { FilterProvider } from './context/FilterContext'
import { Products } from './Page/Products/Products'
import { Cart } from './Page/Cart/Cart'
function App() {
  return (
    <div className={'app '}>
      <FilterProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <h1 className='title'>All Products</h1>
          <Products />
          <Cart />
        </main>
      </FilterProvider>
      <footer>
        <ul>
          <li>
            <InstagramIcon />
            <a href='https://www.instagram.com/moiseslugo_04' target='_blank'>
              @moiseslugo_04
            </a>
          </li>
          <li>
            <TwitterIcon />
            <a href='https://x.com/moiseslugo04' target='_blank'>
              @moiseslugo04
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
export default App
