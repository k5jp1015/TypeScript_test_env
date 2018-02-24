module.exports = {
    // メインとなJavascriptファイル（エントリーポイント）
    entry: '.src/main.ts',
    
    // ファイルの出力設定
    output: {
        // 出力ファイルのディレクトリ名
        path: `${__dirname}/build`,

        //　出力ファイル名
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // 拡張子 .tsの場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'awesome-typescript-loader'
            },

            // ソースマップファイルの処理
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },

    // import文で .tsファイルを解決するため
    resolve:{
        extensions: [
            '.ts'
        ]
    },

    // ソースマップを有効に
    devtool: 'source-map'
};