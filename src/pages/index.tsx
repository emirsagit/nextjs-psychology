import Layout from "../components/layout/Layout";
import Title from "../components/title/Title";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <Title />
        {/* <SocialList /> */}
      </div>
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
    </Layout>
  );
}
