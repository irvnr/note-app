<template>
    <button ref="delNote" @click="destroyNote" class="btn btn-danger btn-sm" style="margin-left: 5px;">
        <font-awesome-icon icon="fa-solid fa-trash" />
    </button>
</template>

<script>
    import axios from 'axios'

    export default {
        props: ['endpoint'],

        methods: {
            async destroyNote() {
                let q = window.confirm("Are you sure ?")
                if (q == true) {
                    let response = await axios.delete(`/api/notes/${this.endpoint}/delete`)

                    if (response.status === 200) {
                        this.$toasted.show(response.data.message, {
                            type: "success",
                            duration: 3000,
                        })

                        this.$refs.delNote.parentNode.parentNode.remove()
                    }
                }
            }
        }
    }
</script>
