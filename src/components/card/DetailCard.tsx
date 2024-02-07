import Image from "../shared/Image";

function DetailCard() {
  return (
    <div className="group max-w-52 cursor-pointer">
      <div className="img-wrapper h-auto w-full overflow-hidden">
        <Image
          src="https://cdn.marvel.com/u/prod/marvel/i/mg/3/d0/60d35941765ee/portrait_uncanny.jpg"
          alt="character"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <a href="#" className="title font-medium group-hover:text-red-500">
          Avengers ft. Nova: Saving The Day #1
        </a>
        <span className="description text-sm">Asmus, Vito</span>
      </div>
    </div>
  );
}

export default DetailCard;
