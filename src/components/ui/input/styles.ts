import styled from 'styled-components'

export const InputContainer = styled.div`
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.button};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding-inline: 0.75rem;

  input {
    border: 0;
    background: transparent;

    color: ${(props) => props.theme.colors.text};
    font-size: 0.875rem;

    flex: 1;

    padding-block: 0.75rem;
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.label};
  }

  input:focus {
    box-shadow: none;
  }

  &:has(input:not(:required))::after {
    content: 'Opcional';

    color: ${(props) => props.theme.colors.label};
    font-size: 0.75rem;
    font-style: italic;
  }

  &:has(input:focus) {
    outline: 2px solid ${(props) => props.theme.colors['yellow-dark']};
  }
`
