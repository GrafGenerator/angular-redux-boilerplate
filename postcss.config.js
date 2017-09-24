module.exports = (ctx) => ({
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {
            browsers: ['ie >= 8', 'last 2 versions'],
        },
        'postcss-icss-selectors': false,
        'cssnano': ctx.env === "production" 
            ? {
                safe: true,
                sourcemap: true,
                autoprefixer: false,
            }
            : false
    }
})