import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from './../../shared/store/appstate';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { invokeDeleteUserAPI, invokeUsersAPI } from '../store/users.action';
import { selectUsers } from '../store/users.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = this.store.pipe(select(selectUsers));

  deleteModal: any;
  idToDelete: number = 0;

  constructor(private store: Store, private appStore: Store<Appstate>) {}


  public ngOnInit(): void {
    this.store.dispatch(invokeUsersAPI());
  }

  delete() {
    this.store.dispatch(
      invokeDeleteUserAPI({
        id: this.idToDelete,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.deleteModal.hide();
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
      }
    });
  }

}
