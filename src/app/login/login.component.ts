import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash-es';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router: Router) //  private loader: LoaderService
  {}

  ngOnInit(): void {}

  login() {
    if (isEmpty(this.email) || isEmpty(this.password)) {
      alert('Please enter email and password');
      return;
    }
    console.log(this.email, this.password);
    this.router.navigate(['/home']);
  }
}
