export const useProjectFetch = <T>(url: string, options = {}) => {
  const config = useRuntimeConfig();
  return useFetch<T>(url, {
    baseURL: config.public.apiBase,
    ...options,
  });
};
