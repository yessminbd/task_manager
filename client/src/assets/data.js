export const summary = {
    totalTasks: 10,

    last10Tasks: [
        {
            _id: "651bbf9b1f5e4e23456task01",
            title: "Develop User Interface",
            date: "2024-09-28",
            priority: "high",
            stage: "In progress",
            assets: [],
            team: [
                { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Backend", email: "yessmin@gmail.com", },
                {
                    _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Backend", email: "yessmin.bouchehed@example.com"
                },
                {
                    _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Développeur Backend", email: "yessmin.bouchehed@example.com"
                }
            ]
        },
        {
            _id: "651bbf9b1f5e4e23456task02",
            title: "Test User API",
            date: "2024-09-27",
            priority: "medium",
            stage: "Completed",
            assets: [],
            team: [
                { _id: "651bbf9b1f5e4e23456abcd4", name: "Wafa Kacem", title: "Développeur Backend", },
                { _id: "651bbf9b1f5e4e23456abcd4", name: "Sarra Trabelsi", title: "Développeur Backend", },
                { _id: "651bbf9b1f5e4e23456abcd5", name: "Ali Kacem", title: "Développeur Backend", }
            ]
        },
        {
            _id: "651bbf9b1f5e4e23456task03",
            title: "Sprint Planning",
            date: "2024-09-26",
            priority: "hight",
            stage: "To do",
            assets: [],
            team: [
                { _id: "651bbf9b1f5e4e23456abcd2", name: "Amira Ben Ali", title: "Développeur Backend", },
                { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Backend", }
            ]
        },
        {
            _id: "651bbf9b1f5e4e23456task04",
            title: "Fix Integration Bugs",
            date: "2024-09-25",
            priority: "High",
            stage: "In progress",
            assets: [],
            team: [
                { _id: "651bbf9b1f5e4e23456abcd6", name: "Omar El Khatib", title: "Développeur Backend", },
                { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Développeur Backend", }
            ]
        },
    ],
    users: [
        {
            _id: "651bbf9b1f5e4e23456abcd1",
            name: "Yessmin Bouchehed",
            title: "Développeur Full Stack",
            role: "Admin",
            isActive: false,
            createdAt: "2024-09-28",
            email: "yessmin.bouchehed@example.com"
        },
        {
            _id: "651bbf9b1f5e4e23456abcd2",
            name: "Amira Ben Ali",
            title: "Chef de Projet",
            role: "Manager",
            isActive: true,
            createdAt: "2024-09-28",
            email: "amira.benali@example.com"
        },
        {
            _id: "651bbf9b1f5e4e23456abcd3",
            name: "Mohamed Salah",
            title: "Développeur Backend",
            role: "User",
            isActive: false,
            createdAt: "2024-09-28",
            email: "mohamed.salah@example.com"
        },
        {
            _id: "651bbf9b1f5e4e23456abcd4",
            name: "Sarra Trabelsi",
            title: "Designer UI/UX",
            role: "User", isActive: true,
            createdAt: "2024-09-28",
            email: "sarra.trabelsi@example.com"
        },
        {
            _id: "651bbf9b1f5e4e23456abcd5",
            name: "Ali Kacem",
            title: "Testeur QA",
            role: "User", isActive: true,
            createdAt: "2024-09-28",
            email: "ali.kacem@example.com"
        }
    ],
    tasks: [
        { 'todo': 2 },
        { 'complete': 1 },
        { 'in-progress': 4 }
    ]

}
export const chartData = [
    { name: 'High', total: 1200 },
    { name: 'Medium', total: 200 },
    { name: 'Low', total: 1000 }


];
export const tasks = [
    {
        subTasks: [{
            tag: "whatsapp",
            _id: "651bbf9b1f5e4e23456task01",
            title: "Develop Back-end",
            date: "2024-09-28",
            priority: "low",
            stage: "To do",
            assets: [],
            team: [
                { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed" },
                { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah" }
            ]
        }, {
            tag: "Messenger",
            _id: "651bbf9b1f5e4e23456task01",
            title: "Develop User Interface",
            date: "2024-09-28",
            priority: "low",
            stage: "To do",
            assets: [],
            team: [
                { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed" },
                { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah" }
            ]
        },],
        _id: "651bbf9b1f5e4e23456task01",
        title: "Develop User Interface",
        date: "2024-09-28",
        priority: "high",
        stage: "In progress",
        assets: [
            "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        ],
        team: [
            {
                _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Full Stack", email: "yessmin.bouchehed@example.com"
            },
            {
                _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Testeur QA", email: "yessmin.bouchehed@example.com"
            }
        ],
        activities: [
            {
                activity: "Project completed",
                type: "started",
                by: {
                    _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Testeur QA", email: "yessmin.bouchehed@example.com"
                },
                date: "2024-10-08",
                _id: "123456666"
            },
            {
                activity: "Project completed",
                type: "in progress",
                by: {
                    _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Full Stack", email: "yessmin.bouchehed@example.com"
                },
                date: "2024-10-08",
                _id: "123456667"
            }, {
                activity: "Project completed",
                type: "assigned",
                by: {
                    _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Testeur QA", email: "yessmin.bouchehed@example.com"
                },
                date: "2024-10-08",
                _id: "123456668"
            }, {
                activity: "Project completed",
                type: "bug",
                by: {
                    _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Testeur QA", email: "yessmin.bouchehed@example.com"
                },
                date: "2024-10-08",
                _id: "123456669"
            },
            {
                activity: "Project completed",
                type: "commented",
                by: {
                    _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Testeur QA", email: "yessmin.bouchehed@example.com"
                },
                date: "2024-10-08",
                _id: "123456610"
            },
            {
                activity: "Project completed",
                type: "completed",
                by: {
                    _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Testeur QA", email: "yessmin.bouchehed@example.com"
                },
                date: "2024-10-08",
                _id: "123456611"
            },


        ]
    }, {
        _id: "651bbf9b1f5e4e23456task01",
        title: "Develop User Interface",
        date: "2024-09-28",
        priority: "medium",
        stage: "To do",
        assets: [], activities: [12, 11, 22]
        ,
        team: [
            { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Backend", },
            { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Développeur Backend", }
        ]
    }, {
        _id: "651bbf9b1f5e4e23456task01",
        title: "Develop User Interface",
        date: "2024-09-28",
        priority: "medium",
        stage: "Completed",
        assets: [],
        team: [
            { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Backend", },
            { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Développeur Backend", }
        ],
        activities: [12, 12, 11, 22, 3, "f"]

    }, {
        _id: "651bbf9b1f5e4e23456task01",
        title: "Develop User Interface",
        date: "2024-09-28",
        priority: "high",
        stage: "In progress",
        assets: [],
        team: [
            { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Backend", },
            { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed", title: "Développeur Backend", },
            { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah", title: "Développeur Backend", }
        ], activities: [12, 12, 11, 22, 3, "f"],
        subTasks: [{
            tag: "whatsapp",
            _id: "651bbf9b1f5e4e23456task01",
            title: "Develop Back-end",
            date: "2024-09-28",
            priority: "low",
            stage: "To do",
            assets: [],
            team: [
                { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed" },
                { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah" }
            ]
        }, {
            _id: "651bbf9b1f5e4e23456task01",
            title: "Develop User Interface",
            date: "2024-09-28",
            priority: "low",
            stage: "To do",
            assets: [],
            team: [
                { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed" },
                { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah" }
            ]
        },]
    }, {
        _id: "651bbf9b1f5e4e23456task01",
        title: "Develop User Interface",
        date: "2024-09-28",
        priority: "low",
        stage: "To do",
        assets: [],
        team: [
            { _id: "651bbf9b1f5e4e23456abcd1", name: "Yessmin Bouchehed" },
            { _id: "651bbf9b1f5e4e23456abcd3", name: "Mohamed Salah" }
        ]
    },
];