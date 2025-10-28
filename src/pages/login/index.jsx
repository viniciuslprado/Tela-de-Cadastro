import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, ErrorMessage } from './styles';

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
                        if(data.length && data[0].id){
                                // salvar usuário em localStorage para sessão simples
                                const user = data[0];
                                if(!user.image){
                                    user.image = 'https://avatars.dicebear.com/api/initials/' + encodeURIComponent(user.nome || user.email) + '.svg'
                                }
                                localStorage.setItem('user', JSON.stringify(user));
                                navigate('/feed') 
                                return
                        }

                        alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            placeholder="E-mail"
                            leftIcon={<MdEmail />}
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
                            leftIcon={<MdLock />}
                            name="senha"
                            control={control}
                            rules={{ required: 'Senha é obrigatória', minLength: { value: 6, message: 'Senha deve ter ao menos 6 caracteres' } }}
                        />
                        {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText onClick={() => navigate('/forgot')}>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={() => navigate('/register')}>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }