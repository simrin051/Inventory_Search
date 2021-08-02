import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent  {

  public invoiceForm: FormGroup;
  public itemRows: FormArray;
  public noOfItems: number=0;
  constructor(private _fb: FormBuilder, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
  }

  get formArr() {
    return this.invoiceForm.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this._fb.group({
      Name: [''],
      Qty:['']
    });
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
    ++this.noOfItems;
    console.log("Add new row "+this.noOfItems);
  }

  deleteRow(index: number) {
    --this.noOfItems;
    if(this.noOfItems >=0)
    {
    this.formArr.removeAt(index);
    
    }
    console.log("Removes row "+this.noOfItems);
  }
  searchStore()
  {
    console.log("search store");
    this.router.navigate(['../search']);
  }
}
