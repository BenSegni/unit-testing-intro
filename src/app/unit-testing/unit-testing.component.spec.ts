import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingComponent } from './unit-testing.component';

describe('UnitTestingComponent', () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitTestingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Testing doubleValue()', () => {
    it('should return double the value that is passed as a param', () => {
      const value = 4;

      component['doubleValue'](value);

      expect(component['doubleValue'](4)).toEqual(8);
    });
  });

  /**
   * Task: Create a new test for the last method in the
   * component.
   */
});
