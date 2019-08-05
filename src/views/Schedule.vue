<template>
    <a-card title="Schedule">
        <div :style="{ border: '1px solid #d9d9d9', borderRadius: '4px' }">
            <a-calendar :fullscreen="false" @panelChange="changePanel" @change="selectDate"></a-calendar>
        </div>
        <div>

        </div>
    </a-card>
</template>

<script>
export default {
    methods: {
        changePanel(value, mode){
            console.log('value :', value);
            console.log('mode :', mode);
        },
        selectDate(value){
            console.log('date value :', value.toDate());
        }
    },
}
</script>

<style>

</style>
