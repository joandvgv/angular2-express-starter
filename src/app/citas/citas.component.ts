import { Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
 import { MaterializeAction } from 'angular2-materialize';

import { FEED_ADD, FEED_REMOVE, FEED_ADD_COMMENT } from '../store/feed/feed.actions';
import { IAppState } from '../store';

declare var $: any;

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  // warning: few browsers support shadow DOM encapsulation at this time
encapsulation: ViewEncapsulation.None

})
export class CitasComponent implements OnInit {
  form: FormGroup;

  feeds$: Observable<{}>;
   modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {

    this.feeds$ = store.select('feed');

    this.form = fb.group({
      text: ['', Validators.required],
      name: ['', Validators.required]
    });

  }

  submitFeed(): void {

    if (this.form.valid) {

      this.store.dispatch({
        type: FEED_ADD,
        payload: this.form.value
      });

      this.form.reset();
    }
  }

  submitCommentOnFeed(id: string, commentForm: FormGroup): void {

    if (commentForm.valid) {

      this.store.dispatch({
        type: FEED_ADD_COMMENT,
        payload: {
          id,
          comment: commentForm.value
        }
      });

      commentForm.reset();
    }

  }

  removeFeed(feed: {}): void {

    this.store.dispatch({
      type: FEED_REMOVE,
      payload: feed
    });

  }

   ngOnInit() {
      $(document).ready(function() {
        $('select').material_select();
        $('.datepicker').pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 1, // Creates a dropdown of 15 years to control year
          labelMonthNext: 'Siguiente mes',
          labelMonthPrev: 'Mes anterior',
          labelMonthSelect: 'Selecciona un mes',
          labelYearSelect: 'Selecciona un año',
          monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
          monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec' ],
          weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
          weekdaysShort: [ 'Do', 'Lu', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
          weekdaysLetter: [ 'D', 'L', 'M', 'Mi', 'J', 'V', 'S' ],
          today: 'Hoy',
          clear: 'Borrar',
          close: 'Cerrar'
      });
       $('input.autocomplete').autocomplete({
    data: {
      "30.000": null,
      "7.000": null,
      "8.000": null,
      "9.000": null,
      "10.000": null,
      "15.000": null,
      "20.000": null,
      "35.000": null,
      "40.000": null,
      "50.000": null,
      "60.000": null,
      "70.000": null,
      "80.000": null,
      "90.000": null,
      "100.000": null,
      "110.000": null,
      "120.000": null,
      "130.000": null,
      "140.000": null,
      "150.000": null,
      "160.000": null,
      "Rojo": null,
      "Verde": null,
      "Amarillo": null,
      "Azul": null,
      "Negro": null,
      "Beige": null,
      "Plata": null,
      "Dorado": null,
      "Vinotinto": null,
      "Gris": null,
      "Naranja": null,
      "Rosado": null,
      "Honda": null,
      "Chery": null,
      "Toyota": null,
      "Chrysler": null,
      "Jeep": null,
      "Audi": null,
      "Volskwagen": null,
      "Renault": null,
      "Hyundai": null,
      "Chevrolet": null,
      "Ford": null,
      "Skoda": null,
      "Seat": null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
  
});
         

       }
}
