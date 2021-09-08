module.exports = {
    plugins: {
        // 'autoprefixer': {
        //     browsers: ['Android >= 4.0', 'iOS >= 12']
        // },
        'postcss-pxtorem': {
            // rootValue: 37.5,
            rootValue({ file }) {
                console.log(file)
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            propList: ['*']
        }
    }
}
