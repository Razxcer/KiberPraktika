export const useProjectFetch = <T>(url: string, options = {}) => {
  const config = useRuntimeConfig();
  
  // Автоматически подставляем базовый URL к каждому запросу
  return useFetch<T>(url, {
    baseURL: config.public.apiBase,
    ...options
  });
};