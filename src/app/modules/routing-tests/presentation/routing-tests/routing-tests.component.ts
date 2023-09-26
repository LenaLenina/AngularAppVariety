import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-routing-tests',
  templateUrl: './routing-tests.component.html',
  styleUrls: ['./routing-tests.component.scss']
})
export class RoutingTestsComponent {
  constructor(public authService: AuthService) {}
}
