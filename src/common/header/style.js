import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div `
 position: relative;
 z-index: 1;
 height:58px;
 border-bottom: 2px solid #f0f0f0;
`;
export const Logo = styled.div `
position:absolute;
top:0;
left:0;
display:block
width:100px;
height:56px;
background: url(${logoPic});    //图片
background-size:contain;
`;
export const Nav = styled.div `
width:960px;
height:100%;
padding-right:70px;
margin:0 auto;
box-sizing:border-box;
`
export const NavItem = styled.div `
line-height:56px;
padding: 0 15px
font-size:17px
&.left{                    /*Navitem中有clasName='left'向左否则向右*/
    float:left;
}
&.right{
    float:right
    color:#969696
    cursor:pointer
}
&.active{
 color:#ea6f5a
}
`
export const SearchWrapper=styled.div`
position:relative;
float:left;                  //其他元素浮动了它也要浮动
.zoom {
  position: absolute;        //给SearchWrapper下的所有iconfont加样式
  right: 5px;
  top:13px
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  &.focused {
    background: #777;
    color: #fff;  
}

`
export const NavSearch = styled.input.attrs({/* attrs是属性 */
  placeholder:'搜索'
})`
 width:160px;
 height:38px;
 boredr:none;
 outline:none;
 border-radius:19px;
 background:#eee;
 margin-top:9px;
 margin-left:20px
 padding: 0 30px 0 20px;
 box-sizing: border-box;      //盒子宽度不受padding或margin影响
 font-size:14px
 &::placeholder{
    color:#999
 }
 &.focused{                  //&代表同级
  width:250px
 }
 &.slide-enter{
  transition: all .2s ease-out        //这里的时长要和Header中对应上
  }
  &.slide-enter-active{
    width:240px
  }
  &.slide-exit{
    transition: all .2s ease-out  
  }
  &.slide-exit-active{
    width:160px
  }
`
export const SearchInfo=styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
background: #fff;

`
export const SearchInfoTitle=styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`
export const SearchInfoSwitch=styled.span`
float: right;
font-size: 13px;
cursor: pointer;
.spin{                  //换一换图标
  display: block;
  float: left;
  font-size: 12px;
  margin-right: 2px;
  transition: all .2s ease-in;     /* 两秒执行完毕 */
  transform-origin: center center; //围着自己旋转
} 
`
export const SearchInfoList = styled.div`
	overflow: hidden;
  margin-top:8px
`;
export const SearchInfoItem=styled.a`
display: block;
float: left;
line-height: 20px;
padding: 0 5px;
margin-right: 10px;
margin-bottom: 15px;
font-size: 12px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
`
export const Addition = styled.div`
 position:absolute;
 right:0;
 top:0;
 height:56px;
`
export const Button = styled.div`
float:right;
margin-top:9px;
padding: 0 20px;
margin-right:20px;
line-height:38px;
border:1px solid ;
border-radius:19px;
&.reg{
  color:#ec6149
}
&.writing{
  color:#fff;
  background-color:#ec6149;
}
`

