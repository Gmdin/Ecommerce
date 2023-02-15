import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
const Header=()=>{
    return(
        <div className='header'>
         <div className="header__logo">
      <LocalGroceryStoreIcon className='header__logoImage' fontSize='large'/>
        <h2 className='heade__logoTitle'>E-commerance</h2>
      </div>
      <div className="header__search">
        <input type='text' className='header__searchInput'/>
        <SearchIcon className='heade__searchIcon'/>
      </div>
      <div className="header__nav">
      <div className="nav__item">
        <span className="nav__itemLineOne">Hello Gust</span>
        <span className="nav__itemLineTwo">Sign Up</span>
      </div>
      <div className="nav__item">
      <span className="nav__itemLineOne">Your</span>
        <span className="nav__itemLineTwo">Shop</span>
      </div>
      <div className="nav__itemBasket">
      <ShoppingBasketIcon />
      <span className="nav__itemLineTwo nav__basketCount">0</span>
      </div>
      </div>
      
    </div>
    )
}
export default Header;