import Image from "next/image";

export function Ribbon() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* Ribbon body */}
      <div className="animate-ribbonDrop rounded-t-md border border-neutral-300 bg-[#E9E3DC] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
        <div className="p-6">
          <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full bg-neutral-200 sm:w-48">
            {/* Optional avatar placeholder; swap with <Image> later */}
            <Image
              alt="avatar placeholder"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLz4="
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Chevron notch */}
        <div className="mx-auto h-8 w-8 -translate-y-4 rotate-45 border-b border-l border-neutral-300 bg-[#E9E3DC]" />
      </div>
    </div>
  );
}
