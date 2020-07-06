import _ from 'lodash';
//在自定义库中已经倒入过lodash，所以不需要重复导入，因此配置externals:["lodash"],
//引入库的方式
import library from 'library';
// const library =require('library');
// require(['library'],function(){

// })
// //一下方式需要配置library:'library',
{/* <script src="library.js"></script> */}
// library.math

//导出后的最终给别人用的是dist/library.js,因此修改package.json中"main": "./dist/library.js",