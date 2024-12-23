import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Err = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]  text-gray-800">
      <div className="text-center p-6 max-w-lg">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="text-xl mt-4">
          Oops! The page you are looking for is under construction or
          doesn&apos;t exist.
        </p>
        <p className="text-lg mt-2">Let&apos;s get you back on track.</p>
        <Link to="/" className="inline-block mt-6">
          <Button className="px-8 py-6 text-lg font-semibold text-white  rounded-md transition-colors">
            Go home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Err;
