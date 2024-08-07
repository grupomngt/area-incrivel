import {
  ButtonHero,
  Category,
  Container,
  Content,
  ContentSocial,
  ContentText,
  Value,
  Text,
} from "./styles";

interface HeroProps {
  image?: string;
  video?: string;
  category?: string;
  subname?: string;
  name?: string;
  description?: string;
  value?: string;
  buttonLink?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
}

export function Hero({
  image,
  video,
  category,
  subname,
  name,
  description,
  value,
  buttonLink,
  whatsapp,
  instagram,
  facebook,
}: HeroProps) {
  return (
    <Container id="home">
      {image && <img src={image} alt="" />}
      {video && <video src={video} autoPlay loop muted />}
      <Content>
        <ContentText>
          <Category>{category}</Category>
          <Text>
            <span>{subname}</span>
            <h1>{name}</h1>
          </Text>

          <Value>
            <h2>{description}</h2>
            <h2>parcelas mensais médias a partir de:</h2>
            <h3>R${value}</h3>
          </Value>

          <a href={buttonLink} target="_blank">
            <ButtonHero>Tenho interesse!</ButtonHero>
          </a>
        </ContentText>
        <ContentSocial>
          <div>
            <a href={whatsapp} target="_blank">
              <img
                src="https://primeiro.rioclarofc.com.br/~grupomn/whatsapp.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href={instagram} target="_blank">
              <img
                src="https://primeiro.rioclarofc.com.br/~grupomn/instagram.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href={facebook} target="_blank">
              <img
                src="https://primeiro.rioclarofc.com.br/~grupomn/facebook.svg"
                alt=""
              />
            </a>
          </div>
        </ContentSocial>
      </Content>
    </Container>
  );
}
