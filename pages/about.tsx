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
  let name = "";
  let subname = "";
  let data = null;
  try {
    let result = await fetch(".netlify/functions/about-data");
    data = await result.json();
  } catch (err) {
    console.log("ERRORRRRRRRRRRRRRRRRr", err);
  }
  name = data?.name ?? "nameNotReceived";
  subname = data?.subname ?? "subnameNotReceived";

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
