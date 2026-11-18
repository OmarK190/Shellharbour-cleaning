import { IMAGES, image, validateManifest, type ManifestImage } from "@/content/images/manifest";

const sample = (over: Partial<ManifestImage>): ManifestImage => ({
  id: "x",
  src: "/images/x.jpg",
  alt: "Cleaner wiping a kitchen bench in Shell Cove",
  width: 1600,
  height: 1067,
  sourceType: "stock-people",
  credit: "Jane Doe, Unsplash, https://unsplash.com/photos/abc",
  showsPeople: true,
  ...over,
});

test("current manifest is valid", () => {
  expect(validateManifest(IMAGES)).toEqual([]);
});

test("people images may never be AI-generated", () => {
  expect(validateManifest([sample({ sourceType: "ai-scene", showsPeople: true })]).join(" ")).toMatch(/AI/);
});

test("alt text and credit are required", () => {
  const errs = validateManifest([sample({ alt: "img", credit: "" })]).join(" ");
  expect(errs).toMatch(/alt/);
  expect(errs).toMatch(/credit/);
});

test("ids and srcs are unique", () => {
  expect(validateManifest([sample({}), sample({})]).join(" ")).toMatch(/duplicate/);
});

test("image() throws for unknown ids", () => {
  expect(() => image("nope")).toThrow(/Unknown image/);
});
