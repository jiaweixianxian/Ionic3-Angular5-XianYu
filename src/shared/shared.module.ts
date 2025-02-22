import {CommonModule, DecimalPipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GlobalData} from "./services/global-data.service";
import {NativeService} from "./services/native.service";
import {HttpClientService} from "./services/http-client.service";
import {ThirdSocialService} from "./services/third-social.service";
import {Utils} from "./services/utils.service";
import {IonicPageModule} from "ionic-angular";
import {AppSwiperComponent} from "./components/app-swiper/app-swiper";
import {HelperService} from "./services/helper.service";
import {AppLoadingComponent} from "./components/app-loading/app-loading";
import {AppToastWithIconComponent} from "./components/app-toast-with-icon/app-toast-with-icon";
import {AppHomeNavbarComponent} from "./components/app-home-navbar/app-home-navbar";
import {AppTimesTradeComponent} from "./components/app-times-trade/app-times-trade";
import {AppPeopleSearchComponent} from "./components/app-people-search/app-people-search";
import {AppGoodsSearchComponent} from "./components/app-goods-search/app-goods-search";
import {AppSecondaryMenuComponent} from "./components/app-secondary-menu/app-secondary-menu";
import {AppPostComponent} from "./components/app-post/app-post";
import {PicViewerComponentModule} from "./components/pic-viewer-component/pic-viewer-component.module";
import {MultiPickerModule} from "ion-multi-picker";
import {CityPickerModule} from "ionic2-city-picker";
import {AppOrderComponent} from "./components/app-order/app-order";

import {CalendarModule} from "ion2-calendar";
import {GenerateNumberPipe} from "./pipes/generate-number/generate-number";
import {AppTimesCollectionsComponent} from "./components/app-times-collections/app-times-collections";
import {HandlePhoneNumberPipe} from "./pipes/handle-phone-number/handle-phone-number";

@NgModule({
  imports: [
    IonicPageModule,
    HttpClientModule,
    CityPickerModule,
    PicViewerComponentModule,
    MultiPickerModule,
    CalendarModule
  ],
  declarations: [
    AppToastWithIconComponent,
    AppSwiperComponent,
    AppLoadingComponent,
    AppHomeNavbarComponent,
    AppTimesTradeComponent,
    AppPeopleSearchComponent,
    AppGoodsSearchComponent,
    AppSecondaryMenuComponent,
    AppPostComponent,
    AppOrderComponent,
    AppTimesCollectionsComponent,

    GenerateNumberPipe,
    HandlePhoneNumberPipe
  ],
  exports: [
    AppToastWithIconComponent,
    AppSwiperComponent,
    AppLoadingComponent,
    AppHomeNavbarComponent,
    AppTimesTradeComponent,
    AppPeopleSearchComponent,
    AppGoodsSearchComponent,
    AppSecondaryMenuComponent,
    AppPostComponent,
    AppOrderComponent,
    AppTimesCollectionsComponent,

    HttpClientModule,
    PicViewerComponentModule,
    MultiPickerModule,
    CityPickerModule,
    CalendarModule,

    GenerateNumberPipe,
    HandlePhoneNumberPipe

  ],
  entryComponents: [
    AppToastWithIconComponent,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        GlobalData,
        NativeService,
        HttpClientService,
        ThirdSocialService,
        Utils,
        HelperService
      ]
    }
  }
}
