import {Component, inject, OnInit} from '@angular/core';
import {NavigationStart, Router, RouterOutlet} from '@angular/router';
import {SignUpComponent} from "./core/components/sign-up/sign-up.component";
import {HeaderComponent} from "./core/components/header/header.component";
import {LogInComponent} from "./core/components/log-in/log-in.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignUpComponent, HeaderComponent, LogInComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showHead: boolean = false;

  private readonly router: Router = inject(Router)

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showHead = !(event['url'] === '/login' || event['url'] === '/sign-up');
      }
    }).then(r => {
    })
  }

}
