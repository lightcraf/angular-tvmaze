import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchShowForm = this.formBuilder.group({
    search: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSearchShow(): void {
    const searchQuery: string = this.searchShowForm.value.search.trim();
    this.router.navigateByUrl('/search?q=' + searchQuery);
  }

}
