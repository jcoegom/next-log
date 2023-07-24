import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const About = ({ name, subname }: { name: string; subname: string }) => {
  const router = useRouter();
  const { value } = router.query;
  if (value == "err") throw new Error("Value error");
  useEffect(() => {
    fetch(".netlify/functions/my-function")
      .then((x) => x.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      About
      <br />
      name:{name}
      <br />
      subname:{subname}
      <Link href={"/"}>Home</Link>
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
    //function is called from server, so, we need to use endpoint.
    let result = await fetch(
      "https://logerrors.netlify.app/.netlify/functions/about-data"
    );
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
    revalidate: 60,
  };
}

export default About;
