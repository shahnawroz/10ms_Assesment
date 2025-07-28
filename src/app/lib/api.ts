export async function fetchIELTSCourse(lang: 'en' | 'bn' = 'en') {
  const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
    headers: {
      'X-TENMS-SOURCE-PLATFORM': 'web',
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch IELTS course data');
  }

  const json = await res.json();
  return json.data;
}
