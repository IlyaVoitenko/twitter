import Link from "next/dist/client/link";
import { PAGES } from "../config/pages.config";
const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link href={PAGES.HOME}>Go back to Home</Link>
    </div>
  );
};

export default NotFound;
