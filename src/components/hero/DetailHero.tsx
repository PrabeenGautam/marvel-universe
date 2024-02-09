import Image from "@/components/shared/Image";
import Container from "@/components/container/Container";
import BackgroundHeroComponent from "./BackgroundHero";

import getThumbnailUrl from "@/helpers/getThumbnailUrl";
import { CommonResouces, Creator, Thumbnail } from "@/types";

interface Props {
  title: string;
  description: string;
  thumbnail: Thumbnail;
  creators: CommonResouces<Creator>;
  date: string | null;
}

function DetailHero({ title, description, thumbnail, creators, date }: Props) {
  const image = getThumbnailUrl(thumbnail);

  return (
    <div className="relative min-h-dvh">
      <BackgroundHeroComponent
        url={image}
        opacity={0.95}
        scale={2}
        position="top"
      />

      <Container>
        <div className="mt-8 flex flex-col gap-20 lg:flex-row">
          <div className="mx-auto w-full max-w-96 lg:max-w-[21.875rem]">
            <Image src={image} alt={title} className="w-full" />
          </div>

          <div className="w-full space-y-8 px-8">
            <h1 className="max-w-[31.25rem] text-2xl font-semibold ">
              {title}
            </h1>

            {
              <div className="space-y-2">
                <strong className="text-xl font-bold">Published:</strong>
                <p>{date || "N/A"}</p>
              </div>
            }

            <div className="grid w-full gap-x-8 gap-y-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {creators.items.map((creator, index) => {
                const key = `${creator.role}-${index}`;

                return (
                  <div key={key} className="space-y-2">
                    <strong className="text-xl font-bold capitalize">
                      {creator.role}:
                    </strong>
                    <p className="break-words">{creator.name}</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2">
              <strong className="text-xl font-bold">Description:</strong>
              <p>{description || "N/A"}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailHero;
