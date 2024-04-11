import { ReactNode } from 'react';

import { Container } from './styles';

interface ModularProps {
  children: ReactNode;
}

export function Modular({ children }: ModularProps) {
  return (
    <Container>
      <h1>Modular</h1>
      {children}
    </Container>
  );
}
