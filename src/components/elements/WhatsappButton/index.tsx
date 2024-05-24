import { ReactNode } from "react";

import { Container } from "./styles";

interface WhatsappProps {
  link: string;
}

export function WhatsappButton({ link }: WhatsappProps) {
  return (
    <Container>
      <a
        href={link}
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <img
          src="https://primeiro.rioclarofc.com.br/~grupomn/whatsappicon.svg"
          alt=""
        />
      </a>
    </Container>
  );
}
