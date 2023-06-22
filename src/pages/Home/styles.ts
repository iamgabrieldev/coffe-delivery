import { styled } from 'styled-components'
import background from '../../assets/background.svg'

type variant = {
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const ContainerBg = styled.section`
  width: 100vw;
  background: url(${background});
`

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 96px 0;
  display: flex;

  div {
    h1 {
      font-size: 3rem;
      line-height: 130%;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors['base-title']};
      margin-bottom: 4rem;
    }
  }
`

export const CoffeAttributes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const CoffeAttributesItem = styled.div<variant>`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  div {
    background-color: ${({ theme, variant }) => theme.colors[variant]};
    padding: 0.5rem 0.63rem;
    border-radius: 50%;

    svg {
      color: white;
    }
  }
`
