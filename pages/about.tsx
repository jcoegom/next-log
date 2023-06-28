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
  /* const urlServer = "http://localhost:8000";
  const response = await fetch(urlServer);
  const data = response.json(); */
  /*  let result = await fetch(".netlify/functions/about-data");
  let data = await result.json();
  const { name, subname } = data;
 */
  const name = "Jose";
  const subname = "SubnameServer";
  return {
    props: {
      name,
      subname,
    },
    // Re-generate this page every 10 seconds (for demonstration purposes)
    revalidate: 10,
  };
}

export default About;
