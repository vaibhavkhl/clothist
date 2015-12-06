"use strict";angular.module("clientApp",["ngMessages","ui.router","ng-token-auth","formly","formlyBootstrap","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$authProvider",function(a,b,c){a.state("login",{url:"/login",templateUrl:"views/login.html",controller:"LoginCtrl"}).state("landing",{url:"/landing",templateUrl:"views/temp_landing.html",controller:"LandingCtrl"}).state("signup",{url:"/signup",templateUrl:"views/signup.html",controller:"SignupCtrl","abstract":!0}).state("signup.registration",{url:"/registration",templateUrl:"views/registration.html",controller:"RegistrationCtrl"}).state("admin",{url:"/admin",templateUrl:"views/admin.html",controller:"AdminCtrl",resolve:{auth:["$auth",function(a){return a.validateUser()}]}}).state("checkout",{url:"/checkout/:unique_identifier",templateUrl:"views/checkout.html",controller:"CheckoutCtrl","abstract":!0}).state("checkout.welcome",{url:"",templateUrl:"views/checkout_welcome.html"}).state("checkout.products",{url:"",templateUrl:"views/checkout_products.html"}).state("checkout.revieworder",{url:"",templateUrl:"views/checkout_review_order.html",controller:"CheckoutReviewOrderCtrl"}).state("checkout.thankyou",{url:"",templateUrl:"views/checkout_thankyou.html"}).state("error",{url:"/error",templateUrl:"views/error.html"}),b.otherwise("/landing"),c.configure({apiUrl:"/api"})}]).run(["$rootScope","$state",function(a,b){a.$on("auth:login-success",function(a){}),a.$on("auth:logout-success",function(a){console.log("goodbye")}),a.$on("auth:validation-success",function(){console.log("validated, user is allowed")}),a.$on("auth:invalid",function(){console.log("unauthorized")})}]),angular.module("clientApp").controller("SignupCtrl",["$scope","$auth","$state","$rootScope",function(a,b,c,d){a.user={},a.workpreference={},a.leisurepreference={},a.dislikepreference={},a.patternsdislikepreference={},a.costpreference={},a.submit=function(){var f=e();b.submitRegistration(f).then(function(a){d.current_user=a.data,c.go("/landing")})["catch"](function(b){b.data.errors&&(a.errors=b.data.errors.full_messages[0]),a.errors="Some error occured, please try again."})};var e=function(){var b={user:a.user};return b}}]),angular.module("clientApp").controller("LoginCtrl",["$scope","$auth","$rootScope","$state",function(a,b,c,d){a.user={},a.submit=function(){b.submitLogin(a.user).then(function(a){c.current_user=a,d.go("admin")})["catch"](function(b){a.errors=b.errors[0]})},a.userFields=[{key:"email",type:"input",templateOptions:{type:"email",label:"Email address",placeholder:"Enter email"}},{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Password"}}]}]),angular.module("clientApp").controller("HomeCtrl",["$scope","$auth","$state","$rootScope","user",function(a,b,c,d,e){d.showLeftMenu=!1,a.signOut=function(){b.signOut().then(function(){c.go("login")})},e.getCurrentUser().then(function(a){a.data.user.size_profile?c.go("home.schedulebox"):c.go("home.sizeprofile")})}]),angular.module("clientApp").controller("WorkPreferenceCtrl",["$scope","$state",function(a,b){a.workpreference.no_dress_code_image=!1,a.workpreference.smart_casual_image=!1,a.workpreference.formals_image=!1,a.workpreference.suit_image=!1}]),angular.module("clientApp").controller("LeisurePreferenceCtrl",["$scope",function(a){a.leisurepreference.casual_image=!1,a.leisurepreference.formal_image=!1,a.leisurepreference.relaxed_image=!1,a.leisurepreference.smart_image=!1}]),angular.module("clientApp").controller("DislikePreferenceCtrl",["$scope",function(a){a.dislikepreference.coloured_chino_image=!1,a.dislikepreference.distressed_denim_image=!1,a.dislikepreference.half_sleeved_shirt_image=!1,a.dislikepreference.vneck_image=!1}]),angular.module("clientApp").controller("PatternsDislikePreferenceCtrl",["$scope",function(a){a.patternsdislikepreference.boldchecks_image=!1,a.patternsdislikepreference.boldpatterns_image=!1,a.patternsdislikepreference.largelogo_image=!1,a.patternsdislikepreference.printedshirt_image=!1}]),angular.module("clientApp").controller("CostPreferenceCtrl",function(){}),angular.module("clientApp").controller("RegistrationCtrl",["$scope",function(a){a.userFields=[{key:"name",type:"input",templateOptions:{label:"Name",placeholder:"Name"}},{key:"email",type:"input",templateOptions:{type:"email",label:"Email address",placeholder:"Enter email"}},{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Password"}},{key:"password_confirmation",type:"input",templateOptions:{type:"password",label:"Confirm Password",placeholder:"Password"}}]}]),angular.module("clientApp").controller("LandingCtrl",function(){}),angular.module("clientApp").controller("IndexCtrl",["$scope","$auth","$state",function(a,b,c){a.signOut=function(){b.signOut().then(function(){c.go("login")})}}]),angular.module("clientApp").controller("SizeProfileCtrl",["$scope","$rootScope","size_profile",function(a,b,c){a.size_profile={},a.submit=function(){a.size_profile.user_id=b.user.id,c.create(a.size_profile)},a.current_size_level=1,a.size_selection={1:{type:"T-shirt size",sizes:["XS","S","M","L","XL"]},2:{type:"Shirt Size",sizes:["34","36","38","40","42"]},3:{type:"Trouser/Denim Size",sizes:["28","30","32","34","36"]}},a.goToNextLevel=function(){a.current_size_level<3&&a.current_size_level++}}]),angular.module("clientApp").controller("ScheduleBoxCtrl",["$scope","boxService","$rootScope",function(a,b,c){a.scheduleBox=function(){a.box.user_id=c.user.id,b.create(a.box)}}]),angular.module("clientApp").controller("AdminCtrl",["$scope","$auth","product","boxService","user","$rootScope","$state",function(a,b,c,d,e,f,g){function h(){"admin"==f.user.role?g.go("admin"):g.go("landing")}function i(){e.getAllUsers().then(function(b){a.users=b.data.user})}function j(){c.getAllProducts().then(function(b){a.products=b.data.products}),i()}h(),j(),a.selectedBoxProducts=[],a.selectedUser={},a.box={},a.signOut=function(){b.signOut().then(function(a){})["catch"](function(a){})},a.selectUser=function(b){a.selectedUser=b},a.createUser=function(a){a.password="Clothist@12",a.password_confirmation="Clothist@12";var c={user:a};b.submitRegistration(c).then(function(a){i()})["catch"](function(a){console.log(a)})},a.addProductToBox=function(b){a.selectedBoxProducts.push(b)},a.createBox=function(){var b=a.box;b.user_id=a.selectedUser.id,b.box_products_attributes=_.map(a.selectedBoxProducts,function(a){return{product_id:a.id}}),console.log("boxxxx params",b),d.createBoxByAdmin(b).then(function(a){k(a.data.box)})};var k=function(b){a.link="clothist.herokuapp.com/#/checkout/"+b.unique_identifier};a.userFields=[{key:"name",type:"input",templateOptions:{label:"Name",placeholder:"Name"}},{key:"email",type:"input",templateOptions:{type:"email",label:"Email address",placeholder:"Enter email"}}]}]),angular.module("clientApp").controller("CheckoutCtrl",["$scope","$stateParams","boxService","$state",function(a,b,c,d){c.getBoxByIdentifier(b.unique_identifier).then(function(b){(_.isNull(b.data)||b.data.box.processed)&&d.go("error"),a.box=b.data.box,console.log(a.box)})}]),angular.module("clientApp").controller("CheckoutReviewOrderCtrl",["$scope","$stateParams","boxService",function(a,b,c){function d(){if(void 0!=a.box){var b=[];_.each(a.box.box_products,function(c){c.accepted&&b.push(c),a.acceptedProducts=b})}}function e(){var b=0;return _.each(a.acceptedProducts,function(a){b+=parseInt(a.product.sell_price)}),b}a.acceptedProducts=[];var f=function(){d(),void 0!=a.box&&(a.box.products_bought_cost=e())};f(),a.processOrder=function(){var a=g();console.log(a),c.update(a)};var g=function(){var b={};return b.id=a.box.id,b.processed=!0,b.payment_method=a.box.payment_method,b.products_bought_cost=a.box.products_bought_cost,b.box_products_attributes=_.map(a.box.box_products,function(a){return{id:a.id,accepted:a.accepted,returned_product_reason_attributes:a.returned_product_reason}}),b}}]),angular.module("clientApp").service("boxService",["$http","$auth",function(a,b){this.create=function(c){return a.post(b.apiUrl()+"/box",{box:c})},this.getBoxByIdentifier=function(c){return a.get(b.apiUrl()+"/get_box_by_unique_identifier?unique_identifier="+c)},this.createBoxByAdmin=function(c){return a.post(b.apiUrl()+"/create_box_by_admin",{box:c})},this.update=function(c){return a.patch(b.apiUrl()+"/box/"+c.id,{box:c})}}]),angular.module("clientApp").service("user",["$http","$auth","$rootScope",function(a,b,c){this.getCurrentUser=function(){return a.get(b.apiUrl()+"/user/"+c.user.id)},this.getAllUsers=function(){return a.get(b.apiUrl()+"/user")}}]),angular.module("clientApp").service("size_profile",["$http","$auth",function(a,b){this.create=function(c){return a.post(b.apiUrl()+"/size_profiles",{size_profile:c})}}]),angular.module("clientApp").service("product",["$http","$auth",function(a,b){this.getAllProducts=function(){return a.get(b.apiUrl()+"/products")}}]),angular.module("clientApp").directive("checkoutProductsList",function(){return{restrict:"E",scope:{item:"="},templateUrl:"views/checkout_products_list.html",link:function(a){a.parseToInt=function(a){return parseInt(a)}}}}),angular.module("clientApp").directive("checkoutReturnDetails",function(){return{restrict:"E",scope:{item:"="},templateUrl:" views/checkout_return_details.html",link:function(a){}}}),angular.module("clientApp").directive("checkoutReviewList",function(){return{restrict:"E",scope:{product:"="},templateUrl:"views/checkout_review_list.html",link:function(a){}}});