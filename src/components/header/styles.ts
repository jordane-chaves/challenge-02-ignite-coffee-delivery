import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.background};

  padding: 2rem 0;
  position: sticky;
  top: 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.button`
  background-color: ${(props) => props.theme.colors.brand[100]};
  border-radius: 6px;
  border: none;

  color: ${(props) => props.theme.colors.brand[900]};
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.colors.brand[500]};
    height: 1.375rem;
    width: 1.375rem;
  }
`
