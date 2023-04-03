import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { EmpComponent } from './emp.component';

//describe('EmpComponent', () => {
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EmpComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmpComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'crud-app'`, () => {
    const fixture = TestBed.createComponent(EmpComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('crud-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmpComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('crud-app app is running!');
  });
});
