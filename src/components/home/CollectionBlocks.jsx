// src/components/home/CollectionBlocks.jsx
import { collections } from "./data";

export default function CollectionBlocks() {
  return (
    <section className="w-full">
      {collections.map((item) => (
        <section
          key={item.id}
          className="
            relative
            h-[100vh]
            min-h-[640px]
            bg-center
            bg-cover
            bg-no-repeat
            flex
            items-center
            justify-center
          "
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundAttachment: "fixed",
          }}
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/1" />

          {/* CONTENT */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-[48px] font-semibold tracking-[0.16em]">
              {item.title}
            </h2>

            <button
              className="
                    mt-6
                    px-7 py-3
                    bg-white
                    text-black
                    text-[20px]
                    tracking-[0.12em]   /* ← hẹp lại ở đây */
                    hover:bg-black hover:text-white
                    transition
                  "
            >
              {item.button}
            </button>
          </div>
        </section>
      ))}
    </section>
  );
}
