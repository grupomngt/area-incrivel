import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

interface QrProps {
  path: string;
  name: string;
}

export function Qr({ path, name }: QrProps) {
  const ref = useRef<any>();
  useEffect(() => {
    if (ref.current) {
      ref.current.click();
    }
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>QR - {name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <a href={path} ref={ref}></a>
    </>
  );
}
