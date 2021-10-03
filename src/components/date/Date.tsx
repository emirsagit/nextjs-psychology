import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, "dd.MM.yyyy")}</span>
      <style jsx>
        {`
          span {
            position: absolute;
            text-align: center;
            font-size: 0.8rem;
            color: white;
            font-weight: 200;
            margin: auto;
            width: 100%;
            bottom: 10px;
            z-index: 1;
          }
        `}
      </style>
    </time>
  );
}
