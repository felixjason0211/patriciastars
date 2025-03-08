import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "5vftawys",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
