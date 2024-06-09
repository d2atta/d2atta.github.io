import type { CollectionEntry } from "astro:content";

const getSortedProjects = (projects: CollectionEntry<"project">[]) => {
  return projects;
};

export default getSortedProjects;
