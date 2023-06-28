import { useRouter } from "next/router";

const About = ({ name, subname }: { name: string; subname: string }) => {
  const router = useRouter();
  const { value } = router.query;
  if (value == "err") throw new Error("Value error");
  return (
    <div>
      About
      <br />
      name:{name}
      <br />
      subname:{subname}
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from an API or perform any async operations

  return {
    props: {
      name: "Jose",
      subname: "Props",
    },
    // Re-generate this page every 10 seconds (for demonstration purposes)
    revalidate: 10,
  };
}

export default About;
