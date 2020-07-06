const path=require('path');
module.exports={
    mode:'production',
    entry:'./src/index.js',
    //externals:["lodash"],//如果遇到lodash，不用打包到库中
    externals:{
        lodash:{
            root:'_',//如果是用script标签引入，需要在script标签下注入一下_全局变量
            commonjs:'lodash',//如果在commonjs环境中使用库，要求lodash加载的时候名称必须是lodash
        }
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'library.js',
        library:'library',
        libraryTarget:'this'//'umd',//不管是哪种方式引入打包的库，都可以正确的引入到
    }
}