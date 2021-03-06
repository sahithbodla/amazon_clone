import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider'
import { auth } from './firebase';

function Header() {

    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            {/* Logo */}
            <Link to='/'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" className="header__logo" />
            </Link>
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                {/* Search Icon */}
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* Nav */}
            <div className="header__nav">
                {/* Hello signin */}
                    <Link to={!user && './login'}>
                        <div onClick = {handleAuthentication} className="header__option">
                            <span className="header__optionLineOne">
                            Hello Guest
                            </span>
                            <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                            </span>
                        </div>
                    </Link>
                {/* Returns and orders */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>                    
                </div>
                {/* Your prime */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                {/* Basket */}
                <Link to = '/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
