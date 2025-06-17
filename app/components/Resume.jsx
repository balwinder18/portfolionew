import Link from "next/link";

export default function Resume() {
  return (
    <section className="w-full px-4 py-8 bg-black text-white">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
      Checkout my <span className="text-[#10a87a]">Resume</span> here
    </h2>

    <Link
      href="https://drive.google.com/drive/folders/1DMXYMAOIziWTFKtmkWmY6CKqj4bigLHU?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 sm:mt-0 inline-block bg-white hover:bg-[#10a87a] text-black font-medium text-sm sm:text-base px-6 py-2 sm:px-6 sm:py-3 rounded-full shadow transition duration-300"
    >
      View Resume
    </Link>
  </div>
</section>

  );
}
