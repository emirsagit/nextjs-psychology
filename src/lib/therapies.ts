import therapies from "../../content/therapies/therapies.json";

export type TherapyContent = {
  readonly slug: string;
  readonly title: string;
  readonly seo_title: string;
  readonly seo_description: string;
  readonly img1: string;
  readonly img2?: string;
  readonly body: string;
  readonly list_title: string;
  readonly list: string[];
};

export type TherapylinkContent = {
  readonly path: string;
  readonly title: string;
  readonly slug: string;
};

const therapyMap: { [key: string]: TherapyContent } = generateTherapyMap();

function generateTherapyMap(): { [key: string]: TherapyContent } {
  let result: { [key: string]: TherapyContent } = {};
  for (const therapy of therapies) {
    result[therapy.slug] = therapy;
  }
  return result;
}

export function getTherapy(slug: string) {
  return therapyMap[slug];
}

export function listTherapies(): TherapyContent[] {
  return therapies;
}

export function getTherapiesLink(): TherapylinkContent[] {
  return listTherapies().map((therapy) => {
    const { slug, title } = therapy;
    const path = `/services/${slug}`;
    return { path, title, slug };
  });
}
