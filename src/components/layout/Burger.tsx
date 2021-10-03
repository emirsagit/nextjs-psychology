import { NavigationContext } from "../../context/navigation";
import { useContext } from "react";

export default function Burger() {
  const { active, burgerClick } = useContext(NavigationContext);

  const burgerColor = active ? "var(--light-color-secondary)" : "var(--dark-color-primary)";
  return (
    <div className={"container " + (active ? "active" : "")} onClick={() => burgerClick()}>
      <div className={"meat meat-1"} />
      <div className={"meat meat-2"} />
      <div className={"meat meat-3"} />
      <style jsx>
        {`
          .container {
            width: 38px;
            height: 38px;
            cursor: pointer;
            z-index: 4;
            transition: 0.3s ease-in;
            position: ${active ? "fixed" : "relative"};
            display: flex;
            margin-right: auto;
            top: ${active ? "5%" : "0"};
            left: ${active ? "55%" : "0"};
          }
          .meat {
            position: absolute;
            width: 28px;
            height: 2px;
            background-color: ${burgerColor};
            top: calc(50% - 2px / 2);
            transition: all 150ms ease-in;
          }
          .meat-1 {
            transform: translateY(-10px);
          }
          .meat-2 {
            width: calc(28px - 6px);
          }
          .meat-3 {
            transform: translateY(10px);
          }
          .active .meat-1 {
            transform: rotate(45deg);
          }
          .active .meat-2 {
            opacity: 0;
          }
          .active .meat-3 {
            transform: rotate(-45deg);
          }

          @media (min-width: 769px) {
            .container {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
