<template>
    <div>
        current time {{ time }}
    </div>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import moment from 'moment';

@Component
export default class Timer extends Vue {
    time: string;
    timerRef: number | undefined;

    constructor() {
        super();
        this.time = '';
    }

    startTimer() {
        const self = this;
        self.timerRef = setInterval(() => {
            self.time = moment().format('DD-MMMM-YYYY HH:mm:ss a');    
        }, 1000);
        
    }

    clearTimer() {
        if (this.timerRef) {
            clearInterval(this.timerRef);
        }
    }

    mounted() {
        this.startTimer();
    }

    beforeDestroy() {
        this.clearTimer();
    }

}
</script>