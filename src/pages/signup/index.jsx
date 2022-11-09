import { MdEmail, MdLock, MdPersonSearch } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";

import { Container, Title, Column, EsqueciText, CriarText, Row, Wrapper, TitleSignup, SubtitleSignup } from './styles';


const Signup = () => {
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            //Signup API
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
                <TitleSignup>Comece agora grátis</TitleSignup>
                <SubtitleSignup>Crie sua conta e make the change._</SubtitleSignup>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPersonSearch />} name="name"  control={control} />
                    {errors.name && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar conta" variant="secondary" type="submit" />
                </form>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Signup }