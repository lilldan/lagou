	var headerHeight=document.getElementById("footer").clientHeight;
			document.querySelector(".top").style.height=(window.innerHeight-headerHeight)+"px";
			var inde="";
			
			var up=document.querySelector(".Load");
			var maxScrollY=0;
			var myScroll=new IScroll(".top",{
				tap:true,
				probeType:2,
				startY:-40
			})
			maxScrollY=myScroll.maxScrollY;
			myScroll.on("scroll",function(){
			
				if(this.y >= 4 && this.directionY == -1 && inde==""){
					downTag.innerHTML="放开刷新"
					inde="yes"
				}
				if(inde=="yes" && this.y<-3 && this.directionY == 1 ){
					downTag.innerHTML="下拉"
					 inde=""
				}
				console.log(this.y)
				if(this.y <=maxScrollY-40 && this.directionY== 1 && inde==""){
					this.maxScrollY=maxScrollY-40
					up.innerHTML="放开刷新"
					inde="yes1"
				}
				
				if(inde=="yes1" && this.y>maxScrollY-40 && this.directionY==-1){
					this.maxScrollY=maxScrollY
					up.innerHTML="上拉"
					inde=""
				}
			})
			myScroll.on("scrollEnd",function(){
				if(this.y<3 && inde=="" && this.y>-40){
					myScroll.scrollTo(0,-40,500)
				}
				if(inde=="yes"){
					downTag.innerHTML="正在加载中。。。"
					inde="";
					setTimeout(function(){
						ref()
					},1000)
				}
				if(inde=="yes1"){
					up.innerHTML="数据加载中。。。。"
					inde="";
					setTimeout(function(){
						ti()
					},1000)
				}
				
			})
			function ref(){
				downTag.innerHTML="下拉";
				myScroll.scrollTo(0,-40,500);
				myScroll.refresh();
			}
			function ti(){
				var str = '<li>不要打我呀</li>'+
							'<li>不要打我呀</li>'+
							'<li>不要打我呀</li>'+
							'<li>不要打我呀</li>';
				$(".hehe").append(str)			
				up.innerHTML="上拉";
				myScroll.refresh();
				 maxScrollY = myScroll.maxScrollY ;
			}