import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import ALL_BOOKS_QUERY from "../graphql/allBooks.query.gql";

export default function useBooksQuery(searchBy, debounce = 0) {
  const { result, loading } = useQuery(
    ALL_BOOKS_QUERY,
    () => ({
      search: searchBy.value,
    }),
    () => ({
      debounce,
    })
  );

  const books = computed(() => result.value?.allBooks ?? []);

  return {
    books,
    loading,
  };
}
