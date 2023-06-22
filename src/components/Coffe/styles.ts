import { styled } from 'styled-components'

export const Coffe = styled.div`
  margin-top: 2rem;
  width: 256px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1rem;

  img {
    display: block;
    margin: -2rem auto 0rem;
  }

  .tags {
    text-align: center;
    margin: 1rem 0;
  }

  .tag {
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors['yellow-dark']};
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    margin-right: 0.2rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }
`
export const Count = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .price-info {
    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['base-text']};
    }

    .price {
      font-size: 1.5rem;
      font-weight: 900;
      font-family: 'Baloo 2', sans-serif;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  .count-actions {
    display: flex;
    gap: 0.5rem;

    .count {
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors['base-button']};
      padding: 0 0.5rem;

      svg {
        color: ${({ theme }) => theme.colors['purple']};
        cursor: pointer;
      }

      button {
        background-color: ${({ theme }) => theme.colors['base-button']};
        font-size: 1rem;
      }
    }

    button {
      background-color: ${({ theme }) => theme.colors['purple-dark']};
      padding: 0.5rem;
      border-radius: 6px;

      svg {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
