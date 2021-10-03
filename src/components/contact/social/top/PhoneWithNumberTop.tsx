type Props = {
  href: string;
  color?: string;
  width?: string;
  height?: string;
  showNumber?: boolean;
};

export default function PhoneWithNumberTop({ href, color, width, height, showNumber = true }: Props) {
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
      <svg
        width={width ? width : "36"}
        height={height ? height : "36"}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512"
      >
        <path d="M436.992 74.953c-99.989-99.959-262.08-99.935-362.039.055s-99.935 262.08.055 362.039 262.08 99.935 362.039-.055a256 256 0 0 0-.055-362.039zm-49.289 281.652-.034.034v-.085l-12.971 12.885a68.267 68.267 0 0 1-64.427 18.432 226.834 226.834 0 0 1-65.877-29.525 304.371 304.371 0 0 1-51.968-41.899 306.71 306.71 0 0 1-38.827-47.104 238.907 238.907 0 0 1-29.184-59.051 68.265 68.265 0 0 1 17.067-69.717l15.189-15.189c4.223-4.242 11.085-4.257 15.326-.034l.034.034 47.957 47.957c4.242 4.223 4.257 11.085.034 15.326l-.034.034-28.16 28.16c-8.08 7.992-9.096 20.692-2.389 29.867a329.334 329.334 0 0 0 33.707 39.339 327.314 327.314 0 0 0 44.373 37.291c9.167 6.394 21.595 5.316 29.525-2.56l27.221-27.648c4.223-4.242 11.085-4.257 15.326-.034l.034.034 48.043 48.128c4.243 4.222 4.258 11.083.035 15.325z" />
      </svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg"  style="enable-background:new 0 0 512 512" xml:space="preserve"> */}
      <span className="span ">{showNumber && `+${formatPhoneNumber(href)}`}</span>
      <style jsx>
        {`
          .link {
            color: ${color ? color : "var(--light-color-secondary)"};
            margin-bottom: 0.5em;
            display: flex;
            align-items: center;
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
