import Link from "next/link";

const InfoCardAttribution: React.FC = () => {
  return (
    <p className="attribution">
      <Link target="_blank" href="https://skfb.ly/MWtY">
        <i className="underline">MacBook</i>
      </Link>{" "}
      {/* CC Attribution (CC BY 4.0) */}
      by chrisgreig
    </p>
  );
};

export default InfoCardAttribution;
