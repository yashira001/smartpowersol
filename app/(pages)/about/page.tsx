import { Metadata } from "next";
import Body from "./body";

export const metadata: Metadata = {
  title: `About Us | Smart Tech & Power Solutions Nig Ltd`,
  description: `Learn about Smart Tech & Power Solutions' mission to provide sustainable energy and security solutions in Nigeria. Discover our values, expertise, and commitment to innovation.`,
};

export default function Page() {
  return <Body />;
}
