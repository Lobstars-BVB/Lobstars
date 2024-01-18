import { z } from "astro/zod";

const PROJECT_ID = "1f2dy4kx";
const DATASET = "production";

const jsonSchema = z.object({
  result: z.array(z.unknown()),
});

const heroSchema = z
  .object({
    title: z.string(),
    subtitle: z.string(),
  })
  .partial()
  .array();

type CmsType = "hero";

export const getCMS = async (type: CmsType) => {
  const QUERY = encodeURIComponent(`*[_type == "${type}"]`);

  const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  const json = await fetch(URL).then((res) => res.json());
  jsonSchema.parse(json);

  if (type === "hero") {
    return heroSchema.parse(json.result)[0];
  }

  throw Error(`CMS for ${type} not found`);
};
