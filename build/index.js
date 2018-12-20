Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _jsxFileName='lib/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Gesture=require('./Gesture');var _Gesture2=_interopRequireDefault(_Gesture);var _Transitioner=require('./Transitioner');var _Transitioner2=_interopRequireDefault(_Transitioner);var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);var _state=require('./state');var _state2=_interopRequireDefault(_state);var _nav=require('./nav');var _nav2=_interopRequireDefault(_nav);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var defaultTopBar=function defaultTopBar(){return _react2.default.createElement(_reactNative.View,{style:{height:0},__source:{fileName:_jsxFileName,lineNumber:9}});};function createSwipeNavigator(config){var _ref=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},_ref$TopBar=_ref.TopBar,TopBar=_ref$TopBar===undefined?defaultTopBar:_ref$TopBar;_state2.default.setConfig(config);return function(props){var SIDES={LEFT:'LEFT',RIGHT:'RIGHT',UP:'UP',DOWN:'DOWN'};var Manager=function(_React$Component){_inherits(Manager,_React$Component);function Manager(props){_classCallCheck(this,Manager);var _this=_possibleConstructorReturn(this,(Manager.__proto__||Object.getPrototypeOf(Manager)).call(this,props));_this.stateAPI=_state2.default.getAPI();_this.navAPI=_nav2.default.getApi();_nav2.default.setManagerApi({navigateLeft:_this.navigateLeft.bind(_this),navigateRight:_this.navigateRight.bind(_this),navigateDown:_this.navigateDown.bind(_this),navigateUp:_this.navigateUp.bind(_this),navigate:_this.navigate.bind(_this),navigateBack:_this.navigateBack.bind(_this)});var _this$stateAPI$getMai=_this.stateAPI.getMain(),screen=_this$stateAPI$getMai.screen,screenName=_this$stateAPI$getMai.screenName;_this.state={dy:new _reactNative.Animated.Value(0),dx:new _reactNative.Animated.Value(0),main:'A',screen_a:screen,screenName_a:screenName,style_a:{zIndex:2},screen_b:function screen_b(){return _react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:49}});},screenName_b:'',style_b:{zIndex:1},overlay_zIndex:-1};return _this;}_createClass(Manager,[{key:'componentWillMount',value:function componentWillMount(){this.onSwipeShouldAllow=this.onSwipeShouldAllow.bind(this);this.onSwipeStarted=this.onSwipeStarted.bind(this);this.onSwipeLeftStarted=this.onSwipeLeftStarted.bind(this);this.onSwipeRightStarted=this.onSwipeRightStarted.bind(this);this.onSwipeDownStarted=this.onSwipeDownStarted.bind(this);this.onSwipeUpStarted=this.onSwipeUpStarted.bind(this);this.onSwiping=this.onSwiping.bind(this);this.onSwipingRight=this.onSwipingRight.bind(this);this.onSwipingLeft=this.onSwipingLeft.bind(this);this.onSwipingUp=this.onSwipingUp.bind(this);this.onSwipingDown=this.onSwipingDown.bind(this);this.onRelease=this.onRelease.bind(this);this.onSwipeLeftRelease=this.onSwipeLeftRelease.bind(this);this.onSwipeRightRelease=this.onSwipeRightRelease.bind(this);this.onSwipeUpRelease=this.onSwipeUpRelease.bind(this);this.onSwipeDownRelease=this.onSwipeDownRelease.bind(this);this.isAnimationRunning=false;this.is_updating=false;}},{key:'componentDidMount',value:function componentDidMount(){_reactNative.BackHandler.addEventListener('hardwareBackPress',this.hardwareBackPressHandler.bind(this));}},{key:'componentWillUnmount',value:function componentWillUnmount(){_reactNative.BackHandler.removeEventListener('hardwareBackPress',this.hardwareBackPressHandler.bind(this));}},{key:'hardwareBackPressHandler',value:function hardwareBackPressHandler(){var _this2=this;var result=this.stateAPI.getBack();if(!result){return false;}var screenName=result.screenName,screen=result.screen;var values=this.state.main==='A'?{main:'B',screen_b:screen,screenName_b:screenName,style_a:{zIndex:1},style_b:{zIndex:2}}:{main:'A',screen_a:screen,screenName_a:screenName,style_a:{zIndex:2},style_b:{zIndex:1}};this.state.dx.setValue(0);this.state.dy.setValue(0);this.updateState(values,function(){_this2.stateAPI.pop();});return true;}},{key:'updateState',value:function updateState(values,callback){var _this3=this;this.is_updating=true;this.setState(values,function(){callback&&callback();_this3.is_updating=false;});}},{key:'update',value:function update(screenName,screen,mainStyle,style,onFinish){var overlay_zIndex=3;var values=void 0;if(this.state.main==='A'){values={screenName_b:screenName,screen_b:screen,style_a:mainStyle,style_b:style};}else{values={screenName_a:screenName,screen_a:screen,style_b:mainStyle,style_a:style};}this.updateState(_extends({},values,{overlay_zIndex:overlay_zIndex}),onFinish);}},{key:'defaultStyle',value:function defaultStyle(){var mainStyle={zIndex:2};var style={zIndex:1};var values=void 0;if(this.state.main==='A'){values={style_a:mainStyle,style_b:style};}else{values={style_b:mainStyle,style_a:style};}this.updateState(values);}},{key:'checkNavigationSidePermission',value:function checkNavigationSidePermission(side){var permission=void 0;var main=this.stateAPI.getMain();if(side===SIDES.LEFT){permission=this.navAPI.fireOnNavigateLeftShouldAllow;}else if(side===SIDES.RIGHT){permission=this.navAPI.fireOnNavigateRightShouldAllow;}else if(side===SIDES.DOWN){permission=this.navAPI.fireOnNavigateDownShouldAllow;}else if(side===SIDES.UP){permission=this.navAPI.fireOnNavigateUpShouldAllow;}else{return false;}return permission(main.screenName);}},{key:'onSwipeShouldAllow',value:function onSwipeShouldAllow(){var main=this.stateAPI.getMain();return!this.is_updating&&!this.isAnimationRunning&&this.navAPI.fireOnNavigateShouldAllow(main.screenName);}},{key:'onSwipeStarted',value:function onSwipeStarted(gesture){}},{key:'onSwipeLeftStarted',value:function onSwipeLeftStarted(){var _this4=this;if(!this.checkNavigationSidePermission(SIDES.RIGHT))return;var result=this.stateAPI.getRight();if(!result){this.skipe=true;this.defaultStyle();return;}var isBack=result.isBack,screen=result.screen,screenName=result.screenName,type=result.type,color=result.color;var main=this.stateAPI.getMain();var mainStyle={};var style={};this.isBack=false;if(isBack){this.isBack=true;var _get_styles=(0,_styles2.default)(_styles.STYLES.NAVIGATE_BACK_RIGHT,{dx:this.state.dx},{type:main.type,color:main.color});var _get_styles2=_slicedToArray(_get_styles,2);mainStyle=_get_styles2[0];style=_get_styles2[1];}else{var _get_styles3=(0,_styles2.default)(_styles.STYLES.NAVIGATE_RIGHT,{dx:this.state.dx},{type:type,color:color});var _get_styles4=_slicedToArray(_get_styles3,2);mainStyle=_get_styles4[0];style=_get_styles4[1];}this.update(screenName,screen,mainStyle,style,function(){_this4.navAPI.fireOnNavigateRightStartedListener(main.screenName,{interpolation:_this4.state.dx,isBack:_this4.isBack,isMain:true});_this4.navAPI.fireOnNavigateRightStartedListener(screenName,{interpolation:_this4.state.dx,isBack:_this4.isBack,isMain:false});_this4.onFinishNavigating=function(completed){_this4.navAPI.fireOnNavigateRightCompletedListener(main.screenName,{completed:completed,isBack:_this4.isBack,isMain:true});_this4.navAPI.fireOnNavigateRightCompletedListener(screenName,{completed:completed,isBack:_this4.isBack,isMain:false});};});}},{key:'onSwipeRightStarted',value:function onSwipeRightStarted(){var _this5=this;if(!this.checkNavigationSidePermission(SIDES.LEFT))return;var result=this.stateAPI.getLeft();if(!result){this.skipe=true;this.defaultStyle();return;}var isBack=result.isBack,screen=result.screen,screenName=result.screenName,type=result.type,color=result.color;var main=this.stateAPI.getMain();var mainStyle={};var style={};this.isBack=false;if(isBack){this.isBack=true;var _get_styles5=(0,_styles2.default)(_styles.STYLES.NAVIGATE_BACK_LEFT,{dx:this.state.dx},{type:main.type,color:main.color});var _get_styles6=_slicedToArray(_get_styles5,2);mainStyle=_get_styles6[0];style=_get_styles6[1];}else{var _get_styles7=(0,_styles2.default)(_styles.STYLES.NAVIGATE_LEFT,{dx:this.state.dx},{type:type,color:color});var _get_styles8=_slicedToArray(_get_styles7,2);mainStyle=_get_styles8[0];style=_get_styles8[1];}this.update(screenName,screen,mainStyle,style,function(){_this5.navAPI.fireOnNavigateLeftStartedListener(main.screenName,{interpolation:_this5.state.dx,isBack:_this5.isBack,isMain:true});_this5.navAPI.fireOnNavigateLeftStartedListener(screenName,{interpolation:_this5.state.dx,isBack:_this5.isBack,isMain:false});_this5.onFinishNavigating=function(completed){_this5.navAPI.fireOnNavigateLeftCompletedListener(main.screenName,{completed:completed,isBack:_this5.isBack,isMain:true});_this5.navAPI.fireOnNavigateLeftCompletedListener(screenName,{completed:completed,isBack:_this5.isBack,isMain:false});};});}},{key:'onSwipeUpStarted',value:function onSwipeUpStarted(){var _this6=this;if(!this.checkNavigationSidePermission(SIDES.DOWN))return;var result=this.stateAPI.getBottom();if(!result){this.skipe=true;this.defaultStyle();return;}var isBack=result.isBack,screen=result.screen,screenName=result.screenName,type=result.type,color=result.color;var mainStyle={};var style={};var main=this.stateAPI.getMain();this.isBack=false;if(isBack){this.isBack=true;var _get_styles9=(0,_styles2.default)(_styles.STYLES.NAVIGATE_BACK_DOWN,{dy:this.state.dy},{type:main.type,color:main.color});var _get_styles10=_slicedToArray(_get_styles9,2);mainStyle=_get_styles10[0];style=_get_styles10[1];}else{var _get_styles11=(0,_styles2.default)(_styles.STYLES.NAVIGATE_DOWN,{dy:this.state.dy},{type:type,color:color});var _get_styles12=_slicedToArray(_get_styles11,2);mainStyle=_get_styles12[0];style=_get_styles12[1];}this.update(screenName,screen,mainStyle,style,function(){_this6.navAPI.fireOnNavigateDownStartedListener(main.screenName,{interpolation:_this6.state.dy,isBack:_this6.isBack,isMain:true});_this6.navAPI.fireOnNavigateDownStartedListener(screenName,{interpolation:_this6.state.dy,isBack:_this6.isBack,isMain:false});_this6.onFinishNavigating=function(completed){_this6.navAPI.fireOnNavigateDownCompletedListener(main.screenName,{completed:completed,isBack:_this6.isBack,isMain:true});_this6.navAPI.fireOnNavigateDownCompletedListener(screenName,{completed:completed,isBack:_this6.isBack,isMain:false});};});}},{key:'onSwipeDownStarted',value:function onSwipeDownStarted(){var _this7=this;if(!this.checkNavigationSidePermission(SIDES.UP))return;var result=this.stateAPI.getTop();if(!result){this.skipe=true;this.defaultStyle();return;}var isBack=result.isBack,screen=result.screen,screenName=result.screenName,type=result.type,color=result.color;var mainStyle={};var style={};var main=this.stateAPI.getMain();this.isBack=false;if(isBack){this.isBack=true;var _get_styles13=(0,_styles2.default)(_styles.STYLES.NAVIGATE_BACK_UP,{dy:this.state.dy},{type:main.type,color:main.color});var _get_styles14=_slicedToArray(_get_styles13,2);mainStyle=_get_styles14[0];style=_get_styles14[1];}else{var _get_styles15=(0,_styles2.default)(_styles.STYLES.NAVIGATE_UP,{dy:this.state.dy},{type:type,color:color});var _get_styles16=_slicedToArray(_get_styles15,2);mainStyle=_get_styles16[0];style=_get_styles16[1];}this.update(screenName,screen,mainStyle,style,function(){_this7.navAPI.fireOnNavigateUpStartedListener(main.screenName,{interpolation:_this7.state.dy,isBack:_this7.isBack,isMain:true});_this7.navAPI.fireOnNavigateUpStartedListener(screenName,{interpolation:_this7.state.dy,isBack:_this7.isBack,isMain:false});_this7.onFinishNavigating=function(completed){_this7.navAPI.fireOnNavigateUpCompletedListener(main.screenName,{completed:completed,isBack:_this7.isBack,isMain:true});_this7.navAPI.fireOnNavigateUpCompletedListener(screenName,{completed:completed,isBack:_this7.isBack,isMain:false});};});}},{key:'onSwiping',value:function onSwiping(){}},{key:'onSwipingRight',value:function onSwipingRight(_ref2){var dx=_ref2.dx;if(!this.checkNavigationSidePermission(SIDES.LEFT)||this.skipe)return;dx=dx<0&&1||dx>250&&250||dx;this.state.dx.setValue(dx);}},{key:'onSwipingLeft',value:function onSwipingLeft(_ref3){var dx=_ref3.dx;if(!this.checkNavigationSidePermission(SIDES.RIGHT)||this.skipe)return;dx=dx>0&&-1||dx<-250&&-250||dx;this.state.dx.setValue(dx);}},{key:'onSwipingUp',value:function onSwipingUp(_ref4){var dy=_ref4.dy;if(!this.checkNavigationSidePermission(SIDES.DOWN)||this.skipe)return;dy=dy>0&&-1||dy<-250&&-250||dy;this.state.dy.setValue(dy);}},{key:'onSwipingDown',value:function onSwipingDown(_ref5){var dy=_ref5.dy;if(!this.checkNavigationSidePermission(SIDES.UP)||this.skipe)return;dy=dy<0&&1||dy>250&&250||dy;this.state.dy.setValue(dy);}},{key:'onRelease',value:function onRelease(){}},{key:'animate',value:function animate(x,values,completed){var _this8=this;this.isAnimationRunning=true;_reactNative.Animated.timing(x,_extends({},values,{easing:_styles.easing})).start(function(){var updateValues={overlay_zIndex:-1};var main=_this8.state.main==='A'?'B':'A';if(completed){updateValues.main=main;updateValues.style_a=main==='A'?{zIndex:2}:{zIndex:1};updateValues.style_b=main==='B'?{zIndex:2}:{zIndex:1};}else{updateValues.style_a=_this8.state.main==='A'?{zIndex:2}:{zIndex:1};updateValues.style_b=_this8.state.main==='B'?{zIndex:2}:{zIndex:1};}_this8.updateState(updateValues,function(){if(completed){if(!_this8.isBack){_this8.stateAPI.push(main==='A'?_this8.state.screenName_a:_this8.state.screenName_b);}else{_this8.stateAPI.pop();}}_this8.onFinishNavigating&&_this8.onFinishNavigating(completed);_this8.isAnimationRunning=false;});});}},{key:'onSwipeLeftRelease',value:function onSwipeLeftRelease(_ref6){var dx=_ref6.dx;if(!this.checkNavigationSidePermission(SIDES.RIGHT)||this.is_updating)return;if(this.skipe){this.skipe=false;return;}var values=dx<-100?{toValue:-250,duration:250}:{toValue:0,duration:250};var completed=dx<-100;this.animate(this.state.dx,values,completed);}},{key:'onSwipeRightRelease',value:function onSwipeRightRelease(_ref7){var dx=_ref7.dx;if(!this.checkNavigationSidePermission(SIDES.LEFT)||this.is_updating)return;if(this.skipe){this.skipe=false;return;}var values=dx>100?{toValue:250,duration:250}:{toValue:0,duration:250};var completed=dx>100;this.animate(this.state.dx,values,completed);}},{key:'onSwipeUpRelease',value:function onSwipeUpRelease(_ref8){var dy=_ref8.dy;if(!this.checkNavigationSidePermission(SIDES.DOWN)||this.is_updating)return;if(this.skipe){this.skipe=false;return;}var values=dy<-100?{toValue:-250,duration:250}:{toValue:0,duration:250};var completed=dy<-100;this.animate(this.state.dy,values,completed);}},{key:'onSwipeDownRelease',value:function onSwipeDownRelease(_ref9){var dy=_ref9.dy;if(!this.checkNavigationSidePermission(SIDES.UP)||this.is_updating)return;if(this.skipe){this.skipe=false;return;}var values=dy>100?{toValue:250,duration:250}:{toValue:0,duration:250};var completed=dy>100;this.animate(this.state.dy,values,completed);}},{key:'navigateLeft',value:function navigateLeft(){this.onSwipeRightStarted();this.animate(this.state.dx,{toValue:250,duration:250},true);}},{key:'navigateRight',value:function navigateRight(){this.onSwipeLeftStarted();this.animate(this.state.dx,{toValue:-250,duration:250},true);}},{key:'navigateDown',value:function navigateDown(){this.onSwipeUpStarted();this.animate(this.state.dy,{toValue:250,duration:250},true);}},{key:'navigateUp',value:function navigateUp(){this.onSwipeDownStarted();this.animate(this.state.dy,{toValue:-250,duration:250},true);}},{key:'navigateBack',value:function navigateBack(){this.hardwareBackPressHandler();}},{key:'navigate',value:function navigate(screen,config){this.is_updating=true;this.stateAPI.push(screen,config);var main=this.stateAPI.getMain();var values=this.state.main==='A'?{main:'B',screen_b:main.screen,screenName_b:main.screenName,style_a:{zIndex:1},style_b:{zIndex:2}}:{main:'A',screen_a:main.screen,screenName_a:main.screenName,style_a:{zIndex:2},style_b:{zIndex:1}};this.updateState(values);}},{key:'render',value:function render(){return _react2.default.createElement(_Gesture2.default,{onSwipeShouldAllow:this.onSwipeShouldAllow,onSwipeStarted:this.onSwipeStarted,onSwipeLeftStarted:this.onSwipeLeftStarted,onSwipeRightStarted:this.onSwipeRightStarted,onSwipeUpStarted:this.onSwipeUpStarted,onSwipeDownStarted:this.onSwipeDownStarted,onSwiping:this.onSwiping,onSwipingRight:this.onSwipingRight,onSwipingLeft:this.onSwipingLeft,onSwipingUp:this.onSwipingUp,onSwipingDown:this.onSwipingDown,onRelease:this.onRelease,onSwipeLeftRelease:this.onSwipeLeftRelease,onSwipeRightRelease:this.onSwipeRightRelease,onSwipeUpRelease:this.onSwipeUpRelease,onSwipeDownRelease:this.onSwipeDownRelease,__source:{fileName:_jsxFileName,lineNumber:479}},_react2.default.createElement(_Transitioner2.default,_extends({},props,{component:this.state.screen_a,style:this.state.style_a,nav:_nav2.default.getPropsApi(this.state.screenName_a),overlay_zIndex:this.state.overlay_zIndex,__source:{fileName:_jsxFileName,lineNumber:497}})),_react2.default.createElement(_Transitioner2.default,_extends({},props,{component:this.state.screen_b,style:this.state.style_b,nav:_nav2.default.getPropsApi(this.state.screenName_b),overlay_zIndex:this.state.overlay_zIndex,__source:{fileName:_jsxFileName,lineNumber:498}})));}}]);return Manager;}(_react2.default.Component);return _react2.default.createElement(Manager,{__source:{fileName:_jsxFileName,lineNumber:506}});};}exports.default=createSwipeNavigator;