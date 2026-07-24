import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-green-700 text-white hover:bg-green-800"
      : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 ${styles}`}
    >
      {children}
    </Link>
  );
}