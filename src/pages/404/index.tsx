import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/button'
import { NotFoundContainer, TextContainer } from './styles'

export function NotFound() {
  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  return (
    <NotFoundContainer>
      <TextContainer className="container">
        <h1>Oops..</h1>
        <h2>Parece que você se perdeu</h2>
        <p>A página que você tentou acessar não existe.</p>
        <p>Volte para a página inicial.</p>

        <Button onClick={goToHome}>Ir par ao início</Button>
      </TextContainer>
    </NotFoundContainer>
  )
}
