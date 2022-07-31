import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersEffect } from './store/users.effect';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users.reducer';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [UsersComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffect]),
  ],
})
export class UsersModule {}
