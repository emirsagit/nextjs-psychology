type Props = {
  href: string;
  color?: string;
  width?: string;
  height?: string;
  showNumber?: boolean;
  showSvg?: boolean;
  fontSize?: string;
  marginBottom?: string;
};

export default function MailWithNumber({
  href,
  color,
  width,
  height,
  showNumber = true,
  showSvg = true,
  fontSize,
  marginBottom,
}: Props) {
  return (
    <a title="Email" href={`mailto:${href}`} target="_blank" rel="noopener" className="link">
      {showSvg && (
        <svg
          width={width ? width : "28"}
          height={height ? height : "28"}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="mr-1"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
        </svg>
      )}
      <span className="span">{showNumber && href}</span>
      <style jsx>
        {`
          .link {
            color: ${color ? color : "var(--light-color-secondary)"};
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${fontSize && fontSize}
            cursor: pointer;
            margin-bottom: ${marginBottom && marginBottom}
          }
          .mr-1 {
            margin-right: .5em;
          }
          .span {
            display: block;
            font-size: ${fontSize && fontSize}
          }
          .link:hover {
            filter: brightness(85%);
          }
        `}
      </style>
    </a>
  );
}
