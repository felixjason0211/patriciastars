import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "v2m6ljmr",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
