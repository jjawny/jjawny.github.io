import { useRef } from "react";

const Credits = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={elementRef}
      className="content center mt-40 flex h-40 flex-col space-y-3 text-center text-xs text-gray-600"
    >
      <p className="w-fit self-center">
        <a className="italic" href="https://skfb.ly/DXqI">
          Hotline Miami 2: Wrong Number - Tony mask
        </a>{" "}
        by down_limit
      </p>
      <p className="w-fit self-center">
        <a
          className="italic"
          href="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzc5MmVlNDNiMTc4Y2NmNjhmNzczNDFlMTRhNjQ5MmJiNmVhZGZiYiZjdD1n/g0gAJDvoNJBSwx8wP0/giphy.gif"
        >
          Glow Black And White
        </a>{" "}
        by Erica Anderson
      </p>
      <p className="w-fit self-center">
        ©{" "}
        <a className="italic" href="https://www.linkedin.com/in/johnnymadigan">
          Johnny Madigan
        </a>
      </p>
    </div>
  );
};

export default Credits;
