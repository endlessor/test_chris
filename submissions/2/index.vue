<template>
  <div id="items">
    <h1>My Items</h1>
    <div
      class="item"
      v-for="(value, propertyName) in groups"
      :key="propertyName"
    >
      <h3>Items with Score {{ propertyName }}</h3>
      <ul>
        <li
          v-for="val in value"
          :key="val.name"
          :class="[value.length > 1 ? '' : 'only-one']"
        >
          {{ val.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    items: {
      type: Object,
    },
  },
  data() {
    const groups = {};
    let items = this.items.items;
    items.sort((a, b) => {
      if (a < b) return 1;
      return -1;
    });
    for (let item of items) {
      if (groups[item.score]) groups[item.score].push(item);
      else groups[item.score] = [item];
    }
    return { groups };
  },
};
</script>
