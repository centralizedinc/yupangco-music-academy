<template>
    <a-card title="Schedule">
        <div :style="{ border: '1px solid #d9d9d9', borderRadius: '4px' }">
            <a-calendar :fullscreen="false" @panelChange="selectDate"></a-calendar>
        </div>
        <div>

        </div>
    </a-card>
</template>

<script>
export default {
    methods: {
        selectDate(value, mode){
            console.log('value :', value);
            console.log('mode :', mode);
        }
    },
}
</script>

<style>

</style>
