<template>
  <div class="card">
    <div class="content">{{ content }}</div>
    <div style="display: flex; flex-direction: row; margin-top: 0.5em">
      <div class="date">{{ date }}</div>
      <font-awesome-icon @click="deleteNote()" class="delete-icon" icon="fa-solid fa-trash" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "date", "id"],
  data() {
    return {
      color: [
        "rgb(239, 236, 159)",
        "rgb(187, 239, 159)",
        "rgb(159, 239, 224)",
        "rgb(159, 183, 239)",
        "rgb(167, 159, 239)",
        "rgb(214, 159, 239)",
        "rgb(239, 194, 159)",
        "rgb(239, 159, 159)",
      ][Math.floor(Math.random() * 8)],
    };
  },
  methods: {
    deleteNote() {
      const arr = JSON.parse(localStorage.getItem("notes"));
      JSON.parse(localStorage.getItem("notes")).map((note, i) => {
        if (note.id === this.id) {
          delete arr[i];
        }
        return 0;
      });
      localStorage.setItem("notes", JSON.stringify(arr));
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 15%;
  background-color: v-bind(color);
  padding: 1em;
  margin: 1em;
  border-radius: 0.3em;
}
.card .content {
  color: #2c3e50;
  text-align: left;
}
.card .date {
  color: #2c3e50;
  text-align: left;
  margin-right: auto;
  user-select: none;
}

.delete-icon:hover {
  opacity: 0.9;
}

.delete-icon {
  cursor: pointer;
}
</style>
