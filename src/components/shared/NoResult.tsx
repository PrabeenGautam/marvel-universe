import Image from "./Image";

interface Props {
  title: string;
  description?: string;
}

function NoResult({ title, description }: Props) {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/static/dark-illustration.png"
        alt="No Result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <h2 className="mt-8 text-xl font-bold leading-[42px] tracking-tighter">
        {title}
      </h2>
      <p className="my-3.5 max-w-md text-center text-sm font-normal leading-[19.6px] text-[#DCE3F1]">
        {description}
      </p>
    </div>
  );
}

export default NoResult;
