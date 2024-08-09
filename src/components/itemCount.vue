<script>
    export default {
        emits: ['count'],

        data() {
            return {
                count: 1,
            }
        },

        methods: {
            plusItem() {
                if (this.count < 3) {
                    this.count += 1;
                } else {
                    alert('最多三件')
                    return
                }
                this.$emit('count', this.count);
            },

            minusItem() {
                if (this.count <= 1) {
                    alert('最少一件');
                    return
                } else {
                    this.count -= 1;
                }
                this.$emit('count', this.count);
            }
        }
    }
</script>

<template>
    <button class="btn minusBtn" type="button" id="button-addon1" @click="minusItem">-</button>
    <input type="text" class="form-control itemCount" :value="count" style="width: 35px;">
    <button class="btn plusBtn" type="button" id="button-addon1" @click="plusItem">+</button>
</template>

<style>
</style>