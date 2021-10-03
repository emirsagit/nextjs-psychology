type Props = {
  href: string;
  color?: string;
  width?: string;
  height?: string;
};

export default function Facebook({ href, color, width, height }: Props) {
  return (
    <a title="Facebook" href={href} target="_blank" rel="noopener" className="link">
      <svg
        width={width ? width : "36"}
        height={height ? height : "36"}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      <style jsx>
        {`
          .link {
            color: ${color ? color : "var(--light-color-secondary)"};
            margin-bottom: 1em;
            cursor: pointer;
          }
          .link:hover {
            filter: brightness(85%);
          }
        `}
      </style>
    </a>
  );
}
