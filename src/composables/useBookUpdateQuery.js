import { useMutation } from "@vue/apollo-composable";
import UPDATE_BOOK from "../graphql/updateBook.mutation.gql";

export default function useBooksQuery(id, rating) {
  const {
    mutate: updateBook,
    loading,
    onDone,
  } = useMutation(UPDATE_BOOK, () => ({
    variables: {
      id,
      rating: parseFloat(rating.value),
    },
  }));

  return {
    updateBook,
    onDone,
    loading,
  };
}
