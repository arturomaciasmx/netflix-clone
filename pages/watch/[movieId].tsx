import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="w-screen h-screen bg-black">
      <nav className="py-4 px-3 flex items-center gap-3 absolute z-10 top-0">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={30}
        />
        <p className="text-white">
          <span>Watching: </span> {data?.title}
        </p>
      </nav>
      <video className="w-screen h-screen" autoPlay controls src={data?.videoUrl}></video>
    </div>
  );
};

export default Watch;
