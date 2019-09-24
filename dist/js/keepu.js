/**
 * @ time 2018/7/11
 * @ rely on jquery-1.12.3.min.js
 * @ version 1.0.0
 * @ This is a public form submission file that works on 网课
 */

/**********************************************分割线******************************************************/
!function(window){
	//loading弹窗
	var LoadingDiv = '<div class="loading"><svg class="lds-spinner" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:none"><g transform="rotate(0 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(30 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(60 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(90 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(120 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(150 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(180 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(210 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(240 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(270 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(300 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(330 50 50)"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#1d0e0b"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate></rect></g></svg> <span>提交中</span><style type="text/css">.loading{position:fixed;width:5.12rem;height:1.46667rem;border:1px solid #ddd;background:#fff;z-index:100000000;background:#fff;left:50%;top:50%;margin-left:-2.56rem;margin-top:-.73333rem;display:none}.loading span{font-size:.4rem;color:#333;display:block;position:absolute;left:1.33333rem;line-height:1.46667rem;top:0;width:3.7rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.loading svg{width:1.33333rem;height:1.33333rem;position:relative;top:.06667rem}</style></div>'
	var LoadingMask = '<div class="loadingmask" style="display: none;position:fixed;width:100%;height:100%;z-index:23333332;top:0;left:0;filter:alpha(opacity=20);opacity:.2;background-color:#000;overflow:hidden"></div>'
	//环球注册验证弹窗
	var verificationWAP  = '<div class="new_hq_reg_wap"><span class="close"></span><form class="sign-in"><div class="reg noM clearfix"><span>登录账号</span><i></i><div class="fl default-account"></div></div><div class="reg noM2 clearfix"><span>初始密码</span><i></i><div class="fl default-psd"></div></div><div class="reg clearfix"><span>手机号</span><i>*</i> <input type="text" class="default-phone"  value=""></div><div class="reg clearfix"><span>图形验证码</span> <i>*</i> <input type="text" class="pic-code" placeholder="图形验证码"> <img src="" class="yz"></div><div class="reg clearfix"><span>手机验证码</span> <i>*</i> <input type="text" class="phone-code" placeholder="手机验证码"><div class="yz">获取短信验证码</div></div><input type="submit" value="确认开通"><p>密码可在登陆后修改</p></form></div><style type="text/css">.new_hq_reg_wap{z-index:99999999;display:none;position:fixed;width:8rem;margin-left:-4rem;left:50%;height:9.33333rem;top:50%;margin-top:-4.66667rem;background:#fff}.new_hq_reg_wap h3{line-height:1.86667rem;text-align:center;color:#333;font-size:.34667rem}.new_hq_reg_wap span.close{z-index: 100000000;position:absolute;top:.13333rem;right:.13333rem;width:.58667rem;height:.58667rem;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJ1BMVEUAAACnp6eqqqqnp6eoqKiqqqqoqKioqKipqamoqKioqKioqKisrKwVU9K1AAAADXRSTlMA/RXUkUjhxJptZLUxY0GHeAAAAG9JREFUGNM9zbENQFAUheETiQFeaHQSoWcCA2iM8FqdDSSmMYH1uP4Tt7r5/uLobsWVm/bJ/9qoq1o4zSrGCa6lCGYRYAJMCHbogx1yMDek4//X9G0wecaGJ9lgMjbMbMCMmwkwAXbILxNqXZLD8gAOeREcwMac2QAAAABJRU5ErkJggg==) no-repeat;background-size:.29333rem .29333rem;background-position:center center}.new_hq_reg_wap p{font-size:.29333rem;text-align:center;color:#e51c23;margin-top:.26667rem}.new_hq_reg_wap form{padding-top:.4rem}.new_hq_reg_wap form .reg{margin-bottom:.4rem;position:relative}.new_hq_reg_wap form .reg span{float:left;display:block;width:1.86667rem;line-height:1.06667rem;text-align:right;font-size:.26667rem;color:#333;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.new_hq_reg_wap form .reg i{float:left;font-style:normal;color:#e51c23;display:block;line-height:1.06667rem;width:.06667rem;height:1.06667rem}.new_hq_reg_wap form .reg input,.new_hq_reg_wap form .reg input.default-phone{appearance:none;-moz-appearance:none;-webkit-appearance:none;height:1.06667rem;float:left;margin-left:.13333rem;width:5.46667rem;border:1px solid #e9e9e9;text-indent:.26667rem;font-size:.21333rem}.new_hq_reg_wap form .reg input[type=text]{width:2.8rem}.new_hq_reg_wap form .reg input.default-phone{width:5.46667rem!important}.new_hq_reg_wap form .reg div.yz,.new_hq_reg_wap form .reg img.yz{float:left;width:2.4rem;height:1.06667rem;display:block;margin-left:.26667rem}.new_hq_reg_wap form .reg div.yz{border:1px solid #0e9bdd;background:#ebf9ff;color:#58bae8;line-height:1.06667rem;text-align:center;font-size:.26667rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.new_hq_reg_wap form .reg div.yz.disabled{background:#eee;border-color:#999;color:#666;user-select:none;pointer-events:none}.new_hq_reg_wap form .reg div.fl{width:2.8rem;height:1.06667rem;line-height:1.06667rem;margin-left:.13333rem;font-size:.26667rem;float:left;text-indent:.26667rem}.new_hq_reg_wap form .reg.noM{margin-bottom:0}.new_hq_reg_wap form .reg.noM2{margin-bottom:.13333rem}.new_hq_reg_wap form input[type=submit]{display:block;width:3.78667rem;height:1.06667rem;margin:0 auto;background:#f05630;color:#fff;border:none}</style>'
	var verificationWAP2 = '<div class="new_hq_reg_wap PC"><span class="close"></span><form class="sign-in"><div class="reg clearfix"><span>登录账号</span><i></i><div class="fl default-account"></div></div><div class="reg clearfix"><span>初始密码</span><i></i><div class="fl default-psd"></div></div><div class="reg clearfix"><span>手机号</span><i>*</i><input type="text" class="default-phone"  value=""></div><div class="reg clearfix"><span>图形验证码</span><i>*</i><input type="text" class="pic-code" placeholder="图形验证码"> <img src="" class="yz"></div><div class="reg clearfix"><span>手机验证码</span><i>*</i><input type="text" class="phone-code" placeholder="手机验证码"><div class="yz">获取短信验证码</div></div><input type="submit" value="确认开通"><p>密码可在登陆后修改</p></form></div><style type="text/css">.new_hq_reg_wap.PC{z-index:99999999;display:none;position:fixed;width:320px;margin-left:-160px;left:50%;height:470px;top:50%;margin-top:-235px;background:#fff}.new_hq_reg_wap.PC h3{line-height:130px;text-align:center;color:#333;font-size:22px}.new_hq_reg_wap.PC span.close{z-index: 100000000;position:absolute;top:10px;right:10px;width:44px;height:44px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJ1BMVEUAAACnp6eqqqqnp6eoqKiqqqqoqKioqKipqamoqKioqKioqKisrKwVU9K1AAAADXRSTlMA/RXUkUjhxJptZLUxY0GHeAAAAG9JREFUGNM9zbENQFAUheETiQFeaHQSoWcCA2iM8FqdDSSmMYH1uP4Tt7r5/uLobsWVm/bJ/9qoq1o4zSrGCa6lCGYRYAJMCHbogx1yMDek4//X9G0wecaGJ9lgMjbMbMCMmwkwAXbILxNqXZLD8gAOeREcwMac2QAAAABJRU5ErkJggg==) no-repeat;background-size:22px 22px;background-position:center center;cursor:pointer}.new_hq_reg_wap.PC p{font-size:14px;text-align:center;color:#e51c23;margin-top:20px}.new_hq_reg_wap.PC form{padding-top:50px}.new_hq_reg_wap.PC form .reg{margin-bottom:20px;position:relative}.new_hq_reg_wap.PC form .reg span{float:left;display:block;width:75px;line-height:40px;text-align:right;font-size:14px;color:#333;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.new_hq_reg_wap.PC form .reg i{float:left;font-style:normal;color:#ff8a63;display:block;line-height:40px;font-size:14px;text-align:center;height:40px;width:10px}.new_hq_reg_wap.PC form .reg input,.new_hq_reg_wap.PC form .reg input.default-phone{appearance:none;-moz-appearance:none;-webkit-appearance:none;height:40px;float:left;margin-left:10px;width:340px;border:1px solid #e9e9e9;text-indent:10px;font-size:14px}.new_hq_reg_wap.PC form .reg input[type=text]{width:94px}.new_hq_reg_wap.PC form .reg div.fl{width:216px;height:40px;line-height:40px;margin-left:10px;font-size:14px;float:left;text-indent:10px}.new_hq_reg_wap.PC form .reg input.default-phone{width:216px!important}.new_hq_reg_wap.PC form .reg div.yz,.new_hq_reg_wap.PC form .reg img.yz{float:left;width:111px;height:42px;display:block;margin-left:10px}.new_hq_reg_wap.PC form .reg div.yz{border:1px solid #0e9bdd;background:#ebf9ff;color:#58bae8;line-height:43px;text-align:center;font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:108px;cursor:pointer}.new_hq_reg_wap.PC form .reg div.yz.disabled{background:#eee;border-color:#999;color:#666;user-select:none;pointer-events:none}.new_hq_reg_wap.PC form input[type=submit]{display:block;width:180px;height:40px;margin:0 auto;background:#fba601;color:#fff;border:none;cursor:pointer;font-size:16px}</style>'
	var verificationPC   = '<div class="new_hq_reg_wap PC"><span class="close"></span><form class="sign-in"><div class="reg clearfix"><span>登录账号</span><i></i><div class="fl default-account"></div></div><div class="reg clearfix"><span>初始密码</span><i></i><div class="fl default-psd"></div></div><div class="reg clearfix"><span>手机号</span><i>*</i><input type="text" class="default-phone"  value=""></div><div class="reg clearfix"><span>图形验证码</span><i>*</i><input type="text" class="pic-code" placeholder="图形验证码"> <img src="" class="yz"></div><div class="reg clearfix"><span>手机验证码</span><i>*</i><input type="text" class="phone-code" placeholder="手机验证码"><div class="yz">获取短信验证码</div></div><input type="submit" value="确认开通"><p>密码可在登陆后修改</p></form></div><style type="text/css">.new_hq_reg_wap.PC{z-index:99999999;display:none;position:fixed;width:500px;margin-left:-250px;left:50%;height:470px;top:50%;margin-top:-235px;background:#fff}.new_hq_reg_wap.PC span.close{z-index: 100000000;position:absolute;top:5px;right:5px;width:44px;height:44px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJ1BMVEUAAACnp6eqqqqnp6eoqKiqqqqoqKioqKipqamoqKioqKioqKisrKwVU9K1AAAADXRSTlMA/RXUkUjhxJptZLUxY0GHeAAAAG9JREFUGNM9zbENQFAUheETiQFeaHQSoWcCA2iM8FqdDSSmMYH1uP4Tt7r5/uLobsWVm/bJ/9qoq1o4zSrGCa6lCGYRYAJMCHbogx1yMDek4//X9G0wecaGJ9lgMjbMbMCMmwkwAXbILxNqXZLD8gAOeREcwMac2QAAAABJRU5ErkJggg==) no-repeat;background-size:22px 22px;background-position:center center;cursor:pointer}.new_hq_reg_wap.PC p{font-size:14px;text-align:center;color:#e51c23;margin-top:20px}.new_hq_reg_wap.PC form{padding-top:55px}.new_hq_reg_wap.PC form .reg{margin-bottom:21px;position:relative}.new_hq_reg_wap.PC form .reg span{float:left;display:block;width:100px;line-height:40px;text-align:right;font-size:14px;color:#333;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.new_hq_reg_wap.PC form .reg i{float:left;font-style:normal;color:#ff8a63;display:block;line-height:40px;font-size:14px;text-align:center;width:20px;height:42px}.new_hq_reg_wap.PC form .reg input,.new_hq_reg_wap.PC form .reg input.default-phone{appearance:none;-moz-appearance:none;-webkit-appearance:none;height:40px;float:left;margin-left:10px;width:340px;border:1px solid #e9e9e9;text-indent:20px;font-size:14px}.new_hq_reg_wap.PC form .reg input[type=text]{width:170px}.new_hq_reg_wap.PC form .reg input.default-phone{width:340px!important}.new_hq_reg_wap.PC form .reg div.yz,.new_hq_reg_wap.PC form .reg img.yz{float:left;width:147px;height:42px;display:block;margin-left:20px}.new_hq_reg_wap.PC form .reg div.yz{border:1px solid #0e9bdd;background:#ebf9ff;color:#58bae8;line-height:43px;text-align:center;font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:145px;cursor:pointer}.new_hq_reg_wap.PC form .reg div.yz.disabled{background:#eee;border-color:#999;color:#666;user-select:none;pointer-events:none}.new_hq_reg_wap.PC form .reg div.fl{width:170px;height:40px;line-height:40px;margin-left:10px;font-size:14px;float:left}.new_hq_reg_wap.PC form input[type=submit]{display:block;width:180px;height:40px;margin:0 auto;background:#fba601;color:#fff;border:none;cursor:pointer;font-size:16px}</style>'
	
	var isDisabled = false; //避免重复提交
	var errMessage = 0;     //注册失败提示
	var keepu = function(ele,call){
		ele ? ele : ele = $('.sign-in');
		ele.each(function(){
			var $this = $(this)
			$this.submit(function(){
				var username = $('.user-name',$this).val(),
			 		mobile   = $('.user-tel',$this).val(),
			 		ntypeid  = 0,
					school   = '',
			 		content  = '',
			 		comefrom = '';
			 		
			 	if($this.data('ntypeid') != undefined)
			 	{
			 		ntypeid  = $this.data('ntypeid');
			 	}
			 	if($('.data-ntype').data("value") != undefined)
			 	{
			 		ntypeid = $('.data-ntype').data("value");
			 	}
			 	if($('.data-school').data("value") != undefined)
			 	{
			 		school = $('.data-school').data("value");
			 	}
			 	if($('.data-from').data("value") != undefined)
			 	{
			 		comefrom = $('.data-from').data("value");
			 	}
			 	if($this.data('con') != undefined && $('.user-con',$this).size()>0)
			 	{
			 		content  = $this.data('con') + '丶' +$('.user-con',$this).val();
			 	}
			 	else if($this.data('con') != undefined && $('.user-con',$this).size()==0)
			 	{
			 		content  = $this.data('con');
			 	}
			 	else if($('.user-con',$this).size()>0)
			 	{
			 		content  = $('.user-con',$this).val();
			 	}
			 	else{
			 		content  = '开通试学';
			 	}
			 	
			 	var pattern = /^1[345678]\d{9}$/;
			 	var isPC = false
				var isWAP = false
				var timer = null; //定时器
				
			 	if(username==''){alert('请填写您的姓名');return false;}
				if(mobile==''){alert('请填写您的手机号');return false;}
				if(!pattern.test(mobile)){alert('请填写正确的手机号');return false;}
				if(content==''){alert('请描述您的需求');return false;}
				
				if(isDisabled)
				{
					//禁止提交
				}
				else{
					isDisabled = true
					//提交网课后台
					$.ajax({
						url:'https://www.thea.cn/keepu',
						type:'post',
						data:{'username':username,'mobile':mobile,'content':content,'typeid':ntypeid,'school':school,'from':comefrom},
						dataType:'json',
						success:function($data){
							//环球注册
							if($data.hqreg == 1 || $data.hqreg == 2)
							{
								if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(document.body).width()<500) {
									isWAP = true
									//手机再次判断
									
									if($('html').css('font-size') == '37.5px')
									{
										$('body').append(LoadingDiv) //手机端loading
										$('body').append(verificationWAP)
									}
									else{
										$('body').append(verificationWAP)
										//$('body').append(verificationWAP2)
									}
								} else {
									isPC = true
									$('body').append(verificationPC)
								}
								//遮罩层
								$('body').append(LoadingMask)
								
								$('.new_hq_reg_wap').hide()
								$('.new_hq_reg_wap .close').click(function(){
									$('.new_hq_reg_wap').remove()
									$('.loadingmask').remove()
									$('.loading').remove()
									clearInterval(timer)
									$('.new_hq_reg_wap div.yz').text('获取短信验证码')
									$('.new_hq_reg_wap div.yz').removeClass('disabled')
								})
								
								if($data.flag == 'ok' ){
									isDisabled = false
									$('.loadingmask').show()
									$('.new_hq_reg_wap').show()
									$('.new_hq_reg_wap .default-account').text('a' + mobile)
									$('.new_hq_reg_wap .default-psd').text($data.pwd)
									$('.new_hq_reg_wap .default-phone').val(mobile)
									//发图形验证码
									var codestring = '';
									$.ajax({
									    url: 'https://www.thea.cn/hqwxcode?type=2',
									    type: "GET",
									    dataType: "json",
									    success:function(e){
									    	codestring = e.codeString
									       	$('.new_hq_reg_wap img.yz').attr('src',e.verifyCodeStr)
									       	//更换验证码
									       	$('.new_hq_reg_wap img.yz').click(function(){
									       		$.ajax({
												    url: 'https://www.thea.cn/hqwxcode?type=2',
												    type: "GET",
												    dataType: "json",
												    success:function(data){
												    	$('.new_hq_reg_wap img.yz').attr('src',data.verifyCodeStr)
												    	codestring = data.codeString
												    },
												    error:function(err){
												       	console.log(err)
												    }
										    	})
									       	})
									    },
									    error:function(e){
									       console.log(e)
									    }
							    	});
										
							    	//获取短信验证码
							    	$('.new_hq_reg_wap div.yz').click(function(){
							    		if($('.new_hq_reg_wap input.pic-code').val() == ''){
							    			alert('请先填写图形验证码')
							    			$('.new_hq_reg_wap input.pic-code').focus()
							    			$('.new_hq_reg_wap input.pic-code').css('border-color','#ffae00')
							    		}
							    		else{
							    			$.ajax({
											    url: 'https://www.thea.cn/hqwxcode?type=1',
											    type: "post",
											    data:{phone:$('.new_hq_reg_wap .default-phone').val(), codestring:codestring, code:$('.new_hq_reg_wap input.pic-code').val()},
											    dataType: "json",
											    success:function($e){
											    	if($e.flag == 'no')
											    	{
											    		alert($e.message)
											    	}
											    	if($e.flag == 'ok')
											    	{
											    		alert($e.message)
											    		$('.new_hq_reg_wap div.yz').addClass('disabled')
											    		//重新发送60S倒计时
											    		var minute = 60;
											    		timer = setInterval(function(){
											    			$('.new_hq_reg_wap div.yz').text('重新发送'+ minute +'S')
											    			minute --;
											    			if(minute<=0)
											    			{
											    				clearInterval(timer)
											    				$('.new_hq_reg_wap div.yz').text('获取短信验证码')
											    				$('.new_hq_reg_wap div.yz').removeClass('disabled')
											    			}
											    		},1000)
											    	}
											    },
											    error:function($e){
											       console.log($e)
											    }
									    	});
							    		}
									})
									
									//选课
									$.ajax({url:'https://www.thea.cn/hqwxcode?type=3&passport='+$data.passport+'&token='+$data.token+'&lessonIds='+$data.lessonIds});
								
							    	//绑定手机号
							    	$('.new_hq_reg_wap form').submit(function(){
							    		if(isWAP)
							    		{
							    			$('.loading').show()
							    			$('.loading span').text('正在开通...')
							    		}
							    		$('.new_hq_reg_wap input[type=submit]').val('正在开通...')
							    		$.ajax({
							    			url:'https://www.thea.cn/hqwxcode?type=4&passport='+$data.passport+'&phone='+$('.new_hq_reg_wap .default-phone').val()+'&verifyCode='+$('.new_hq_reg_wap input.phone-code').val()+'&mobile='+ mobile,
											type:'get',
							    			dataType: "json",
							    			success:function($result){
							    				$('.new_hq_reg_wap input[type=submit]').val('开通成功')
							    				$('.loading').hide()
												//发送提醒短信
												$.ajax({
													type:"get",
													url:"https://www.thea.cn/hqwxcode?type=5&mobile="+mobile
												});
												if($result.status == 1)
												{
													if($data.tourl)
								    				{
								    					location.href = $data.tourl
								    				}
								    				else{
								    					if(isWAP)
								    					{
								    						location.href = 'http://m.hqwx.com/'
								    					}
								    					else{
								    						location.href = 'http://user.hqwx.com/';
								    					}
								    				}
												}
												else{
													alert($result.message)
													errMessage++
													if(errMessage>=3)
													{
														location.href = 'http://thea.hqwx.com/';
													}
												}
							    			},
							    			error:function(err){
							    				if($data.tourl)
							    				{
							    					location.href = $data.tourl
							    				}
							    				else{
							    					location.href = 'http://thea.hqwx.com/';
							    				}
							    			}
							    		})
							    		return false;
							    	})
								}
								else{
									isDisabled = false
									$('.loading').hide()
									alert($data.message)
								}
							}
							//普通注册
							else{
								isDisabled = false
								if (call) {
			                		call($data);
			                	}else{
			                		if($data.flag == 'ok'){
				                        alert($data.message);
				                    }else if($data.flag == 'no'){
				                        alert($data.message);
				                    }
			                	} 
							}
						},
						error:function(){
							isDisabled = false
							if (call) {
		                		call($data);
		                	}else{
		                		alert('请检查您提交的信息是否有误');
		                	}
						}
					});
				}
				return false;
			})
		})
	}
	window.keepu = keepu;
}(window);
$(function() {
	if($('.sign-in').size() > 0) {
		keepu($('.sign-in'),function($data){
			if($data.flag == 'ok'){
                alert($data.message);
                $('#midtc').hide()
                $('#mask').hide()
				$('#rightform').hide()
            }else if($data.flag == 'no'){
                alert($data.message);
            }
		});
	}
});

	
