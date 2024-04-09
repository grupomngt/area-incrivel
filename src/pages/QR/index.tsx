import { ReactNode, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface QrProps {
  path: string;
}

export function Qr({ path }: QrProps) {
  const ref = useRef<any>();
  useEffect(() => {
    if (ref.current) {
      ref.current.click();
    }
  }, []);
  return <a href={path} ref={ref}></a>;
}
