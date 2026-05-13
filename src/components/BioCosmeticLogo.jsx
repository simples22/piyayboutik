import Link from "next/link";

export default function BioCosmeticLogo({ href = "/", className = "" }) {
  return (
    <Link href={href} className={`pbBioCosmeticLogo ${className}`.trim()}>
      <span className="pbBioCosmeticVertical">ave</span>
      <span className="pbBioCosmeticHorizontal">COSMETICS</span>
    </Link>
  );
}