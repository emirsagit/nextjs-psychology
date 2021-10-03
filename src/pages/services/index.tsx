import { GetStaticProps } from "next";
import { Layout, OpenGraphMeta, BasicMeta, TwitterCardMeta, TherapyList } from "../../components/index";
import { TherapyContent, listTherapies } from "../../lib/therapies";

type Props = {
  therapies: TherapyContent[];
};

export default function Index({ therapies }: Props) {
  const url = "/services";
  const title = "Services";
  return (
    <Layout>
      <h1 className="h1">Services</h1>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TherapyList therapies={therapies} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const therapies = listTherapies();
  return {
    props: {
      therapies,
    },
  };
};
