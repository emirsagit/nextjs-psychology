type Props = {
  children: React.ReactNode;
  bgColor?: string;
};

export default function Break({ bgColor, children }) {
  return (
    <div className="break">
      {children}
      <style jsx>
        {`
          .break {
            background-color: ${bgColor ? bgColor : "var(--dark-color-primary)"};
            width: 100%;
            height: 24px;
          }
        `}
      </style>
    </div>
  );
}
