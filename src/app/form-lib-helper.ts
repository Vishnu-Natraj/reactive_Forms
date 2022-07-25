import { AbstractControl, FormGroup } from '@angular/forms';

const INVALID_FIELD_SELECTOR = 
    `:not(form).ng-invalid:not([tabindex='-1'])`
    + `,:not(form).ng-invalid input`
    + `,:not(form).ng-invalid button`;

export class FormLibHelper {

    /**
     * NOTE:
     *  To use this in a template you must add the following statement to the component
     *      FormLib = FormLib;
     *
     * In the template then you can do this:
     *      FormErrors: {{ FormLibHelper.getFormErrors(myForm) | json }} 
     */
    static getFormErrors(formGroup: FormGroup): any[] {
        const result: any[] = [];
        Object.getOwnPropertyNames(formGroup.controls).forEach( ctlName => {
          if (formGroup.controls[ctlName].errors) {
            result.push({[ctlName]: formGroup.controls[ctlName].errors });
          }
        });
        return result;
    }

    static showTouchedValidation(formGroup: FormGroup): void {
        formGroup.markAllAsTouched();
        this.focusOnFirstError();
    }

    static focusOnFirstError() {
        setTimeout(() => {
            let firstBad: any = document.querySelector(INVALID_FIELD_SELECTOR);
            console.log('First invalid element', firstBad);
            // el?.focus();
            firstBad?.focus();
            setTimeout(() => {
                console.log('Current Focus:', document.activeElement);
            })
        });
    }

    // static showDirtyValidation(formGroup: FormGroup): void {
    //     (<any> Object).values(formGroup.controls).forEach(control => {
    //         if (control.controls) { // control is a FormGroup
    //             this.showDirtyValidation(control);
    //         } else { // control is a FormControl
    //             this.showControlValidation(control);
    //         }
    //     });
    //     this.focusOnFirstError();
    // }

    public static showControlValidation(control: AbstractControl): void {
        control.markAsDirty();
    }

    // public static removeFormValidation(formGroup: FormGroup): void {
    //     (<any> Object).values(formGroup.controls).forEach(control => {
    //         if (control.controls) { // control is a FormGroup
    //             this.removeFormValidation(control);
    //         } else { // control is a FormControl
    //             this.removeControlValidation(control);
    //         }
    //     });
    // }

    public static removeControlValidation(control: AbstractControl): void {
        control.markAsPristine();
    }

    public static hasVisibleErrors(control: AbstractControl): boolean {
        return control.dirty && control.invalid;
    }
}