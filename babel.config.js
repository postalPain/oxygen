module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module:react-native-dotenv',
            {
                allowUndefined: true,
                moduleName: "env",
                path: ".env",
                safe: false
            }
        ],
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {},
                extensions: ['.js','.jsx','.ts', '.tsx', '.es', '.es6', '.mjs']
            },
        ],
    ],
};
