import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoImg from '../../assets/Logo.svg'

import * as styled from './styles'

const Header: React.FC = () => {
  return (
    <styled.Header>
      <img src={logoImg} alt="" />
      <styled.ListContainer>
        <li className="local">
          <MapPin weight="fill" size={24} />
          <span>Porto Alegre</span>
        </li>
        <li className="shoppingCart">
          <ShoppingCart weight="fill" size={24} />
        </li>
      </styled.ListContainer>
    </styled.Header>
  )
}

export default Header
