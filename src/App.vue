<template>
  <div class="overlay">
    <div class="modal">
      <textarea v-model="note" name="note" cols="30" rows="10"></textarea>
      <div>
        <button class="submit-button" @click="addNote()" @keydown="doNothing()">Ekle</button>
        <button class="close-button" @click="modal = 'none'" @keydown="doNothing()">Kapat</button>
      </div>
    </div>
  </div>
  <div class="header">
    <span class="title">Notlar</span>
    <button @click="openModal()" class="add-button">+</button>
  </div>
  <div class="notes">
    <Note
      v-for="note in notes"
      :content="note.content"
      :id="note.id"
      :key="note.id"
      :date="note.date"
    />
  </div>
</template>

<script>
import { v4 as uuidV4 } from "uuid";
import Note from "./components/NoteElement.vue";

export default {
  name: "App",
  components: {
    Note,
  },
  data() {
    return {
      modal: "none",
      notes: [],
      note: "",
    };
  },
  methods: {
    openModal() {
      this.modal = "flex";
    },
    addNote() {
      const time = new Date();
      this.notes.push({
        id: uuidV4(),
        content: this.note,
        date: `${time.getUTCDate()}/${time.getUTCMonth() + 1}/${time.getFullYear()}`,
      });
      this.modal = "none";
      this.note = "";
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
  },
  mounted() {
    this.notes = JSON.parse(localStorage.getItem("notes"));
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1em 7%;
}
.header {
  display: flex;
  width: 100%;
  background-color: #2c3e50;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  border-radius: 100px;
  user-select: none;
}
.header .title {
  color: white;
  margin-left: 2em;
  font-size: 1.3rem;
}
.header .add-button {
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  font-size: 1.5em;
  cursor: pointer;
}
.header .button:hover {
  opacity: 0.8;
}
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 86%;
  height: 86%;
  opacity: 1;
  z-index: 10;
  display: v-bind(modal);
}
.overlay .modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;
  background-color: rgb(43, 41, 52);
  padding: 1em;
  border-radius: 1em;
}
.overlay .modal .submit-button {
  margin-top: 1em;
  padding: 0.5em 0.7em;
  background-color: rgb(200, 228, 252);
  color: #2c3e50;
}
.overlay .modal .close-button {
  margin-top: 1em;
  padding: 0.5em 0.7em;
  background-color: rgb(255, 185, 185);
  color: #2c3e50;
}
.overlay .modal textarea {
  padding: 1em;
}
.notes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
