import Hr from "./Hr";
import config from "../../lib/config";

export default function Jumbotron() {
  return (
    <>
      <Hr direction="right" />
      <p>
        Klinik Psikolog {config.author} bireyler, çiftler, çocuklar, ergenler ve aileler desteğe ihtiyaç
        duyduklarında etkin ve kalıcı çözümlere ulaşmalarını sağlayarak, danışanlarının daha huzurlu, mutlu ve
        başarılı bir yaşam sürmeleri için çalışmaktadır.
        <style jsx>
          {`
            max-width: 450px;
            width: var(--section-width);
            text-align: center;
            margin: var(--section-padding-y) auto;
            padding: 1rem 0;
            font-size: var(--text-md);
          `}
        </style>
      </p>
      <Hr direction="left" />
    </>
  );
}
