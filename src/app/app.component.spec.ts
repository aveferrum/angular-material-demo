import { } from 'jasmine';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


describe('AppComponent (template)', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // declare the test component
      imports: [AppMaterialModule, FormsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));
  // 2nd beforeEach synchronous
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('span.title'));
    el = de.nativeElement;
  });
  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <span class="title"> material component', () => {
    fixture.detectChanges();
    const t_de = de.nativeElement;
    expect(t_de.innerText).toMatch('Angular Material Demo',
      '<span class="title"> should say "Angular Material Demo"');
  });
});
