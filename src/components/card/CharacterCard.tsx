import Image from "../shared/Image";

function CharacterCard() {
  return (
    <div className="clip-border group w-52 cursor-pointer  bg-black transition-all after:absolute after:inset-0 after:z-20 hover:after:bg-black/40">
      <div className="img-wrapper h-52 w-full overflow-hidden">
        <Image
          src="https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          alt="character"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="before:absolute before:inset-x-0 before:h-2 before:bg-red-500">
        <div className="space-y-3 px-4 py-6 ">
          <h2 className="text-lg font-bold  uppercase text-white">3-D Man</h2>
          <p className="line-clamp-3 text-sm text-[#bbb]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor, sit amet consectetur adipisicing
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
