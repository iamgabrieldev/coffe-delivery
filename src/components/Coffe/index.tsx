import { useState } from 'react'

import * as styled from './styles'
import {
  Minus,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
} from '@phosphor-icons/react'

interface CoffeProps {
  name: string
  tags: string[]
  description: string
  url: string
  price: number
}

const Coffe: React.FC<CoffeProps> = ({
  name,
  tags,
  description,
  url,
  price,
}) => {
  const [count, setCount] = useState(1)

  return (
    <styled.Coffe>
      <img src={url} />
      <div className="tags">
        {tags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <styled.Count>
        <div className="price-info">
          <span>R$</span>
          <span className="price">
            {price.toString().replace('.', ',') + '0'}
          </span>
        </div>
        <div className="count-actions">
          <div className="count">
            <Minus weight="bold" />
            <button>{count}</button>
            <Plus weight="bold" />
          </div>
          <button>
            <ShoppingCartSimple weight="fill" />
          </button>
        </div>
      </styled.Count>
    </styled.Coffe>
  )
}

export default Coffe
