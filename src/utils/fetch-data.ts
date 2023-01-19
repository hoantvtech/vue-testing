import { ref, isRef, watchEffect } from "vue";

export function useFetch(url: string) {
  const data = ref(null);
  const error = ref(null);

  function doFetch() {
    data.value = null;
    error.value = null;

    fetch(url)
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err));
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch);
  } else {
    // otherwise, just fetch once
    // and avoid the overhead of a watcher
    doFetch();
  }

  return { data, error };
}
