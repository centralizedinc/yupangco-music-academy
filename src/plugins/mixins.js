export default {

    install(Vue) {
        Vue.mixin({
            methods: {
                deepCopy(obj) {
                    return JSON.parse(JSON.stringify(obj));
                },
                getCourse(index) {
                    return ["Drums", "Wind", "Voice", "Piano", "Violin", "Guitar"][index]
                },
                getLevel(index) {
                    return ["Primary", "Intermediate", "Advance"][index]
                },
                getLesson(index) {
                    return [12, 24, 48][index]
                }
            }
        });
    }

}