import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('#displayVote'))
htmlElement = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TotalVotes should increase by 1 (in view) when up clicked', ()=>{
    component.upVote()
    fixture.detectChanges()
    expect(htmlElement.textContent).toBe('Total Votes: 1')
  });

  it('TotalVotes should decrease by 1 (in view) when down clicked', ()=>{
    component.totalVotes=9
    component.downVote()
    fixture.detectChanges()
    expect(htmlElement.textContent).toBe('Total Votes: 8')
  });

});
