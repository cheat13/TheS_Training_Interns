import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the TheAddressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'the-address',
  templateUrl: 'the-address.html'
})
export class TheAddressComponent {

  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;


  constructor(private fb: FormBuilder) {
    this.FormItem = TheAddressComponent.CreateFormGroup(this.fb);
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'street': [null, Validators.required],
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'zipCode': [null, Validators.required],
    });
  }

  //TODAY
  submitRequest() {
    this.submitRequested = true;
  }

}
