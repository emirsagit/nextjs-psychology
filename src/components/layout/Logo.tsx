import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <img src="/images/logo.png" alt="logo" className="logo" />
      </Link>
      <style jsx>{`
        .logo {
          cursor: pointer;
          width: 50%;
        }

        @media (min-width: 769px) {
          .logo {
            width: 30%;
          }
        }
      `}</style>
    </>
  );
}
