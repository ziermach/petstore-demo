/* tslint:disable:max-line-length max-classes-per-file */
/**
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * 1.0.5
 * Swagger Petstore
 * http://swagger.io/terms/
 * apiteam@swagger.io
 * Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0.html
 * petstore.swagger.io/v2
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {UpdatePetWithFormParams} from '../../../../controllers/Pet';

export enum Actions {
  START = '[Pet updatePetWithForm] Start',
  SUCCESS = '[Pet updatePetWithForm] Success',
  ERROR = '[Pet updatePetWithForm] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdatePetWithFormParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UpdatePetWithFormAction = Start | Success | Error;
