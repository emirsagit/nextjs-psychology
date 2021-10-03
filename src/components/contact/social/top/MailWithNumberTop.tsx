type Props = {
    href: string;
    color?: string;
    width?: string;
    height?: string;
    showNumber?: boolean;
  };
  
  export default function MailWithNumberTop({ href, color, width, height, showNumber = true }: Props) {
    return (
      <a title="Email" href={`mailto:${href}`} target="_blank" rel="noopener" className="link">
        <svg
          width={width ? width : "36"}
          height={height ? height : "36"}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 216 216"
        >
          <path d="M108 0C48.353 0 0 48.353 0 108s48.353 108 108 108 108-48.353 108-108S167.647 0 108 0zm48.657 60L107.96 98.498 57.679 60h98.978zm5.01 96h-109V76.259l50.244 38.11c1.347 1.03 3.34 1.545 4.947 1.545 1.645 0 3.073-.54 4.435-1.616l49.374-39.276V156z" />
        </svg>
        <span className="span">{showNumber && href}</span>
        <style jsx>
          {`
            .link {
              color: ${color ? color : "var(--light-color-secondary)"};
              margin-bottom: 0.5em;
              display: flex;
              justify-content: center;
              align-items: end;
              font-size: var(--text-lg);
              cursor: pointer;
            }
            .span {
              display: block;
              margin-bottom: 6px;
            }
            .link:hover {
              filter: brightness(85%);
            }
          `}
        </style>
      </a>
    );
  }
  