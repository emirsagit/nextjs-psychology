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

export default function PhoneWithNumber({
  href,
  color,
  width,
  height,
  showNumber = true,
  showSvg = true,
  fontSize,
  marginBottom,
}: Props) {
  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
    }
    return null;
  }

  return (
    <a title="Phone" href={`tel:+${href}`} target="_blank" rel="noopener" className="link">
      {showSvg && (
        <svg
          width={width ? width : "28"}
          height={height ? height : "28"}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995A15.51 15.51 0 0 1 18.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657 1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
        </svg>
      )}
      <span className="span ">{showNumber && `+${formatPhoneNumber(href)}`}</span>
      <style jsx>
        {`
          .link {
            color: ${color ? color : "var(--light-color-secondary)"};
            display: flex;
            align-items: center;
            font-size: ${fontSize && fontSize}
            cursor: pointer;
            margin-bottom: ${marginBottom && marginBottom}
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
