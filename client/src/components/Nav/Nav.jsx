
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import styles from "./Nav.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

//import axios from 'axios'

import { axiosWithOutToken } from '../../services/axios'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import es from './assets/es.png'
import en from './assets/en.png'

const Nav = () => {

  const history = useHistory();
  const { isAuthenticated, user, loginWithPopup, logout } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [t, i18n] = useTranslation('global')

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleForm = () => {
    history.push('/userconfig')
    setAnchorEl(null)
  }

  const handleProfile = () => {
    history.push('/userprofile')
    setAnchorEl(null)
  }

  const handleClickLogout = () => {
    logout();
  };

  useEffect(() => {
    if (isAuthenticated) {
      axiosWithOutToken('/postUser', user, 'post')
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }, [user, isAuthenticated])

  return (
    <header className='header-container-general'>
      <div
        className='navbar-header'
        style={{ borderBottom: '3px solid #d5e3e6' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div className='navbar-brand-box' style={{ background: '#FDFEFE' }}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <span className={styles.containerTitle}>
                <h2 className={styles.url}>deviaje.com</h2>
              </span>
            </Link>
          </div>

          <div>
            <NavLink activeClassName={styles.active} className={styles.link} to='/home'>{t("nav.home")}</NavLink>
            <NavLink activeClassName={styles.active} className={styles.link} to='/about'>{t("nav.about")}</NavLink>
            <NavLink activeClassName={styles.active} className={styles.link} to='/top'>{t("nav.offers")}</NavLink>
          </div>

          <div>
            <button onClick={() => i18n.changeLanguage('es')} className={styles.flags}>
              <img src={es} alt="espaniol" />
            </button>
            <button onClick={() => i18n.changeLanguage('en')} className={styles.flags}>
              <img src={en} alt="espaniol" />
            </button>
          </div>

          <div className={styles.containerButton}>

            {isAuthenticated ? (

              <div>
                <Button
                  id='basic-button'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <img className={styles.imgLogin} src={user.picture} alt='' />
                </Button>
                <Menu
                  style={{marginLeft:'-12px'}} 
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                >
                  <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1rem'}} onClick={handleProfile}>{t("nav.per")}</MenuItem>
                  <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1rem'}} onClick={handleForm}>{t("nav.s")}</MenuItem>
                  <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1rem'}} onClick={handleClickLogout}>{t("nav.l")}</MenuItem>
                </Menu>
              </div>
            ) : (
              <Button style={{borderRadius:'5px', padding:'.5rem'}} variant='contained' onClick={() => loginWithPopup()}>
                Log In / Register
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
