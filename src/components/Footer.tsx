const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full px-4 py-2 text-right font-monument text-[11px] font-extrabold text-stone-700">
      <p>Build #{process.env.NEXT_PUBLIC_BUILD_NUMBER ?? "?"}</p>
    </div>
  );
};

export default Footer;
