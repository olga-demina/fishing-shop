export function useGetImageUrl(name) {
  return new URL(`../assets/img/fish/${name}`, import.meta.url).href;
}
