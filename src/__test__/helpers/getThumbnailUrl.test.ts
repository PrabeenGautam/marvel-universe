import getThumbnailUrl from "@/helpers/getThumbnailUrl";

describe("getThumbnailUrl", () => {
  test("returns default image URL when thumbnail is null", () => {
    const thumbnail = null;
    const expectedUrl =
      "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    expect(getThumbnailUrl(thumbnail)).toBe(expectedUrl);
  });

  test("returns default image URL when thumbnail is undefined", () => {
    const thumbnail = undefined;
    const expectedUrl =
      "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    expect(getThumbnailUrl(thumbnail)).toBe(expectedUrl);
  });

  test("returns correct URL when thumbnail is provided", () => {
    const thumbnail = {
      path: "http://example.com/image",
      extension: "jpg",
    };
    const expectedUrl = "https://example.com/image.jpg";
    expect(getThumbnailUrl(thumbnail)).toBe(expectedUrl);
  });
});
