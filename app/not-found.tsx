import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 flex items-center justify-center px-6 bg-brand-cream">
      <div className="text-center">
        <p className="font-display text-9xl text-brand-navy/10 font-bold">404</p>
        <h1 className="font-display text-3xl text-brand-navy mb-4 -mt-8">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
