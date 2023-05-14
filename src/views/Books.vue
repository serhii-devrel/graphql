<template>
  <div class="books">
    <div class="empty-books-list" v-if="!loading && !booksLength">
      <TypographyTitle :level="4">Nothing to show</TypographyTitle>
    </div>
    <div class="loader" v-else-if="loading">
      <TypographyTitle :level="2">Loading content...</TypographyTitle>
    </div>
    <div class="books-content" v-else>
      <div class="books-title">
        <TypographyTitle :level="2">Books list:</TypographyTitle>
      </div>
      <div class="books__item" v-for="book in books" :key="book.id">
        <Card :title="book.author" :loading="loading">
          <div class="books__description">{{ book.description }}</div>
          <template #actions>
            <div class="books-actions__rate">
              <Rate :value="book.rating" disabled />
            </div>
            <div
              class="books-actions__edit"
              @click="$emit('editBook', book.id)"
            >
              <EditOutlined key="edit" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { Card, Rate, TypographyTitle } from "ant-design-vue";
import { EditOutlined } from "@ant-design/icons-vue";

export default {
  props: {
    books: { type: Object, required: true },
    loading: { type: Boolean, required: true },
  },
  name: "Books",
  components: { Card, Rate, EditOutlined, TypographyTitle },

  setup(props) {
    const booksLength = computed(() => props.books.length);

    return { booksLength };
  },
};
</script>

<style scoped>
.books__item {
  padding-bottom: 20px;
}
</style>
