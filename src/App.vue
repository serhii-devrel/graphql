<template>
  <div class="content">
    <div class="content__search">
      <Search v-model="pattern" />
    </div>
    <div class="content__books">
      <Books
        :books="books"
        :loading="loading"
        @editBook="(id) => (activeBook = id)"
      />
    </div>
    <div class="content__edit">
      <EditBook
        v-if="!!activeBook"
        :bookId="activeBook"
        @onEditDone="onEditDone"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import EditBook from "./views/EditBook.vue";
import Books from "./views/Books.vue";
import Search from "./shared/Search.vue";
import useBooksQuery from "./composables/useBooksQuery";

export default {
  name: "App",
  components: { Books, EditBook, Search },

  setup() {
    const pattern = ref("");
    const activeBook = ref(null);

    const { books, loading } = useBooksQuery(
      computed(() => pattern.value),
      500
    );

    const onEditDone = () => {
      activeBook.value = null;
    };

    return { books, activeBook, loading, pattern, onEditDone };
  },
};
</script>

<style scoped>
.content__search {
  padding: 0 30px 0 30px;
  margin: 10px 0 50px 0;
}

.content__books {
  padding: 0 30px 0 30px;
}
</style>
