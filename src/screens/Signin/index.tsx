import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { SigninSocialButton } from "../../Components/SigninSocialButton";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SigninTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export function Signin() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>
        </TitleWrapper>
        <SigninTitle>
          Faça seu login com{"\n"}umas das contas abaixo
        </SigninTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SigninSocialButton
            title="Entrar com  Google"
            svg={() => <GoogleSvg />}
          />
          <SigninSocialButton
            title="Entrar com Apple"
            svg={() => <AppleSvg />}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
