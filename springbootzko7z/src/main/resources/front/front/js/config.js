
var projectName = '广场舞团';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '社团',
	url: './pages/shetuan/list.html'
}, 
{
	name: '社团活动',
	url: './pages/shetuanhuodong/list.html'
}, 

{
	name: '交流中心',
	url: './pages/forum/list.html'
}, 
{
	name: '公告资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbootzko7z/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除"],"menu":"地区","menuJump":"列表","tableName":"diqu"}],"menu":"地区管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除"],"menu":"舞团类型","menuJump":"列表","tableName":"wutuanleixing"}],"menu":"舞团类型管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"社团","menuJump":"列表","tableName":"shetuan"}],"menu":"社团管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改","删除"],"menu":"成员信息","menuJump":"列表","tableName":"chengyuanxinxi"}],"menu":"成员信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"交流中心","tableName":"forum"}],"menu":"交流中心"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","加入社团"],"menu":"社团列表","menuJump":"列表","tableName":"shetuan"}],"menu":"社团模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","删除","审核"],"menu":"成员信息","menuJump":"列表","tableName":"chengyuanxinxi"}],"menu":"成员信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除","查看评论"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","加入社团"],"menu":"社团列表","menuJump":"列表","tableName":"shetuan"}],"menu":"社团模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"社团","tableName":"shetuan"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"成员信息","menuJump":"列表","tableName":"chengyuanxinxi"}],"menu":"成员信息管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","加入社团"],"menu":"社团列表","menuJump":"列表","tableName":"shetuan"}],"menu":"社团模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
