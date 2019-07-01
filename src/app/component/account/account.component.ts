import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  loading = false;
  submitted = false;
  user: any={};
  repassword: string = "";
  isRegular: boolean = false;
  tabNum: number = 1;
  passwordEye: boolean = false;
  repasswordEye: boolean = false;

  constructor(private userSrv:UserService) { }

  ngOnInit() {
    this.clearAll();
  }
  login(){
    this.userSrv.login(this.user.nameLogin,this.user.password).subscribe((res:any)=>{
      if(res.Status)
      alert("success");
     else{
       alert(res.Message);
     }
    });
  }
 register(){
    this.userSrv.register(this.user.nameLogin, this.user.password).subscribe((res) => {
  
      console.log(res);
    });;
  }
  loginPost() {
    this.userSrv.loginPost(this.user.nameLogin, this.user.password);
  }

  replaceTab(num) {
    if (this.tabNum != num) {
      this.clearAll();
    }
    this.tabNum = num;

  }

  clearAll() {

  }

}
