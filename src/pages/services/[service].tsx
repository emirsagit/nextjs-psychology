import { GetStaticProps, GetStaticPaths } from "next";
import { Layout, OpenGraphMeta, BasicMeta, TwitterCardMeta, TherapyLayout } from "../../components/index";
import { TherapyContent, getTherapy, listTherapies } from "../../lib/therapies";

type Props = {
  therapy: TherapyContent;
};

export default function Index({ therapy }: Props) {
  const url = "/services/" + therapy.slug;
  const title = therapy.seo_title;
  return (
    <Layout>
      <h1 className="global-therapy-title">{therapy.title}</h1>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TherapyLayout therapy={therapy} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTherapies().map((it) => "/services/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.service as string;
  const therapy = getTherapy(slug);
  return {
    props: {
      therapy,
    },
  };
};
