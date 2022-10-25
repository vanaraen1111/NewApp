import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let  products =  [
      {  id:  1,  name:  'Perodua Myvi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum', image: 'https://www.perodua.com.my/assets/images/myvi_v2/Myvi_03.png', pricerange: 'RM 46500 to RM 59900' },
      {  id:  2,  name:  'Proton X50', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum', image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/2020_Proton_X50_1.5_TGDi_Flagship_%28front_view%29.png', pricerange: 'RM 79200 to RM 103300' },
      {  id:  3,  name:  'Perodua Ativa', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum', image: 'https://www.perodua.com.my/assets/images/ativa-beauty-02.jpg', pricerange: 'RM 62500 to RM 73400' },
      {  id:  4,  name:  'Honda HRV', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum', image: 'https://paultan.org/image/2021/11/2022-Honda-HR-V-eHEV-EL-Thailand-1-630x331.jpeg', pricerange: 'RM 114800 to RM 140800' }
    ];
 
    return {products};

  }
}
