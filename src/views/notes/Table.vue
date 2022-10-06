<template>
    <div class="container">
        <div class="row">
            <h3 class="mb-4 mt-2">Table of Note</h3>
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Subject</th>
                        <th>Published</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(note, no) in notes" :key="note.id">
                        <td>{{ ++no }}</td>
                        <td>
                            <router-link :to="{name: 'notes.show', params: { noteSlug: note.slug }}">
                                {{ note.title }}
                            </router-link>
                        </td>
                        <td>{{ note.subject }}</td>
                        <td>{{ note.published }}</td>
                        <td>
                            <router-link :to="{name: 'notes.edit', params: { noteSlug: note.slug }}" class="btn btn-warning btn-sm text-light"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></router-link>

                            <delete-note :endpoint="note.slug" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import DeleteNote from "./Delete"

    export default {
        components: {
            DeleteNote
        },

        data() {
            return {
                notes: [],
            };
        },

        mounted() {
            // axios.get("/api/notes").then((response) => {
            //     this.notes = response.data.data;
            // });

            this.getNotes()
        },

        methods: {
            async getNotes(){
                let {data} = await axios.get('/api/notes')
                this.notes = data.data
            }
        }
    };
</script>
