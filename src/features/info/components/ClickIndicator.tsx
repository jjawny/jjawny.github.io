export default function ClickIndicator() {
  return (
    <div className="absolute right-[2px] bottom-0 duration-200 hover:scale-125" style={{ width: "5vw", height: "5vw" }}>
      <img
        src={"/images/click.gif"}
        alt="click to learn more about my career as a full stack software/web engineer/developer"
        sizes="5vw"
        style={{ rotate: "-30deg", objectFit: "cover", userSelect: "none" }}
      />
    </div>
  );
}
