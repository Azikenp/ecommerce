import SanityClient from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const client = SanityClient({
  projectId: "ri9l6x1o",
  dataset: "production",
  apiVersion: "2025-01-12",
  useCdn: "true",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
