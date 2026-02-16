import Image from "next/image";
import { Suspense } from "react";
import LoadingMui from "../muiComponent/LoadingMui";
import BlogsList from "./BlogsList";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import MovingIcon from "@mui/icons-material/Moving";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import CodeIcon from "@mui/icons-material/Code";

const HomeBlog = () => {
  return (
    <div className="">
      <div className="relative w-full h-80">
        <Image
          src={"/images/blogbanner.jpg"}
          alt="post thumbnail"
          fill
          loading="eager"
          className="object-cover rounded-md"
        />
      </div>
      <div className="mt-5">
        <Suspense fallback={<LoadingMui />}>
          <h3 className="mb-2">
            <MovingIcon className="me-2" />
            Latest blogs
          </h3>

          <BlogsList limit={3} />
          <h3 className="mb-2">
            <LocalAirportIcon className="me-2" />
            Latest Travelling blogs
          </h3>
          <BlogsList limit={3} category={"Travelling"} />
          <h3 className="mb-2">
            <LocalDiningIcon className="me-2" />
            Latest Cooking blogs
          </h3>
          <BlogsList limit={3} category={"Cooking"} />
          <h3 className="mb-2">
            <CodeIcon className="me-2" />
            Latest Coding blogs
          </h3>
          <BlogsList limit={3} category={"Coding"} />
        </Suspense>
      </div>
    </div>
  );
};
export default HomeBlog;
