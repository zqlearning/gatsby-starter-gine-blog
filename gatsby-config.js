module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/zhengqi12/f37c7764b5c24b7aa1586f967f197ab2?v=5cc3ef35587242679bc66d75d1adf1a3"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/zhengqi12/7ff116f77971446eb884e1ebe40c4a4a?v=1ae033c2deaf4f51b057018937664722"
            }
        }
    ],
}
