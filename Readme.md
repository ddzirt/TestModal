/**

    "postinstall": "find node_modules/ -type f -name build.gradle -not -path \"*/react-native/*\" -not -path \"*/Examples/*\" -not -path \"*/examples/*\" -exec sed -i \"s/.*com.facebook.react:react-native:.*/ implementation project(':ReactAndroid')/\" {} \";\""

*/