import UserAvatar from '../common/UserAvatar'

import './Header.css'

const Logo = () => {
  return (
    <>
      <h3 className='logo'>Logo</h3>
    </>
  )
}

const Header = () => {
  return (
    <header className='header-container'>
      <Logo />
      <h1>Quiz Application</h1>
      <UserAvatar userInitial={'R'} />
    </header>
  )
}

export default Header
