import { cn } from "~/features/shared/helpers/cn";

export default function InfoCardDescription() {
  const sharedStyles = "font-default block py-2 text-base md:text-lg";

  return (
    <>
      <span className={cn(sharedStyles)}>
        I&apos;m a <strong>Full Stack Software Engineer</strong>
      </span>
      <span className={cn(sharedStyles)}>
        I&apos;m <strong>experienced</strong> in translating complex business requirements into technical solutions,
        creating enterprise web apps that automate/simplify/quantify workflows
      </span>
      <span className={cn(sharedStyles)}>
        {" "}
        As someone who enjoys building long-term solutions and sharing knowledge, I believe I can bring great{" "}
        <strong>value</strong> to <strong>your</strong> team
      </span>
    </>
  );
}
