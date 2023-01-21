module.exports = {
    overrides: [
        {
            files: ["**/*.scss"],
            customSyntax: require("postcss-scss"),
            extends: ["stylelint-config-standard"],
            rules: {
                "indentation": null,
                "at-rule-no-unknown": null,
                "no-empty-source": null,
                "max-empty-lines": 2,
                "no-missing-end-of-source-newline": null,
            }
        }
    ]
};