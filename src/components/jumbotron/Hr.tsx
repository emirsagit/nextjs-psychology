type Props = {
  direction: string;
};

export default function Hr({ direction }) {
  return (
    <div className="container">
      <span>
        <img src="/images/fancy-title.png" />
      </span>
      <style jsx>
        {`
          .container {
            display: flex;
            ${direction === "left" ? "justify-content: start;" : "justify-content: end;"}
          }
          span {
            height: 2px;
            box-sizing: border-box;
            background-color: var(--dark-color-secondary);
            width: 50%;
            display: block;
            position: relative;
          }
          img {
            position: absolute;
            width: 52px;
            height: 47.5px;
            left: calc(50% - 26px);
            ${direction === "left" ? "transform: rotate(360deg) translateY(-47.5px);" : "transform: rotate(180deg);"}
            top: 0;
          }
        `}
      </style>
    </div>
  );
}
