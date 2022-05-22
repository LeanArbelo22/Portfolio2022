import Items from './Items/Items';
import './menu.scss';

function Menu({openMenu, setOpenMenu}) {
    const isOpen = openMenu ? 'active' : null

  return (
    <div className={`menu ${isOpen}`}>
        <Items openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <span>lean.arbelo.dev@gmail.com</span>
    </div>
  )
}

export default Menu;