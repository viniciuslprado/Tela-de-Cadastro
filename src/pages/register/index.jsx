import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

import { Container, Column, Wrapper, Title, TitleRegister, SubtitleRegister, Terms, Row, AlreadyText, ErrorMessage } from './styles';

const Register = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors }, setError } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange'
  });

  const onSubmit = async (formData) => {
    try {
      // checar se já existe usuário com o mesmo e-mail
      const { data: exists } = await api.get(`/users?email=${formData.email}`);
      if (exists && exists.length) {
        setError('email', { type: 'manual', message: 'E-mail já cadastrado' });
        return;
      }

      // json-server will auto-assign an id
      const { data: created } = await api.post('/users', {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
        image: 'https://avatars.dicebear.com/api/initials/' + encodeURIComponent(formData.nome) + '.svg'
      });

      // salvar usuário no localStorage (simples sessão local) e redirecionar para feed
      localStorage.setItem('user', JSON.stringify(created));
      alert('Cadastro realizado com sucesso! Você será redirecionado para sua área.');
      navigate('/feed');
    } catch (e) {
      alert('Erro ao criar conta');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>Crie sua conta e make the change...</SubtitleRegister>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                name="nome"
                control={control}
                rules={{ required: 'Nome é obrigatório' }}
              />
              {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

              <Input
                placeholder="E-mail"
                name="email"
                control={control}
                rules={{
                  required: 'E-mail é obrigatório',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' }
                }}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

              <Input
                type="password"
                placeholder="Senha"
                name="senha"
                control={control}
                rules={{ required: 'Senha é obrigatória', minLength: { value: 6, message: 'Senha deve ter ao menos 6 caracteres' } }}
              />
              {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}

              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>

            <Terms>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </Terms>

            <Row>
              <AlreadyText onClick={() => navigate('/login')}>Já tenho conta. Fazer login</AlreadyText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Register }
