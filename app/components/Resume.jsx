import Link from "next/link";

export default function Resume() {
  return (
    <section className="w-full pt-4 justify-between px-6 flex bg-black text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Resume </h2>
      

      <Link
        href="https://drive.google.com/drive/folders/1DMXYMAOIziWTFKtmkWmY6CKqj4bigLHU?usp=drive_link" // ✅ Replace with your actual resume path
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white hover:bg-[#10a87a] text-black font-semibold px-6 py-3 rounded-full shadow transition"
      >
        Resume
      </Link>
    </section>
  );
}
