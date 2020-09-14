module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/zhengqi12/566a2723d9584c709d89e15a3cdc238d?v=da1bacfeaf5b4fe78177822ada83222f"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/zhengqi12/4b03f248e4e74429bcbe8a0e8d89adce?v=69645962d7114015bd8fd193ec9d02c0"
            }
        }
    ],
}
