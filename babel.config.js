module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ['module:react-native-dotenv'],
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {},
                extensions: ['.js','.jsx','.ts', '.tsx', '.es', '.es6', '.mjs']
            },
        ],
        'react-native-reanimated/plugin' // Reanimated plugin has to be listed last
    ],
};
