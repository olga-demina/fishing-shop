export function useGetImageUrl(name: string): string {
  return new URL(`../assets/img/fish/${name}`, import.meta.url).href;
}
