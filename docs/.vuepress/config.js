module.exports = {
    base: '/zhinong-ui/',
    title: '纸农UI',
    description: '一个简单好用的UI框架',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '文档',
                link: '/get-started/'
            },
            {
                text: 'Github',
                link: 'https://github.com/ljy123668'
            },
        ],
        displayAllHeaders: true, // 默认值：false
        sidebar: [{
                title: '入门',
                children: ['/install/', '/get-started/', ],
            },
            {
                title: '组件',
                collapsable: false, // 可选的, 默认值是 true,
                children: ['/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/collapse',
                    '/components/popover',

                ],
            }


        ]
    }





}