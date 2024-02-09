import Image from "@/components/shared/Image";
import Container from "@/components/container/Container";
import BackgroundHeroComponent from "./BackgroundHero";

import getThumbnailUrl from "@/helpers/getThumbnailUrl";
import { CommonResouces, Creator, Thumbnail, DateObject } from "@/types";

interface Props {
  title: string;
  description: string;
  thumbnail: Thumbnail;
  creators: CommonResouces<Creator>;
  dates: DateObject[];
}

function DetailHero({ title, description, thumbnail, creators, dates }: Props) {
  const image = getThumbnailUrl(thumbnail);

  const published = new Date(dates[0].date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative min-h-[min(768px,100dvh)]">
      <BackgroundHeroComponent
        url={image}
        opacity={0.95}
        scale={2}
        position="top"
      />

      <Container>
        <div className="mt-8 flex gap-20">
          <div className="w-full max-w-[21.875rem]">
            <Image src={image} alt={title} className="w-full" />
          </div>

          <div className="w-full space-y-8">
            <h1 className="max-w-[31.25rem] text-2xl font-semibold ">
              {title}
            </h1>

            <div className="space-y-2">
              <strong className="text-xl font-bold">Published:</strong>
              <p>{published}</p>
            </div>

            <div className="grid w-full grid-cols-2 gap-4">
              {creators.items.map((creator, index) => {
                const key = `${creator.role}-${index}`;

                return (
                  <div key={key} className="space-y-2">
                    <strong className="text-xl font-bold capitalize">
                      {creator.role}:
                    </strong>
                    <p>{creator.name}</p>
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
