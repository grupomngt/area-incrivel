import { useEffect, useRef } from "react";
import TagManager from "react-gtm-module";
import { Helmet } from "react-helmet";
import ReactPixel from "react-facebook-pixel";
interface QrProps {
  path: string;
  name: string;
}

const tagManagerArgs = {
  gtmId: "GTM-KXPBB883",
  dataLayer: {
    page: "QR CODE",
  },
  dataLayerName: "PageDataLayer",
};

export function Qr({ path, name }: QrProps) {
  TagManager.dataLayer(tagManagerArgs);
  useEffect(() => {
    ReactPixel.init("1528293361047131");

    TagManager.initialize(tagManagerArgs);
  }, []);
  const ref = useRef<any>();
  useEffect(() => {
    if (ref.current) {
      setTimeout(function () {
        ref.current.click();
      }, 1000);
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
