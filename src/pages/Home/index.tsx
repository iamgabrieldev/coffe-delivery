import { Coffee, Cube, ShoppingCart, Timer } from '@phosphor-icons/react'

import * as styled from './styles'

import Header from '../../components/Header'
import CoffeImg from '../../assets/Imagem.png'
import { coffes } from '../../data/coffes'
import Coffe from '../../components/Coffe'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <styled.ContainerBg>
          <styled.Container>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
              <styled.CoffeAttributes>
                <styled.CoffeAttributesItem variant="yellow-dark">
                  <div>
                    <ShoppingCart weight="fill" size={16} />
                  </div>
                  <span>Compra simples e segura</span>
                </styled.CoffeAttributesItem>
                <styled.CoffeAttributesItem variant="base-text">
                  <div>
                    <Cube weight="fill" size={16} />
                  </div>
                  <span>Embalagem mantém o café intacto</span>
                </styled.CoffeAttributesItem>
                <styled.CoffeAttributesItem variant="yellow">
                  <div>
                    <Timer weight="fill" size={16} />
                  </div>
                  <span>Entrega rápida e rastreada</span>
                </styled.CoffeAttributesItem>
                <styled.CoffeAttributesItem variant="purple">
                  <div>
                    <Coffee weight="fill" size={16} />
                  </div>
                  <span>O café chega fresquinho até você</span>
                </styled.CoffeAttributesItem>
              </styled.CoffeAttributes>
            </div>
            <div>
              <img src={CoffeImg} alt="" />
            </div>
          </styled.Container>
        </styled.ContainerBg>
        <styled.CoffeContainer>
          <h2>Nossos Cafés</h2>
          <styled.Coffes>
            {coffes.map((coffe) => (
              <Coffe
                key={coffe.imageUrl}
                name={coffe.name}
                description={coffe.description}
                price={coffe.price}
                tags={coffe.tags}
                url={coffe.imageUrl}
              />
            ))}
          </styled.Coffes>
        </styled.CoffeContainer>
      </main>
    </>
  )
}

export default Home
