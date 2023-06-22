import { styled } from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 2rem auto;
  padding: 0 0.5rem;
`

export const ListContainer = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 4px;
  }

  .local {
    background-color: ${({ theme }) => theme.colors['purple-light']};

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    svg {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  .shoppingCart {
    background-color: ${({ theme }) => theme.colors['yellow-light']};

    svg {
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`
