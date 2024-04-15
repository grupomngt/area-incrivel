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
          src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492261/public/whatsappicon_arkpst.svg"
          alt=""
        />
      </a>
    </Container>
  );
}
