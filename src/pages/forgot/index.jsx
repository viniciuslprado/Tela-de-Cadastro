import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

import { Container, Column, Wrapper, Title, Subtitle, Row, InfoText, ErrorMessage } from './styles';

const Forgot = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange'
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}`);
      if (data && data.length) {
        alert(`Um e-mail de recuperação foi enviado para ${formData.email}`);
        navigate('/login');
        return;
      }

      alert('E-mail não encontrado');
    } catch (e) {
      alert('Erro ao processar pedido');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>Recuperar senha</Title>
          <Subtitle>Informe o e-mail associado à sua conta</Subtitle>
        </Column>
        <Column>
          <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                name="email"
                control={control}
                rules={{ required: 'E-mail é obrigatório', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' } }}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

              <Button title="Enviar" variant="secondary" type="submit" />
            </form>
            <Row>
              <InfoText onClick={() => navigate('/login')}>Voltar ao login</InfoText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Forgot }
