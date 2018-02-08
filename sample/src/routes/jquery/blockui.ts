import { IAutBlockUIOption } from './../../../../src/components/jquery/block-ui/aut-block-ui-option';
import { bindingMode, bindable } from 'aurelia-framework';


export class Blockui {

    private blockPageSpinnerText = 'Block page';
    private blockPageSpinner = false;
    private blockValue2 = true;

    private blockPageOption: IAutBlockUIOption = {};
    private blockOption: IAutBlockUIOption = {};

    private attached() {
        this.blockOption.spinnerSize = '13px';
        this.blockOption.spinnerColor = '.info';

        // this.blockPageOption.useSpinner = true;
        // this.blockPageOption.spinnerSize = '25px';


    }

    private timer(time: number, onRunning: Function, onStop: Function) {
        let timeleft = time;
        let downloadTimer = setInterval(() => {
            timeleft -= 1;
            onRunning(timeleft);
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                onStop();
            }
        }, 1000);
    }

    private blockThePageSpinner() {
        this.blockPageSpinner = !this.blockPageSpinner;
        this.timer(5, (t) => { this.blockPageSpinnerText = `Unblock page in ${t} second(s)`; }, () => {
            this.blockPageSpinnerText = 'Block page';
            this.blockPageSpinner = !this.blockPageSpinner;
        });

    }
    private toggleBlock2() {
        this.blockValue2 = !this.blockValue2;
    }
}
