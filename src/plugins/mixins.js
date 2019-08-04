import service_fees from './service_fees.json'

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
                },
                getServiceFee(course, level, lesson) {
                    console.log('service_fees :', service_fees);
                    console.log('course :', course);
                    console.log('level :', level);
                    console.log('lesson :', lesson);
                    var key = Object.keys(service_fees)[course]
                    var fees = service_fees[key];

                    var amount = fees.find(
                        x => x.level === level && x.lesson === lesson
                    );
                    return amount && amount.cost ? amount.cost : null;
                },
                parseCurrency(x) {
                    if (!x || isNaN(x)) return "₱ 0.00"
                    return "₱ " + parseFloat(x).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
            }
        });
    }

}