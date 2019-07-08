/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/br_make_things_faster/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_make_things_faster/css/app.css","f1b6e2af430bc97846a48c27089a1e6b"],["/br_make_things_faster/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_make_things_faster/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_make_things_faster/index.html","1c48db6ed55b0482ab4f6de22cfd8b4e"],["/br_make_things_faster/js/0.4a9613af6a0859e13db4.js","5484bb43592d84c758b540c46cedd4ad"],["/br_make_things_faster/js/1.4a9613af6a0859e13db4.js","3bb82344cfae3e94b976006e16ef0f6d"],["/br_make_things_faster/js/10.4a9613af6a0859e13db4.js","31cf6e11dbbe8baa875312559e02ff88"],["/br_make_things_faster/js/11.4a9613af6a0859e13db4.js","ca05e8150a80aa61439758282e75ef30"],["/br_make_things_faster/js/12.4a9613af6a0859e13db4.js","614fba43013ce8d977edfda01252070f"],["/br_make_things_faster/js/13.4a9613af6a0859e13db4.js","0f9110820d0f90f5c061bc45bf8a9d90"],["/br_make_things_faster/js/14.4a9613af6a0859e13db4.js","7e8c5fd9561afb1b9c4dfa83941b7777"],["/br_make_things_faster/js/15.4a9613af6a0859e13db4.js","ad047001d279087202c9118fcb249821"],["/br_make_things_faster/js/16.4a9613af6a0859e13db4.js","17bd555a426986f1f5b5275671b72873"],["/br_make_things_faster/js/17.4a9613af6a0859e13db4.js","7da38ee3269ec75a9bae13d0a16abd43"],["/br_make_things_faster/js/18.4a9613af6a0859e13db4.js","6a0514c45d94d224f86341bc49ea6190"],["/br_make_things_faster/js/19.4a9613af6a0859e13db4.js","0872006da27d0db0817cb4bdade8baa2"],["/br_make_things_faster/js/2.4a9613af6a0859e13db4.js","13de4457ae0dac0af67ea336a017e4ad"],["/br_make_things_faster/js/20.4a9613af6a0859e13db4.js","b1d3f4f2581f5a8c38113447dc8663d0"],["/br_make_things_faster/js/21.4a9613af6a0859e13db4.js","a65bf3c023df301af8e8eebcc0442ad2"],["/br_make_things_faster/js/22.4a9613af6a0859e13db4.js","597577761142578c6e933d62d4206e41"],["/br_make_things_faster/js/23.4a9613af6a0859e13db4.js","c086b082c3d0f4a63cd8077181e28939"],["/br_make_things_faster/js/24.4a9613af6a0859e13db4.js","2596dc5d7a68c7124c8ec5348b9ec34d"],["/br_make_things_faster/js/25.4a9613af6a0859e13db4.js","9fadb33ae3f42e8cbb418a6635d64a1e"],["/br_make_things_faster/js/26.4a9613af6a0859e13db4.js","67cd654cbfbf1e5882d19f7ee8f9eb15"],["/br_make_things_faster/js/27.4a9613af6a0859e13db4.js","46d8b8cbfb3218d96587c6f348cfcf74"],["/br_make_things_faster/js/28.4a9613af6a0859e13db4.js","288bda422b1cce5149d75e518cf8b964"],["/br_make_things_faster/js/29.4a9613af6a0859e13db4.js","25f2a2bafc8d77b13e5b01c403ebb24a"],["/br_make_things_faster/js/3.4a9613af6a0859e13db4.js","3be99bc9fd84f8b5ecc3cd6bc8911d22"],["/br_make_things_faster/js/30.4a9613af6a0859e13db4.js","74243bca8ff76a8c6f5c37cea6d98923"],["/br_make_things_faster/js/31.4a9613af6a0859e13db4.js","3133975e52537f0f470ad629c535467c"],["/br_make_things_faster/js/32.4a9613af6a0859e13db4.js","4d5ebedee980f0894f611f37140d28c7"],["/br_make_things_faster/js/33.4a9613af6a0859e13db4.js","b917477f1897ea8ef3dfaaf3a18678a4"],["/br_make_things_faster/js/34.4a9613af6a0859e13db4.js","60fa874b9e236d16f78fd5d7c1abdcf8"],["/br_make_things_faster/js/35.4a9613af6a0859e13db4.js","cb23d7c76f4bf9458f8ffeee24a50fa9"],["/br_make_things_faster/js/36.4a9613af6a0859e13db4.js","3b02b05b659f3ab0fa96dda854bea982"],["/br_make_things_faster/js/37.4a9613af6a0859e13db4.js","8aac594cc1ab136a1d406ef145cd5d06"],["/br_make_things_faster/js/38.4a9613af6a0859e13db4.js","9c6ceb828f3d5d75721d20db26575bd3"],["/br_make_things_faster/js/39.4a9613af6a0859e13db4.js","ad47b19f9c6bf1975aba6561334edfb6"],["/br_make_things_faster/js/4.4a9613af6a0859e13db4.js","0838cbb4f86e46d98c4402093d4593ef"],["/br_make_things_faster/js/40.4a9613af6a0859e13db4.js","b20606de5a03f7bb4f447978c275b99e"],["/br_make_things_faster/js/404.4a9613af6a0859e13db4.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_make_things_faster/js/41.4a9613af6a0859e13db4.js","56eaa2836e24ee09ec3c5e005316aa88"],["/br_make_things_faster/js/42.4a9613af6a0859e13db4.js","d0a56adbbbd160f8ad4b9520c3a59a0b"],["/br_make_things_faster/js/43.4a9613af6a0859e13db4.js","8450d8f90484806e6417089718f65f42"],["/br_make_things_faster/js/44.4a9613af6a0859e13db4.js","4c23afff64b71f12f91c82f0d9c7d3cf"],["/br_make_things_faster/js/45.4a9613af6a0859e13db4.js","ff02e30f00fcf7ba8a6cf36537f5538e"],["/br_make_things_faster/js/46.4a9613af6a0859e13db4.js","68c505aeb7a92e8441fc4bba7160f99e"],["/br_make_things_faster/js/47.4a9613af6a0859e13db4.js","353f164616360f0a42c34398565a4c53"],["/br_make_things_faster/js/48.4a9613af6a0859e13db4.js","9618e0dc09248193ed68d145a4e2d5aa"],["/br_make_things_faster/js/49.4a9613af6a0859e13db4.js","ba4895755cb4d97028db71cd84c86282"],["/br_make_things_faster/js/5.4a9613af6a0859e13db4.js","12c8bf3690c831243dcd8cf83de95898"],["/br_make_things_faster/js/50.4a9613af6a0859e13db4.js","62006afc05cac80e0414b9e4cd433524"],["/br_make_things_faster/js/51.4a9613af6a0859e13db4.js","04c141f2e233259f2cebaa1500dc927b"],["/br_make_things_faster/js/52.4a9613af6a0859e13db4.js","549b719af322c499103a46173f62c95c"],["/br_make_things_faster/js/53.4a9613af6a0859e13db4.js","52d49bf2616551627f8f8e9bea6f6d63"],["/br_make_things_faster/js/54.4a9613af6a0859e13db4.js","e8133baf398cca29ae81654bfa211a34"],["/br_make_things_faster/js/55.4a9613af6a0859e13db4.js","735b2f41a542feabc3f8ec8398d63195"],["/br_make_things_faster/js/56.4a9613af6a0859e13db4.js","ef74b1c2b9e80d9a4536326bb299600e"],["/br_make_things_faster/js/57.4a9613af6a0859e13db4.js","ddee7d5c0af0679e7cb83baa70c0f070"],["/br_make_things_faster/js/58.4a9613af6a0859e13db4.js","61602aec64fe7ec84873658866af36f1"],["/br_make_things_faster/js/59.4a9613af6a0859e13db4.js","8626364abd750f2214dad322e43e2b4a"],["/br_make_things_faster/js/6.4a9613af6a0859e13db4.js","8b55f396f4e14a7d21d0d18cca25bd80"],["/br_make_things_faster/js/60.4a9613af6a0859e13db4.js","86e0682f8ec5b0e542415a0305ef5992"],["/br_make_things_faster/js/61.4a9613af6a0859e13db4.js","7b6269c5eb4f43a4f98c8e0c974a0cd8"],["/br_make_things_faster/js/62.4a9613af6a0859e13db4.js","06b31319240d6b17278d4f84b54c451c"],["/br_make_things_faster/js/63.4a9613af6a0859e13db4.js","2ad981fcfba3f4b273e95502877dbe8a"],["/br_make_things_faster/js/64.4a9613af6a0859e13db4.js","910a5d30f0dfac3a887ad9b15aaf5ca9"],["/br_make_things_faster/js/65.4a9613af6a0859e13db4.js","7dac52d0d1e0f23b55e72e8a4d3c3e36"],["/br_make_things_faster/js/66.4a9613af6a0859e13db4.js","d2a90fd040af8236a1dcdfd9f41b3c96"],["/br_make_things_faster/js/67.4a9613af6a0859e13db4.js","944d7d2ca707813a67c7c9a52fe0e245"],["/br_make_things_faster/js/7.4a9613af6a0859e13db4.js","9bcabe4dfc6e5f477219f401b32334ef"],["/br_make_things_faster/js/8.4a9613af6a0859e13db4.js","8522b40cc5d7e496d0716c985f11dd7d"],["/br_make_things_faster/js/9.4a9613af6a0859e13db4.js","fddc38ab360fc84a61371e45679a9498"],["/br_make_things_faster/js/contract.4a9613af6a0859e13db4.js","701a5557b02f58f2a2583b4ff5a442fb"],["/br_make_things_faster/js/open_positions.4a9613af6a0859e13db4.js","1fc1b7b908937b9cd37fa021895fed7b"],["/br_make_things_faster/js/open_positions~profit_table~statement.4a9613af6a0859e13db4.js","a4d2c539611d8a9312500ce00867e84d"],["/br_make_things_faster/js/profit_table.4a9613af6a0859e13db4.js","adf9da8733d5263ad9ddc11510931b92"],["/br_make_things_faster/js/profit_table~statement.4a9613af6a0859e13db4.js","508b87f1042d83feef366c04a15d62ed"],["/br_make_things_faster/js/reports.4a9613af6a0859e13db4.js","5f88594cac8ff5e0904b6fef8ef39d4f"],["/br_make_things_faster/js/smart_chart.4a9613af6a0859e13db4.js","2ffc25ed6d2620b545e77f32769bb252"],["/br_make_things_faster/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_make_things_faster/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_make_things_faster/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_make_things_faster/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_make_things_faster/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_make_things_faster/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_make_things_faster/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_make_things_faster/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_make_things_faster/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_make_things_faster/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_make_things_faster/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_make_things_faster/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_make_things_faster/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_make_things_faster/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_make_things_faster/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_make_things_faster/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_make_things_faster/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_make_things_faster/js/statement.4a9613af6a0859e13db4.js","2065b03b9946c6cdead91eff6abcc30d"],["/br_make_things_faster/js/vendors~open_positions~profit_table~statement.4a9613af6a0859e13db4.js","2e5f800f33db6c5200f6e82be2bd8ed3"],["/br_make_things_faster/js/vendors~smart_chart.4a9613af6a0859e13db4.js","1f7027a975705dc1943cb03271b501c1"],["/br_make_things_faster/manifest.json","3f59a77e3624de9281397bb9049cb6c4"],["/br_make_things_faster/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_make_things_faster/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_make_things_faster/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_make_things_faster/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_make_things_faster/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_make_things_faster/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_make_things_faster/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_make_things_faster/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_make_things_faster/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_make_things_faster/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_make_things_faster/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_make_things_faster/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_make_things_faster/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_make_things_faster/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_make_things_faster/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_make_things_faster/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_make_things_faster/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_make_things_faster/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/br_make_things_faster/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







