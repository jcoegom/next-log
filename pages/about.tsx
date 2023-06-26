import { useRouter } from "next/router";

const About = ({ name }: { name: string }) => {
  const router = useRouter();
  const { value } = router.query;
  if (value == "err") throw new Error("Value error");
  return <div>About</div>;
};

export default About;
