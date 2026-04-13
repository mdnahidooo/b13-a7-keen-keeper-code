import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4">

            {/* BIG ERROR CODE */}
            <h1 className="text-7xl font-extrabold text-[#244D3F]">
                404
            </h1>

            {/* TITLE */}
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Page Not Found
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-2 text-gray-500 max-w-md">
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>

            {/* BUTTON */}
            <Link
                href="/home"
                className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-md hover:opacity-90 transition"
            >
                Go Back Home
            </Link>

        </div>
    );
}